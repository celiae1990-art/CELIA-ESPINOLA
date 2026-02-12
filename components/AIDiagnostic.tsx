
import React, { useState, useRef, useEffect } from 'react';
import { getDiagnosticAdvice } from '../services/geminiService';
import { DiagnosticMessage } from '../types';

const AIDiagnostic: React.FC = () => {
  const [messages, setMessages] = useState<DiagnosticMessage[]>([
    { 
      role: 'model', 
      text: '¡Hola! Soy "MITU", el experto en circuitos de Electro Cars Service. \n\nTraigo mi oberol gris listo para trabajar. Dime qué falla eléctrica notas y te daré un informe técnico al grano. \n\n¿Qué le sucede a tu vehículo?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [orderInput, setOrderInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const response = await getDiagnosticAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response || 'No detecto corriente. Intenta de nuevo.' }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'model', text: 'Cortocircuito en la conexión. Revisa tu internet.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleOrderRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderInput.trim()) {
      setMessages(prev => [...prev, { role: 'model', text: `Buscando la orden ${orderInput.toUpperCase()}... Revisa la pestaña de "Estado de Orden".` }]);
      setOrderInput('');
    }
  };

  const whatsappLink = "https://wa.me/595985100118?text=Hola%20MITU,%20vengo%20del%20pre-diagnostico%20IA%20de%20Electro%20Cars%20Service";

  return (
    <section className="py-8 max-w-5xl mx-auto px-4 h-[calc(100vh-100px)] flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24 bg-red-600 rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(220,38,38,0.4)] border-4 border-white">
             <div className="w-full h-full bg-[#E31E24] flex items-center justify-center overflow-hidden">
                {/* Visual representation of the black cat on red background mascot */}
                <img 
                  src="https://api.a0.dev/assets/image?text=minimalist%20black%20cat%20head%20with%20big%20yellow%20eyes%20centered%20on%20a%20solid%20vibrant%20red%20background%20clean%20vector%20art&aspect=1:1"
                  alt="MITU Mascot"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute bottom-0 w-full bg-slate-800/80 py-0.5 text-center">
                <span className="text-[7px] font-bold text-white tracking-widest leading-none">MITU</span>
             </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black title-custom-style">
              INFORME TÉCNICO
            </h2>
            <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mt-1">PRESENTADO POR MITU</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 font-bold text-sm shadow-lg transition-transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Directo
          </a>
          <div className="glass-panel p-2 rounded-xl flex items-center gap-2 border-red-500/20">
            <input 
              type="text" 
              value={orderInput}
              onChange={(e) => setOrderInput(e.target.value)}
              placeholder="ORD-000"
              className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs font-mono text-white focus:outline-none focus:border-red-500 w-24"
            />
            <button 
              onClick={handleOrderRedirect}
              className="bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg transition-all"
            >
              OK
            </button>
          </div>
        </div>
      </div>

      <div className="flex-grow glass-panel rounded-3xl overflow-hidden flex flex-col border-red-500/10 shadow-2xl relative">
        <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-950/50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] md:max-w-[70%] p-4 rounded-xl shadow-lg transition-all ${
                msg.role === 'user' 
                ? 'bg-red-700 text-white rounded-tr-none border border-red-500/30 font-medium' 
                : 'bg-slate-800 text-slate-100 rounded-tl-none border-l-4 border-l-red-600 leading-relaxed whitespace-pre-wrap font-mono text-sm relative'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 text-red-500 p-4 rounded-xl rounded-tl-none border border-slate-700 animate-pulse font-bold text-xs flex items-center gap-2">
                <span className="animate-spin text-lg">⚙️</span>
                <span>MITU ESTÁ OLFATEANDO LA CORRIENTE...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 bg-slate-900">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Hola MITU, mi auto no arranca..."
              className="flex-grow bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 text-slate-100"
            />
            <button 
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white px-6 rounded-xl transition-all font-bold flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.3)]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AIDiagnostic;
