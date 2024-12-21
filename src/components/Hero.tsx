import { ChevronDown } from 'lucide-react';
import OrbitalScene from './OrbitalScene';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <OrbitalScene />
      <div className="hero-gradient" />
      <div className="content-overlay h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-inter text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary/90 via-primary to-primary/90">
            Building Tomorrow's
            <span className="block mt-2">AI Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-12 font-light tracking-wide">
            Pioneering the intersection of artificial intelligence and human creativity 
            to shape the future of technology.
          </p>
        </div>
        <div className="scroll-indicator">
          <ChevronDown className="w-6 h-6 text-primary opacity-75" />
        </div>
      </div>
    </section>
  );
};

export default Hero;