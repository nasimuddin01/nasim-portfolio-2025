import { Brain, Rocket, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white/90">A True Builder</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-black/10 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <Brain className="w-12 h-12 mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Development</h3>
                <p className="text-white/70">
                  Full-stack engineering with expertise in modern web technologies and AI integration.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/10 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <Rocket className="w-12 h-12 mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Design</h3>
                <p className="text-white/70">
                  Creating intuitive user experiences and visually appealing interfaces.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/10 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <Target className="w-12 h-12 mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Marketing</h3>
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