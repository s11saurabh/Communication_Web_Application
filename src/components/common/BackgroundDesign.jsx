import React from 'react';
const BackgroundDesign = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-blue-200 via-purple-300 to-transparent opacity-30" />

      <div className="absolute -top-20 -left-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-100 via-purple-200 to-transparent opacity-20" />
      
      
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] opacity-20">
        <div className="absolute bottom-12 right-12 h-3 w-3 rounded-full bg-blue-500" />
        <div className="absolute bottom-16 right-24 h-3 w-3 rounded-full bg-purple-500" />
        <div className="absolute bottom-24 right-16 h-3 w-3 rounded-full bg-blue-500" />
        <div className="absolute bottom-20 right-32 h-3 w-3 rounded-full bg-purple-500" />
      </div>
      
      
      <div className="absolute -bottom-32 -left-32 h-[800px] w-[800px] rounded-full bg-gradient-to-tr from-blue-200 via-purple-100 to-transparent opacity-30" />

      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(37, 99, 235, 0.05) 0px,
            rgba(37, 99, 235, 0.05) 1px,
            transparent 1px,
            transparent 10px
          ),
          repeating-linear-gradient(
            -45deg,
            rgba(147, 51, 234, 0.05) 0px,
            rgba(147, 51, 234, 0.05) 1px,
            transparent 1px,
            transparent 10px
          )`
        }}
      />

      
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 opacity-[0.03]"
        style={{
          background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1))',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
        }}
      />
      
      <div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-[0.03]"
        style={{
          background: 'linear-gradient(-45deg, rgba(147, 51, 234, 0.1), rgba(37, 99, 235, 0.1))',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
        }}
      />


      <div 
        className="absolute inset-0 opacity-[0.075]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2563eb 1px, transparent 1px),
            linear-gradient(to bottom, #2563eb 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

     
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: `
            radial-gradient(rgb(37, 99, 235) 1px, transparent 1px),
            radial-gradient(rgb(147, 51, 234) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px, 25px 25px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-600/[0.02] to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-600/[0.02] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default BackgroundDesign;
