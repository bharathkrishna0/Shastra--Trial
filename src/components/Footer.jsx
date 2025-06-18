import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              SHASTRA 2025
            </div>
            <p className="text-gray-400">
              The premier technology festival celebrating innovation and excellence.
            </p>
            <div className="flex space-x-4 mt-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                <span className="text-white">📱</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                <span className="text-white">💼</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 cursor-pointer">
                <span className="text-white">🐙</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors">About</a>
              <a href="#events" className="block text-gray-400 hover:text-blue-400 transition-colors">Events</a>
              <a href="#schedule" className="block text-gray-400 hover:text-blue-400 transition-colors">Schedule</a>
              <a href="#sponsors" className="block text-gray-400 hover:text-blue-400 transition-colors">Sponsors</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 info@shastra2025.com</p>
              <p>📞 +91 9876543210</p>
              <p>📍 Tech Campus, Innovation City</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SHASTRA Tech Fest. All rights reserved. | Made with ❤️ for innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;