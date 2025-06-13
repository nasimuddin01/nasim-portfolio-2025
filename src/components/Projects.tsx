import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const projects = [
  {
    title: "Vocalo.ai",
    description: "Gamify language learning with immersive AI conversations, personalised curriculum, and real-time comprehensive feedback.",
    tags: ["LLM", "OpenAI", "TTS", "STT"],
    link: "https://vocalo.ai",
    color: "text-purple-600"
  },
  {
    title: "SketchToImage",
    description: "Turn simple sketches into stunning, photorealistic artwork using AI diffusion models.",
    tags: ["Stable Diffusion", "ControlNet", "Image To Video"],
    link: "https://sketchtoimage.com",
    color: "text-pink-600"
  },
  {
    title: "HeyLuna.ai",
    description: "Experience natural conversations with an expressive 3D AI assistant that sees, hears, and understands.",
    tags: ["LLM", "RAG", "Vector DB", "Chatbot"],
    link: "https://heyluna.ai",
    color: "text-yellow-400"
  },
  {
    title: "PhotoFoxAI",
    description: "Generate professional-quality product photography and content without traditional photography equipment.",
    tags: ["Flux", "Diffusion", "Image To Image"],
    link: "https://photofox.ai",
    color: "text-blue-400"
  },
  {
    title: "AiStoryGen",
    description: "Craft immersive stories with AI-generated narratives, visuals, and audio experiences.",
    tags: ["LLM", "Diffusion", "Synthetix"],
    link: "https://aistorygen.org",
    color: "text-orange-400"
  },
  {
    title: "InvoiceAgent.ai",
    description: "Automate invoice extraction and cost management for businesses with AI.",
    tags: ["LLM", "OCR", "Natural Language Query"],
    link: "https://invoiceagent.ai",
    color: "text-rose-400"
  },
  {
    title: "Path Health",
    description: "AI-powered fitness and wellness platform for personalized workouts & nutrition recommendations.",
    tags: ["LLM", "OpenAI", "Claude", "Content Engine"],
    link: "https://trypathhealth.com",
    color: "text-emerald-400"
  },
  {
    title: "CallWise.ai",
    description: "AI voice agent for personalized call scheduling and follow-ups.",
    tags: ["LLM", "TTS", "STT", "Twilio"],
    link: "https://callwise.ai",
    color: "text-cyan-400"
  },
  {
    title: "PhotoBooth AI",
    description: "AI-powered photo booth for personalized photos in various styles.",
    tags: ["Diffusion", "Image To Image", "AI Upscaling"],
    link: "https://photobooth.connekt.studio",
    color: "text-violet-400"
  },
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
              className="group relative rounded-xl p-1 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-4 md:p-6 h-full">
                <div className="flex items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                  <h3 className={`text-lg md:text-xl font-semibold ${project.color}`}>{project.title}</h3>
                  <ExternalLink className={`w-4 h-4 ${project.color} opacity-70 group-hover:opacity-100 transition-colors`} />
                </div>

                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 md:gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2 md:px-2.5 py-0.5 md:py-1 text-[11px] md:text-xs rounded-md
                        bg-primary/5 hover:bg-primary/15
                        border border-primary/10 hover:border-primary/30
                        transition-all duration-300
                        text-white/80
                        ${project.color.replace('text-', 'hover:text-')}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
