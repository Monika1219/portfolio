import React from 'react';

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=1080&fit=crop"
          alt="Data Analytics Workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 to-primary-100/75"></div>
      </div>

      <div className="relative z-10 text-center px-8">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">
          Monika Kumar
        </h1>
        <p className="text-2xl font-light tracking-wide text-neutral-900">
          Data Analyst
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
