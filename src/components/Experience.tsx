import { Card, CardContent } from './ui/card';

const experiences = [
  {
    company: "Connekt Studio",
    logo: "/company/connektstudio.webp",
    role: "Founder & CEO",
    period: "2022 - Present",
    description: "Building AI products with diffusion models, LLMs and computer vision. Leading a team of 10+ engineers & creatives while designing scalable systems.",
  },
  {
    company: "AudienceTown",
    logo: "/company/audiencetown.jpeg",
    role: "Data & Cloud Engineer",
    period: "2023 - Present",
    description: "Building data pipelines and analytics systems at scale. Core infrastructure and cloud automation for large datasets.",
  },
  {
    company: "Bitstrapped",
    logo: "/company/bitstrapped.jpeg",
    role: "Software Engineer",
    period: "2020 - 2023",
    description: "Developed analytics platforms for energy sector. Led architecture and deployment while mentoring team members.",
  },
  {
    company: "Graaho",
    logo: "/company/graaho.png",
    role: "Backend Engineer",
    period: "2020",
    description: "Built secure Python backends and APIs. Implemented PoC solutions focusing on data security and scale.",
  },
];

const Experience = () => {
  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white/90 z-10">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-black/10 backdrop-blur-sm border-primary/20 group">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 object-contain rounded-lg filter grayscale transition-all duration-300 group-hover:grayscale-0"
                      />
                      <div>
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <p className="text-primary">{exp.role}</p>
                      </div>
                    </div>
                    <span className="text-white/50 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-white/70">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;