
import React from 'react';

interface NavbarProps {
  onNavigate: (section: 'home' | 'services' | 'diagnostic' | 'tracker') => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-500 transition-colors shadow-[0_0_15px_rgba(239,68,68,0.5)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tighter uppercase title-custom-style">
              Electro Cars
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Inicio' },
              { id: 'services', label: 'Servicios' },
              { id: 'diagnostic', label: 'Diagnóstico IA' },
              { id: 'tracker', label: 'Estado de Orden' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as any)}
                className={`text-sm font-medium transition-colors hover:text-red-400 ${
                  activeSection === item.id ? 'text-red-500 font-bold' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-slate-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
