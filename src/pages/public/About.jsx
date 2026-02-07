import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Users, Target, Heart, Instagram, Twitter } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Discipline",
      desc: "We believe consistency is the key to unlocking potential. Show up, do the work.",
    },
    {
      icon: Users,
      title: "Community",
      desc: "You never train alone. We are a collective of like-minded individuals pushing limits.",
    },
    {
      icon: Heart,
      title: "Passion",
      desc: "Fitness isn't a chore; it's a lifestyle. We fuel that fire every single day.",
    },
  ];

  const coaches = [
    {
      name: "Alex Rivera",
      role: "Head Coach",
      image:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&auto=format&fit=crop&q=60",
      bio: "Former Olympian specializing in explosive power and agility training.",
    },
    {
      name: "Sarah Chen",
      role: "Nutrition Specialist",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
      bio: "Clinical nutritionist focused on performance fueling and recovery.",
    },
    {
      name: "Marcus Johnson",
      role: "Strength Coach",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=60",
      bio: "Powerlifting champion with a science-based approach to hypertrophy.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen">
        {/* Hero */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          {/* BG Image & Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
              className="w-full h-full object-cover grayscale opacity-40"
              alt="Gym Background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
            <h1 className="text-[var(--primary-color)] font-bold tracking-widest mb-4 uppercase">
              Who We Are
            </h1>
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-6 leading-none text-white">
              MORE THAN A GYM. <br /> IT'S A MOVEMENT.
            </h2>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-24 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-4xl font-bold italic mb-8 border-l-4 border-[var(--primary-color)] pl-6">
                "We don't just build bodies. We build character, resilience, and
                unshakeable confidence."
              </h3>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                Kadora was founded on a simple principle: human potential is
                nearly limitless when ignited by the right environment.
              </p>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                We stripped away the distractions of traditional health
                clubs—the waiting, the judgment, the mediocrity—and replaced
                them with elite equipment, data-driven coaching, and a raw,
                high-energy atmosphere.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <p className="text-4xl font-black text-[var(--primary-color)]">
                    5+
                  </p>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">
                    Years Strong
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-[var(--primary-color)]">
                    10k+
                  </p>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">
                    Lives Changed
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 bg-[var(--primary-color)]/20 rounded-[2rem] transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2669&auto=format&fit=crop"
                className="relative rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 transform hover:-rotate-1 object-cover"
                alt="Mission"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-[#111] py-24 border-y border-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              {values.map((v, i) => (
                <div key={i} className="text-center group">
                  <div className="w-20 h-20 bg-gray-900 mx-auto rounded-full flex items-center justify-center text-[var(--primary-color)] mb-6 group-hover:bg-[var(--primary-color)] group-hover:text-black transition-all shadow-[0_0_20px_rgba(37,244,120,0.1)]">
                    <v.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase italic mb-4">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-24 max-w-7xl mx-auto px-4">
          <h2 className="text-[var(--primary-color)] font-bold tracking-widest text-center mb-4 uppercase">
            The Squad
          </h2>
          <h3 className="text-5xl font-black italic text-center text-white mb-16 uppercase">
            Meet The Coaches
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[2rem]"
              >
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-2xl font-black uppercase text-white mb-1">
                    {coach.name}
                  </h4>
                  <p className="text-[var(--primary-color)] font-bold mb-4 uppercase text-sm tracking-wider">
                    {coach.role}
                  </p>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {coach.bio}
                  </p>

                  <div className="flex space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                    <a
                      href="#"
                      className="p-2 bg-white/10 rounded-full hover:bg-[var(--primary-color)] hover:text-black transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-white/10 rounded-full hover:bg-[var(--primary-color)] hover:text-black transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
