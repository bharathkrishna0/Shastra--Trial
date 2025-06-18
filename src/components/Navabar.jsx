import React from 'react';

const GlowButton = ({ children, variant = 'primary', onClick, className = '' }) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]',
    secondary: 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)]',
    outline: 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black shadow-[0_0_15px_rgba(59,130,246,0.3)]'
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-blue-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            SHASTRA
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-gray-300 hover:text-blue-400 transition-colors duration-300 ${
                  activeSection === item.id ? 'text-blue-400' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <GlowButton variant="outline" className="hidden md:block">
            Register Now
          </GlowButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;