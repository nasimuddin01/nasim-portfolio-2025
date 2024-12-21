import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const projects = [
  {
    title: "Vocalo.ai",
    description: "Gamify language learning with immersive AI conversations, personalised curriculum, and real-time comprehensive feedback.",
    tags: ["LLM", "OpenAI", "TTS", "STT"],
    link: "https://vocalo.ai"
  },
  {
    title: "SketchToImage",
    description: "Turn simple sketches into stunning, photorealistic artwork using AI diffusion models.",
    tags: ["Stable Diffusion", "ControlNet", "Image To Video"],
    link: "https://sketchtoimage.com"
  },
  {
    title: "HeyLuna.ai",
    description: "Experience natural conversations with an expressive 3D AI assistant that sees, hears, and understands.",
    tags: ["LLM", "RAG", "Vector DB", "Chatbot"],
    link: "https://heyluna.ai"
  },
  {
    title: "PhotoFoxAI",
    description: "Generate professional-quality product photography and content without traditional photography equipment.",
    tags: ["Flux", "Diffusion", "Image To Image"],
    link: "https://photofox.ai"
  },
  {
    title: "AiStoryGen",
    description: "Craft immersive stories with AI-generated narratives, visuals, and audio experiences.",
    tags: ["LLM", "Diffusion", "Synthetix"],
    link: "https://aistorygen.org"
  },
  {
    title: "Wordrocket.ai",
    description: "Create professional content across text, image, video, and audio with one powerful AI platform.",
    tags: ["LLM", "OpenAI", "Claude", "Content Engine"],
    link: "https://wordrocket.ai"
  }
];

const Projects = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white/90 z-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:-translate-y-1"
            >
              <Card className="bg-black/10 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors h-full">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <ExternalLink className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
