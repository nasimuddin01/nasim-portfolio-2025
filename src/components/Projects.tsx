import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Vocalo.ai",
    description: "English speaking practice platform using AI to improve speaking skills.",
    tags: ["LLM", "OpenAI", "TTS", "STT"],
    link: "https://vocalo.ai"
  },
  {
    title: "SketchToImage",
    description: "Transforms sketches into high quality images using Diffusion Model.",
    tags: ["Stable Diffusion", "ControlNet", "Image To Video"],
    link: "https://sketch.connekt.studio"
  },
  {
    title: "HeyLuna.ai",
    description: "Multimodal AI Assistant with 3D avatar, voice & text interaction.",
    tags: ["LLM", "RAG", "Vector DB", "Chatbot"],
    link: "https://heyluna.ai"
  },
  {
    title: "Wordrocket.ai",
    description: "AI content creation platform for text, image, video & audio.",
    tags: ["LLM", "OpenAI", "Claude", "Content Engine"],
    link: "https://wordrocket.ai"
  },
  {
    title: "PhotoFoxAI",
    description: "AI-powered photo creation without cameras.",
    tags: ["Flux", "Diffusion", "Image To Image"],
    link: "https://photofox.ai"
  },
  {
    title: "AiStoryGen",
    description: "AI story generation with text, image, video & audio.",
    tags: ["LLM", "Diffusion", "Synthetix"],
    link: "https://aistorygen.com"
  },
];

const Projects = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white/90">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:-translate-y-1"
            >
              <Card className="bg-black/40 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors h-full">
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