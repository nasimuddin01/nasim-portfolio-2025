import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Achievements from "@/components/Achievements";
import TechStack from "@/components/TechStack";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <TechStack />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;