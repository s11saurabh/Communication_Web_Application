import React from 'react';
import { BarChart3, Bell, User } from 'lucide-react';

const Sidebar = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="min-h-screen bg-gray-900 shadow-2xl p-8 flex flex-col border-r border-gray-700 relative overflow-hidden">
      
      <div className="absolute inset-0">
       
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, 
              rgba(37, 99, 235, 0.05) 0px, 
              rgba(37, 99, 235, 0.05) 2px, 
              transparent 2px, 
              transparent 10px
            )`,
          }}
        ></div>

        
        <div
          className="absolute top-20 -left-10 w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
          }}
        ></div>
        <div
          className="absolute bottom-40 -right-20 w-60 h-60 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, rgba(37, 99, 235, 0.1) 50%, transparent 70%)',
          }}
        ></div>

        
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

     
      <div className="relative z-10">
       
        <div className="mb-12">
          <div className="relative group">
            <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative pb-4 font-sans transform transition-all duration-500 hover:scale-105">
              ENTNT
            </h1>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full"></div>

            <div className="absolute bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            <div className="absolute -left-4 top-1/2 w-2 h-2 bg-blue-500 rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
            <div className="absolute -right-4 top-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>

           
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

   
        <div className="flex flex-col space-y-6">
          <button
            onClick={() => (window.location.pathname = '/admin')}
            className={`p-4 rounded-lg flex items-center transition-all duration-500 transform hover:translate-x-2 border-2 border-gray-700 ${
              currentPath === '/admin'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 border-none'
                : 'bg-gray-800/90 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-lg hover:shadow-blue-500/30'
            }`}
          >
            <BarChart3 className="w-6 h-6 mr-3" />
            <span className="font-medium">Admin</span>
          </button>

          <button
            onClick={() => (window.location.pathname = '/user')}
            className={`p-4 rounded-lg flex items-center transition-all duration-500 transform hover:translate-x-2 border-2 border-gray-700 ${
              currentPath === '/user'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 border-none'
                : 'bg-gray-800/90 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-lg hover:shadow-blue-500/30'
            }`}
          >
            <User className="w-6 h-6 mr-3" />
            <span className="font-medium">User</span>
          </button>

          <button
            onClick={() => (window.location.pathname = '/reports')}
            className={`p-4 rounded-lg flex items-center transition-all duration-500 transform hover:translate-x-2 border-2 border-gray-700 ${
              currentPath === '/reports'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 border-none'
                : 'bg-gray-800/90 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-lg hover:shadow-blue-500/30'
            }`}
          >
            <Bell className="w-6 h-6 mr-3" />
            <span className="font-medium">Reports</span>
          </button>
        </div>
      </div>

    
      <div className="mt-auto pt-8 relative z-10">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transform transition-all duration-500 hover:translate-x-2 cursor-pointer">
          <p className="text-sm text-gray-400 text-center">© 2024 SAURABH</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
