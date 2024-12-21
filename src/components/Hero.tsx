import { ChevronDown } from 'lucide-react';
import OrbitalScene from './OrbitalScene';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <OrbitalScene />
      <div className="hero-gradient absolute inset-0" />
      <div className="content-overlay h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
          Crafting the Future with
          <span className="text-primary block mt-2">Generative AI</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center mb-8">
          Multi-disciplinary tech entrepreneur specializing in cutting-edge AI applications
          and innovative solutions.
        </p>
        <div className="scroll-indicator animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;