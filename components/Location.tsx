
import React from 'react';

const Location: React.FC = () => {
  // Updated map embed centered on the new coordinates (-27.2876014, -55.8141789)
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.513426543163!2d-55.81636758494875!3d-27.287601383196414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457bf64395d9803%3A0xa537f9c8eb29a041!2sElectro%20Cars!5e0!3m2!1ses!2spy!4v1710100000000!5m2!1ses!2spy";
  const directLink = "https://www.google.com/maps/place/Electro+Cars/@-27.2876014,-55.8141789,17z/data=!3m1!4b1!4m6!3m5!1s0x9457bf64395d9803:0xa537f9c8eb29a041!8m2!3d-27.2876014!4d-55.8141789!16s%2Fg%2F11sq51qspx?hl=es";

  return (
    <section className="py-20 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-5xl font-black title-custom-style uppercase">Nuestra Ubicación</h2>
            <p className="text-xl text-slate-400">
              Visítanos en nuestro taller especializado. Contamos con la mejor tecnología en electricidad automotriz para garantizar el mejor servicio.
            </p>
            <div className="p-6 glass-panel rounded-2xl border-l-4 border-l-red-600">
              <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Taller Electro Cars</h4>
              <p className="text-slate-300 font-medium">Encarnación - Cambyretá, Itapúa</p>
            </div>
            <a 
              href={directLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black rounded-full transition-all shadow-lg hover:shadow-red-500/30 group"
            >
              <span>ABRIR EN GOOGLE MAPS</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          </div>
          <div className="w-full md:w-1/2 h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 glass-panel">
            <iframe 
              src={mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) invert(0.9) hue-rotate(180deg)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Electro Cars Service"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
