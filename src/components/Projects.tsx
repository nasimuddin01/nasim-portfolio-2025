import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const projects = [
  {
    title: "Vocalo.ai",
    description: "English speaking practice platform using AI to improve speaking skills.",
    tags: ["LLM", "OpenAI", "TTS", "STT"],
  },
  {
    title: "SketchToImage",
    description: "Transforms sketches into high quality images using Diffusion Model.",
    tags: ["Stable Diffusion", "ControlNet", "Image To Video"],
  },
  {
    title: "HeyLuna.ai",
    description: "Multimodal AI Assistant with 3D avatar, voice & text interaction.",
    tags: ["LLM", "RAG", "Vector DB", "Chatbot"],
  },
  {
    title: "Wordrocket.ai",
    description: "AI content creation platform for text, image, video & audio.",
    tags: ["LLM", "OpenAI", "Claude", "Content Engine"],
  },
  {
    title: "PhotoFoxAI",
    description: "AI-powered photo creation without cameras.",
    tags: ["Flux", "Diffusion", "Image To Image"],
  },
  {
    title: "AiStoryGen",
    description: "AI story generation with text, image, video & audio.",
    tags: ["LLM", "Diffusion", "Synthetix"],
  },
];

const Projects = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white/90">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-black/40 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
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