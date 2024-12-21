import { Card, CardContent } from './ui/card';

const experiences = [
  {
    company: "Connekt Studio",
    role: "Founder",
    period: "2022 - Present",
    description: "Building generative AI solutions",
  },
  {
    company: "AudienceTown",
    role: "Sr. Software Engineer",
    period: "2023 - Present",
    description: "Data engineering and DevOps",
  },
  {
    company: "Bitstrapped",
    role: "Software Engineering",
    period: "2020 - 2023",
    description: "Fullstack engineering team lead",
  },
  {
    company: "Grahoo",
    role: "Software Engineering",
    period: "2020",
    description: "Backend engineering",
  },
];

const Experience = () => {
  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white/90">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-black/20 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <p className="text-primary">{exp.role}</p>
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