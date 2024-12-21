import { ChevronDown } from 'lucide-react';
import OrbitalScene from './OrbitalScene';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <OrbitalScene />
      <div className="content-overlay h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-inter text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-center mb-8">
            <span className="text-white/80">Building Tomorrow's</span>
            <span className="block mt-2 text-white/80">AI Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto text-center mb-12 font-light tracking-wide">
            A generalist engineer and designer who started tinkering with electronics at an early age. 
            Now crafting generative AI solutions using cutting-edge technology.
          </p>
        </div>
        <div className="scroll-indicator">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;