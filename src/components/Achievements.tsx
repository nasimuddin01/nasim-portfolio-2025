import { Clock, Package, Users, Star } from "lucide-react";

const achievements = [
    {
        metric: "5+",
        label: "Years Active",
        gradientFrom: "from-pink-600/20",
        gradientTo: "to-purple-600/20",
        icon: Clock,
        iconColor: "text-pink-400"
    },
    {
        metric: "7+",
        label: "Products Launched",
        gradientFrom: "from-blue-600/20",
        gradientTo: "to-cyan-600/20",
        icon: Package,
        iconColor: "text-blue-400"
    },
    {
        metric: "100k+",
        label: "Worldwide Users",
        gradientFrom: "from-cyan-600/20",
        gradientTo: "to-teal-600/20",
        icon: Users,
        iconColor: "text-cyan-400"
    },
    {
        metric: "4.8+",
        label: "Average Rating",
        gradientFrom: "from-yellow-600/20",
        gradientTo: "to-orange-600/20",
        icon: Star,
        iconColor: "text-yellow-400"
    },
];

const Achievements = () => {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 max-w-7xl relative">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white/90">
                    Achievements
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`} />

                            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full 
                                          transition-all duration-300 group-hover:scale-105 group-hover:border-white/20
                                          flex flex-col items-center justify-center overflow-hidden">
                                <div className={`absolute w-24 h-24 rounded-full blur-2xl ${item.iconColor} opacity-20 -z-10`} />

                                <item.icon
                                    className={`w-10 h-10 mb-4 ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}
                                    strokeWidth={1.5}
                                />
                                <span className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    {item.metric}
                                </span>
                                <span className="text-white/70 text-center text-sm md:text-base font-medium">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements; 