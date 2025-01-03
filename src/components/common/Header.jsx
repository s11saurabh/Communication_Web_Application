
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 shadow-2xl border-b border-gray-700 relative overflow-hidden">
      
      <div className="absolute inset-0">
       
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              rgba(37, 99, 235, 0.05) 0px,
              rgba(37, 99, 235, 0.05) 1px,
              transparent 1px,
              transparent 10px
            ),
            repeating-linear-gradient(
              45deg,
              rgba(147, 51, 234, 0.05) 0px,
              rgba(147, 51, 234, 0.05) 1px,
              transparent 1px,
              transparent 10px
            )`,
          }}
        ></div>
        
        
        <div
          className="absolute top-0 left-1/4 w-32 h-32"
          style={{
            background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1))',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        ></div>
        <div
          className="absolute top-0 right-1/4 w-32 h-32"
          style={{
            background: 'linear-gradient(-45deg, rgba(147, 51, 234, 0.1), rgba(37, 99, 235, 0.1))',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="relative group">
            <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 tracking-wider transform transition-all duration-500 hover:scale-105">
              COMMUNICATION TRACKING BY SAURABH KUMAR
            </h1>
            
            
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2"></div>
            
           
            <div className="absolute -left-4 top-1/2 w-2 h-2 bg-blue-500 rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
            <div className="absolute -right-4 top-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
            
            
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
      
      
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 relative z-10"></div>
    </header>
  );
};

export default Header;

