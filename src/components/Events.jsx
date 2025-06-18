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

const Events = () => {
  const events = [
    {
      title: 'Hackathon',
      description: 'Build innovative solutions in 48 hours',
      icon: '💻',
      category: 'Coding',
      prize: '₹50,000',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Robo Wars',
      description: 'Battle of the machines',
      icon: '🤖',
      category: 'Robotics',
      prize: '₹30,000',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Gaming Tournament',
      description: 'E-sports championship',
      icon: '🎮',
      category: 'Gaming',
      prize: '₹25,000',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Challenge',
      description: 'Machine learning competition',
      icon: '🧠',
      category: 'AI/ML',
      prize: '₹40,000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Circuit Design',
      description: 'Electronics innovation contest',
      icon: '⚡',
      category: 'Electronics',
      prize: '₹20,000',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'Web Development',
      description: 'Frontend showcase',
      icon: '🌐',
      category: 'Web Dev',
      prize: '₹15,000',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
            Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover exciting competitions and challenges designed to test your skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${event.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white text-2xl">
                  {event.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-gray-400 mb-4">{event.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-400 bg-blue-400/20 px-3 py-1 rounded-full">
                  {event.category}
                </span>
                <span className="text-lg font-bold text-green-400">{event.prize}</span>
              </div>
              <div className="mt-4">
                <GlowButton variant="outline" className="w-full">
                  Register
                </GlowButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;