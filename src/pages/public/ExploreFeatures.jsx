import { ArrowRight, Users, Zap, Utensils, Activity, Play } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const features = [
  {
    title: "Elite Personal Training",
    description:
      "Connect with world-class coaches who customize every aspect of your training. Our trainers aren't just automated bots; they are real experts managing your progress.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop",
    icon: Users,
    reverse: false,
  },
  {
    title: "Smart Equipment Sync",
    description:
      "Seamlessly integrate with IoT-enabled gym equipment. Your reps, sets, and weight are automatically logged so you can focus on lifting, not tracking.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop",
    icon: Zap,
    reverse: true,
  },
  {
    title: "Precision Nutrition",
    description:
      "Fuel your body with meal plans designed by clinical nutritionists. Macro-tracking is built-in, adjusting automatically based on your daily energy expenditure.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2670&auto=format&fit=crop",
    icon: Utensils,
    reverse: false,
  },
  {
    title: "Community & Challenges",
    description:
      "Join a global community of athletes. Compete in monthly leaderboards, join team challenges, and find your accountability partners.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop",
    icon: Activity,
    reverse: true,
  },
];

export default function ExploreFeatures() {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white pt-24">
        {/* Header */}
        <div className="text-center py-24 px-4 max-w-4xl mx-auto">
          <h1 className="text-[var(--primary-color)] font-bold tracking-widest mb-4">
            EXPLORE THE ECOSYSTEM
          </h1>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 leading-tight">
            MORE THAN JUST AN APP.
          </h2>
          <p className="text-xl text-gray-400">
            Kadora is a complete performance platform designed to replace your
            trainer, nutritionist, and workout log.
          </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-0">
          {features.map((feature, idx) => (
            <section
              key={idx}
              className="relative border-t border-[var(--primary-color)]/20"
            >
              <div
                className={`flex flex-col md:flex-row ${feature.reverse ? "md:flex-row-reverse" : ""}`}
              >
                {/* Text Side */}
                <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center bg-[#0a0a0a] relative overflow-hidden">
                  {/* Background Pattern for Texture */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-color)]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 border border-[var(--primary-color)]/30 rounded-full flex items-center justify-center mb-8 text-[var(--primary-color)] shadow-[0_0_15px_rgba(37,244,120,0.1)]">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black uppercase italic mb-6 tracking-tighter text-white">
                      {feature.title}
                    </h3>
                    <div className="w-12 h-1 bg-[var(--primary-color)] mb-8"></div>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light">
                      {feature.description}
                    </p>
                    <button className="flex items-center text-[var(--primary-color)] font-bold uppercase tracking-widest hover:text-white transition-colors group text-sm md:text-base">
                      Discover More{" "}
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden group border-b md:border-b-0 md:border-l border-gray-900/50">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
                  {/* Overlay for text readability if needed (mostly for mobile) */}
                  <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="py-32 bg-[var(--primary-color)] text-black text-center px-4 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-6xl font-black italic tracking-tighter mb-8">
              SEEN ENOUGH?
            </h2>
            <p className="text-2xl font-bold mb-12">
              Start your 14-day free trial today.
            </p>
            <button
              onClick={() => (window.location.href = "#/start-trial")}
              className="bg-black text-white px-12 py-6 rounded-full font-bold text-2xl hover:scale-105 transition-transform shadow-2xl flex items-center justify-center mx-auto"
            >
              <Play className="w-6 h-6 mr-3 fill-current" /> Start Trial
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
