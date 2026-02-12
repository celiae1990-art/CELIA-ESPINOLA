
import React from 'react';

const SERVICES = [
  {
    title: 'Alternadores y Arranques',
    desc: 'Reparación integral y recambio de componentes de carga y encendido.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Baterías de Alta Gama',
    desc: 'Venta, instalación y comprobación de estado de salud de acumuladores.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    )
  },
  {
    title: 'Escaneo Computarizado',
    desc: 'Diagnóstico avanzado de fallas en ECU, sensores y sistemas electrónicos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Sistemas de Iluminación',
    desc: 'Instalación de LED, reparación de cortocircuitos y alineación de faros.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 title-custom-style">SERVICIOS ESPECIALIZADOS</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Soluciones profesionales para cualquier falla eléctrica de tu vehículo, desde los clásicos hasta los modelos más modernos.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-8 rounded-2xl hover:bg-slate-800/80 transition-all group border-b-4 border-b-transparent hover:border-b-red-600"
            >
              <div className="w-14 h-14 bg-red-500/20 text-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-black mb-3 title-custom-style text-left">{service.title.toUpperCase()}</h3>
              <p className="text-slate-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
