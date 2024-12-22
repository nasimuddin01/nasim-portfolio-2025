import { Clock, Package, Users, Star } from "lucide-react";

const achievements = [
    {
        metric: "5+",
        label: "Years Active",
        bgColor: "bg-pink-50/5",
        icon: Clock,
        iconColor: "text-pink-400"
    },
    {
        metric: "7+",
        label: "Products Launched",
        bgColor: "bg-blue-50/5",
        icon: Package,
        iconColor: "text-blue-400"
    },
    {
        metric: "100k+",
        label: "Worldwide Users",
        bgColor: "bg-cyan-50/5",
        icon: Users,
        iconColor: "text-cyan-400"
    },
    {
        metric: "4.8+",
        label: "Average Rating",
        bgColor: "bg-yellow-50/5",
        icon: Star,
        iconColor: "text-yellow-400"
    },
];

const Achievements = () => {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 max-w-7xl relative">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white/90 z-10">
                    Achievements
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.bgColor} backdrop-blur-sm border border-primary/20 rounded-2xl p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1`}
                        >
                            <item.icon className={`w-10 h-10 mb-4 ${item.iconColor}`} strokeWidth={2} />
                            <span className="text-4xl md:text-5xl font-bold mb-2">{item.metric}</span>
                            <span className="text-white/70 text-center text-sm md:text-base">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements; 