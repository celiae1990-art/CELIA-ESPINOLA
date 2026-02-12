
import React from 'react';

interface HeroProps {
  onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight title-custom-style tracking-tighter">
          EN EL TALLER <br />
          ELECTRO CARS SERVICE
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Somos expertos en la electricidad del automóvil. Diagnósticos precisos, reparaciones garantizadas y tecnología de vanguardia para tu vehículo.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onNavigate}
            className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-red-500/30 flex items-center gap-2 group"
          >
            Diagnóstico con IA
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-full transition-all border border-slate-700">
            Ver Nuestros Servicios
          </button>
        </div>
      </div>

      {/* Car Silhouette Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-20 -z-20 pointer-events-none">
        <img src="https://picsum.photos/id/1071/1200/400?grayscale" alt="Car silhouette" className="mask-image-linear" />
      </div>
    </section>
  );
};

export default Hero;
