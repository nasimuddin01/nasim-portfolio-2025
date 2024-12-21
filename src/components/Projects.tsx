import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Developed a comprehensive analytics platform utilizing advanced machine learning algorithms.",
    metrics: "500K+ data points processed daily",
    tech: "TensorFlow, Python, React"
  },
  {
    title: "Generative Design System",
    description: "Created an AI system that generates unique design patterns based on user parameters.",
    metrics: "98% user satisfaction rate",
    tech: "PyTorch, Three.js, Node.js"
  },
  {
    title: "Predictive Maintenance Solution",
    description: "Implemented AI-driven predictive maintenance for industrial equipment.",
    metrics: "45% reduction in downtime",
    tech: "scikit-learn, Python, AWS"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card hover:bg-card/80 transition-colors duration-300">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-primary">{project.metrics}</p>
                  <p className="text-sm text-muted-foreground">{project.tech}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;