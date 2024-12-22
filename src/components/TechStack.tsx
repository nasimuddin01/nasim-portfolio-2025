import {
    Layers,
    Sparkles,
    Database,
    Paintbrush
} from 'lucide-react';

const technologies = [
    {
        category: "Fullstack",
        tools: [
            "// Frontend",
            "React",
            "Vue",
            "JavaScript",
            "Tailwind",
            "Three.js",
            "Firebase",
            "Supabase",
            "shadcn",
            "// Backend",
            "Node.js",
            "Python",
            "Express.js",
            "// Databases",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "// Tools",
            "Git",
            "GitHub"
        ],
        icon: Layers,
        color: "text-blue-400"
    },
    {
        category: "Gen AI",
        tools: [
            "// Core",
            "LLMs",
            "Diffusion Models",
            "Prompt Engineering",
            "Fine Tuning",
            "// Frameworks",
            "Langchain",
            "Hugging Face",
            "// Data & Storage",
            "RAG",
            "VectorDB",
            "// Platforms",
            "Hugging Face",
            "OpenAI",
            "Anthropic",
            "Google",
        ],
        icon: Sparkles,
        color: "text-purple-400"
    },
    {
        category: "Cloud/Data",
        tools: [
            "// Cloud Platforms",
            "GCP",
            "Cloudflare",
            "// Infrastructure",
            "Docker",
            "Terraform",
            "Pulumi",
            "// Data Storage",
            "Snowflake",
            "BigQuery",
            "TinyBird",
            "AlloyDB",
            "// Data Processing",
            "SQL",
            "Data Pipelines",
            "ETL",
            "Bash",
        ],
        icon: Database,
        color: "text-cyan-400"
    },
    {
        category: "Designing",
        tools: [
            "// Design Tools",
            "Figma",
            "ShadCn",
            "Three.js",
            "// Core Technologies",
            "HTML",
            "CSS",
            "// Design Concepts",
            "User Experience",
            "User Interface",
            "UX/UI",
            "Product Design",
            "SEO"
        ],
        icon: Paintbrush,
        color: "text-green-400"
    }
];

const TechStack = () => {
    return (
        <section className="py-12 md:py-24 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-white/90">
                    Tech Stack
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {technologies.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={index}
                                className="group relative rounded-xl p-1 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-4 md:p-6 h-full">
                                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                        <div className={`p-2 md:p-3 rounded-xl bg-primary/10 ${tech.color}`}>
                                            <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-semibold">{tech.category}</h3>
                                    </div>

                                    <div className="space-y-3 md:space-y-4">
                                        {Object.entries(groupTools(tech.tools)).map(([group, tools]) => (
                                            <div key={group}>
                                                <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/50 mb-1.5 md:mb-2">
                                                    {group}
                                                </div>
                                                <div className="flex flex-wrap gap-1 md:gap-1.5">
                                                    {tools.map((tool: string, toolIndex: number) => (
                                                        <span
                                                            key={toolIndex}
                                                            className={`px-2 md:px-2.5 py-0.5 md:py-1 text-[11px] md:text-xs rounded-md
                                                                bg-primary/5 hover:bg-primary/15
                                                                border border-primary/10 hover:border-primary/30
                                                                transition-all duration-300
                                                                text-white/80 hover:text-white/90
                                                                ${tech.color.replace('text-', 'hover:text-')}`}
                                                        >
                                                            {tool}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Helper function to group tools based on comments
const groupTools = (tools: string[]) => {
    const groups: { [key: string]: string[] } = {};
    let currentGroup = '';

    tools.forEach(tool => {
        if (tool.startsWith('//')) {
            currentGroup = tool.replace('//', '').trim();
            if (!groups[currentGroup]) {
                groups[currentGroup] = [];
            }
        } else {
            // If no group has been set yet, use empty string as default
            if (!currentGroup) {
                currentGroup = '';
                if (!groups[currentGroup]) {
                    groups[currentGroup] = [];
                }
            }
            groups[currentGroup].push(tool);
        }
    });

    // If there are no groups (no comments found), put all tools under empty string key
    if (Object.keys(groups).length === 0) {
        groups[''] = tools;
    }

    return groups;
};

export default TechStack;