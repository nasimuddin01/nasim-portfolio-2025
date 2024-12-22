import { Brain, Rocket, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white/90 z-10">A True Builder</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-black/20 backdrop-blur-md border-primary/20 hover:bg-black/30 transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/10 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity">
            <CardContent className="pt-8 relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-blue-400/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
                  <Brain className="w-12 h-12 mb-6 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Engineering</h3>
                <p className="text-white/70">
                  Software engineering with expertise in Web and AI Technologies.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/20 backdrop-blur-md border-primary/20 hover:bg-black/30 transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/10 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity">
            <CardContent className="pt-8 relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-purple-400/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
                  <Rocket className="w-12 h-12 mb-6 text-purple-400 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">Design</h3>
                <p className="text-white/70">
                  Creating intuitive user experiences and visually appealing interfaces.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/20 backdrop-blur-md border-primary/20 hover:bg-black/30 transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-500/10 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity">
            <CardContent className="pt-8 relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-green-400/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
                  <Target className="w-12 h-12 mb-6 text-green-400 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">Marketing</h3>
                <p className="text-white/70">
                  Building and growing products with effective marketing strategies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;