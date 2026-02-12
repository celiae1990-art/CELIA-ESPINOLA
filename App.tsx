
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIDiagnostic from './components/AIDiagnostic';
import StatusTracker from './components/StatusTracker';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'services' | 'diagnostic' | 'tracker'>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero onNavigate={() => setActiveSection('diagnostic')} />
            <Services />
            <Location />
          </>
        );
      case 'services':
        return (
          <>
            <Services />
            <Location />
          </>
        );
      case 'diagnostic':
        return <AIDiagnostic />;
      case 'tracker':
        return <StatusTracker />;
      default:
        return <Hero onNavigate={() => setActiveSection('diagnostic')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar onNavigate={setActiveSection} activeSection={activeSection} />
      <main className="flex-grow pt-20">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
