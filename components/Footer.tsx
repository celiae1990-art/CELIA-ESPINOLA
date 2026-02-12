
import React from 'react';

const Footer: React.FC = () => {
  const googleMapsLink = "https://www.google.com/maps/place/Electro+Cars/@-27.2876014,-55.8141789,17z/data=!3m1!4b1!4m6!3m5!1s0x9457bf64395d9803:0xa537f9c8eb29a041!8m2!3d-27.2876014!4d-55.8141789!16s%2Fg%2F11sq51qspx?hl=es";

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3 shadow-[0_0_10px_rgba(220,38,38,0.5)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase title-custom-style">
              ELECTRO CARS SERVICE
            </span>
          </div>
          <p className="text-slate-500 max-w-sm">
            Especialistas en electricidad del automóvil. Brindamos servicios de alta calidad con diagnósticos precisos y garantizados.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contacto</h4>
          <ul className="space-y-4 text-slate-500">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (0985) 100118
            </li>
            <li className="flex items-start gap-2 group">
              <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <a 
                href={googleMapsLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                ELECTRO CARS - ENCARNACIÓN
                <span className="block text-[10px] uppercase font-bold text-slate-600 group-hover:text-red-600">Ver ubicación en el Mapa</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Horarios</h4>
          <ul className="space-y-2 text-slate-500">
            <li className="flex justify-between">
              <span>Lun - Vie:</span>
              <span className="text-slate-300">07:00 - 18:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sábados:</span>
              <span className="text-slate-300">08:00 - 13:00</span>
            </li>
            <li className="flex justify-between text-red-500 font-bold">
              <span>Domingos:</span>
              <span>Cerrado</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
        &copy; {new Date().getFullYear()} Electro Cars Service. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
