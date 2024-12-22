import { ChevronDown } from 'lucide-react';
import OrbitalScene from './OrbitalScene';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black/40 to-transparent">
      <OrbitalScene />

      <div className="content-overlay h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-[130px] aspect-square mb-8 opacity-0 animate-fade-in">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 
                          rounded-full mix-blend-overlay filter blur-xl animate-pulse duration-2000"></div>
            <img
              src="/nasim.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full 
                       border-2 border-white/10 backdrop-blur-sm
                       hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="max-w-4xl text-center">
          <h1 className="font-inter font-black text-center mb-8">
            <span className="text-3xl md:text-4xl lg:text-5xl text-white/90 hover:text-white transition-all duration-500
                           opacity-0 animate-fade-in-up [animation-delay:400ms]">
              Building Tomorrow's
            </span>
            <span className="text-5xl md:text-7xl lg:text-8xl block mt-2 
                         relative
                         bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-500 bg-clip-text text-transparent
                         hover:from-cyan-300 hover:via-blue-500 hover:to-indigo-400 transition-all duration-500
                         opacity-0 animate-fade-in-up [animation-delay:600ms]">
              AI Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-center mb-12 
                     font-light tracking-wide hover:text-white transition-all duration-300
                     opacity-0 animate-fade-in-up [animation-delay:800ms]">
            Nasim Uddin is a generalist software engineer and designer with a passion for building -
            from early days of tinkering with electronics to now crafting cutting-edge generative AI solutions.
          </p>
        </div>

        <div className="scroll-indicator opacity-0 animate-fade-in [animation-delay:1200ms]">
          <ChevronDown className="w-6 h-6 text-white/50 hover:text-white/90 transition-colors duration-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;