
import React, { useState } from 'react';
import { RepairStatus } from '../types';

const MOCK_REPAIRS: Record<string, RepairStatus> = {
  'ORD-123': {
    id: 'ORD-123',
    vehicle: 'Toyota Corolla 2022',
    status: 'Repairing',
    progress: 65,
    lastUpdate: '2023-10-25 14:30'
  },
  'ORD-456': {
    id: 'ORD-456',
    vehicle: 'Ford Ranger 2019',
    status: 'Ready',
    progress: 100,
    lastUpdate: '2023-10-26 09:15'
  }
};

const StatusTracker: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [result, setResult] = useState<RepairStatus | null>(null);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = MOCK_REPAIRS[orderId.toUpperCase()];
    if (found) {
      setResult(found);
      setError('');
    } else {
      setResult(null);
      setError('No se encontró ninguna orden con ese número. Prueba con ORD-123 o ORD-456.');
    }
  };

  return (
    <section className="py-20 max-w-2xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4 title-custom-style">SEGUIMIENTO DE ORDEN</h2>
        <p className="text-slate-400">Ingresa el código que te entregamos en el taller para ver el progreso de tu vehículo en tiempo real.</p>
      </div>

      <div className="glass-panel p-8 rounded-3xl shadow-xl border border-white/5">
        <form onSubmit={handleSearch} className="mb-8">
          <label className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Número de Orden</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Ej: ORD-000"
              className="flex-grow bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 text-xl font-mono text-red-500 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500/50"
            />
            <button className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 rounded-xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              Consultar
            </button>
          </div>
        </form>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-center">
            {error}
          </div>
        )}

        {result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-black title-custom-style">{result.vehicle.toUpperCase()}</h3>
                <p className="text-slate-500 font-mono text-sm uppercase">{result.id}</p>
              </div>
              <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                result.status === 'Ready' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-500'
              }`}>
                {result.status === 'Ready' ? '¡LISTO!' : 'EN PROCESO'}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Progreso de Reparación</span>
                <span className="text-red-500 font-bold">{result.progress}%</span>
              </div>
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-700 to-red-500 rounded-full transition-all duration-1000"
                  style={{ width: `${result.progress}%` }}
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex justify-between items-center text-sm text-slate-500">
              <span>Última actualización:</span>
              <span className="font-mono">{result.lastUpdate}</span>
            </div>
            
            {result.status === 'Ready' && (
              <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-green-400 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Tu vehículo está listo para ser retirado. ¡Te esperamos!</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default StatusTracker;
