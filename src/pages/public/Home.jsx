import { useNavigate } from "react-router-dom";
import { useContent } from "../../context/ContentContext";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Users,
  Zap,
  Utensils,
  Star,
  Quote,
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Home() {
  const { state } = useContent();
  const { home_hero } = state.site_content;
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={state.site_content.home_hero.image_url}
            alt="Fitness Background"
            className="w-full h-full object-cover opacity-40"
            style={{ objectPosition: "center 20%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <div className="inline-block bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 rounded-full px-4 py-1 mb-6 animate-fade-in-up">
            <span className="text-[var(--primary-color)] font-bold text-sm tracking-[0.2em] uppercase">
              High Energy Training
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-8 leading-[0.9] uppercase text-white animate-fade-in-up delay-100 drop-shadow-2xl">
            Unleash
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
              Your
            </span>
            <br />
            <span className="text-[var(--primary-color)]">Potential</span>
          </h1>
          {/* Mobile vs Desktop Description Differences */}
          <p className="hidden md:block text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            {state.site_content.home_hero.subtitle}
          </p>
          <p className="md:hidden text-lg text-gray-300 mb-8 max-w-xs mx-auto animate-fade-in-up delay-200">
            Train harder, recover faster, and crush your goals with Draco.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300 mb-16">
            <button
              onClick={() => navigate("/start-trial")}
              className="bg-[var(--primary-color)] text-black px-10 py-4 rounded-full font-black text-lg uppercase tracking-wider hover:scale-105 transition-transform flex items-center shadow-[0_0_20px_rgba(37,244,120,0.4)] cursor-pointer"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => navigate("/explore")}
              className="px-10 py-4 rounded-full font-black text-lg uppercase tracking-wider text-white border-2 border-white/20 hover:bg-white/10 hover:border-white transition-all flex items-center backdrop-blur-sm cursor-pointer"
            >
              View Programs
            </button>
          </div>

          {/* Hero Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-8 animate-fade-in-up delay-500">
            <div className="text-center">
              <p className="text-[var(--primary-color)] text-3xl font-black">
                500+
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">
                Workouts
              </p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block"></div>
            <div className="text-center">
              <p className="text-[var(--primary-color)] text-3xl font-black">
                120
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">
                Trainers
              </p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block"></div>
            <div className="text-center">
              <p className="text-[var(--primary-color)] text-3xl font-black">
                24/7
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">
                Access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic text-white leading-none mb-4">
                Redefine Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  Performance
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-lg">
                Everything you need to reach your peak fitness levels under one
                roof, guided by elite science and technology.
              </p>
            </div>
            <button
              onClick={() => navigate("/explore")}
              className="hidden md:flex items-center text-[var(--primary-color)] font-bold tracking-widest uppercase hover:text-white transition-colors mt-8 md:mt-0"
            >
              Explore All Features <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Trainers",
                icon: Users,
                desc: "Work with world-class coaches who tailor every movement to your specific body mechanics.",
                points: ["1-on-1 Sessions", "Form Analysis"],
              },
              {
                title: "Modern Equipment",
                icon: Zap,
                desc: "Access the latest technology in strength and cardio equipment including IoT-integrated tracking.",
                points: ["Biometric Tracking", "Smart Weights"],
              },
              {
                title: "Nutrition Plans",
                icon: Utensils,
                desc: "Customized meal strategies designed by clinical nutritionists to fuel your specific training.",
                points: ["Macronutrient Goals", "Weekly Adjustments"],
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#111] p-10 rounded-[2rem] border border-gray-800 hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,244,120,0.1)] group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-color)]/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:bg-[var(--primary-color)]/10"></div>

                <div className="w-16 h-16 bg-gray-900/80 rounded-2xl flex items-center justify-center mb-8 text-[var(--primary-color)] shadow-inner">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase italic">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed font-light text-sm">
                  {feature.desc}
                </p>
                <ul className="space-y-3">
                  {feature.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-center text-gray-300 text-sm font-bold"
                    >
                      <div className="w-2 h-2 rounded-full bg-[var(--secondary-color)] mr-3 shadow-[0_0_10px_var(--secondary-color)]"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[var(--primary-color)] font-bold tracking-widest mb-2 uppercase">
              Real Results
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-center mb-8 uppercase italic text-white">
              Inside the <br />{" "}
              <span className="text-[var(--primary-color)]">Revolution</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join thousands of others who have transformed their lives with our
              high-energy training systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Last 30lbs and completely changed my mindset. The community at Draco keeps me coming back every single morning.",
                name: "Marcus R.",
                role: "Member since 2022",
                image:
                  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=60",
              },
              {
                quote:
                  "The personalized nutrition plan was a game changer for me. I finally have energy for my workouts and my work day.",
                name: "Sarah J.",
                role: "Member since 2023",
                image:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60",
              },
              {
                quote:
                  "Elite equipment and elite atmosphere. If you're serious about your training, this is the only place to be.",
                name: "David K.",
                role: "Member since 2021",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#111] rounded-[2rem] overflow-hidden border border-gray-900 hover:border-gray-700 transition-colors group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                </div>
                <div className="p-8 relative -mt-12">
                  <div className="flex space-x-1 mb-4 text-[var(--primary-color)]">
                    {[...Array(5)].map((_, starI) => (
                      <Star key={starI} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full border-2 border-[var(--primary-color)] mr-4 object-cover"
                    />
                    <div>
                      <p className="font-bold text-white text-base">{t.name}</p>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section - DESKTOP */}
      <section className="hidden md:flex py-24 mb-16 mx-4 rounded-[3rem] bg-[var(--primary-color)] text-black relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-8 transform -rotate-1 uppercase leading-none">
            Ready to Push <br /> Your Limits?
          </h2>
          <p className="text-2xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Get your first{" "}
            <span className="font-bold border-b-2 border-black">
              14 days for free
            </span>
            . No commitment, just progress.
          </p>
          <button
            onClick={() => navigate("/start-trial")}
            className="bg-black text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-pointer flex items-center mx-auto uppercase tracking-wider"
          >
            Claim Your Free Trial <ArrowRight className="ml-3 w-6 h-6" />
          </button>

          <p className="mt-6 text-sm font-bold opacity-60 uppercase tracking-widest">
            Limited spots available this month
          </p>
        </div>
      </section>

      {/* CTA Section - MOBILE */}
      <section className="md:hidden py-16 bg-black text-[var(--primary-color)] relative border-t border-[var(--primary-color)]">
        <div className="px-4 text-center">
          <h2 className="text-4xl font-black italic tracking-tighter mb-6">
            START NOW
          </h2>
          <p className="text-white text-lg mb-8">
            Your potential is waiting.
            <br /> Get 14 days on us.
          </p>
          <button
            onClick={() => navigate("/start-trial")}
            className="w-full bg-[var(--primary-color)] text-black py-4 rounded-xl font-bold text-xl shadow-lg cursor-pointer flex items-center justify-center"
          >
            Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
