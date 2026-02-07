import { useState } from "react";
import { ArrowRight, CheckCircle, Shield, Star } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useContent } from "../../context/ContentContext";

export default function StartFreeTrial() {
  const { state } = useContent();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Free Trial Started! (Mock)");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex flex-col pt-20">
        <div className="flex flex-col md:flex-row flex-grow">
          {/* Left Column - Benefits & Hero */}
          <div className="w-full md:w-1/2 relative bg-gray-900 flex flex-col justify-center p-8 md:p-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
                alt="Training"
                className="w-full h-full object-cover opacity-30 filter grayscale mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-lg mx-auto md:mx-0">
              <h1 className="text-[var(--primary-color)] font-bold tracking-widest mb-4 uppercase">
                WHY JOIN KADORA?
              </h1>
              <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6 text-white leading-none">
                TRANSFORM YOUR BODY <br /> IN 14 DAYS.
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of elite athletes who trust Kadora for their
                daily training. No commitment required.
              </p>

              <ul className="space-y-4">
                {[
                  "Unlimited access to all training programs",
                  "Personalized nutrition roadmap",
                  "Real-time form tracking",
                  "Community challenges & rewards",
                ].map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-lg font-medium text-white"
                  >
                    <CheckCircle className="w-6 h-6 text-[var(--primary-color)] mr-4 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-8 md:p-16 relative">
            <div className="w-full max-w-md relative z-10">
              <div className="text-center md:text-left mb-10">
                <h2 className="text-3xl font-bold mb-2 text-white">
                  Create your account
                </h2>
                <div className="inline-flex items-center bg-gray-900/50 px-3 py-1 rounded-full border border-gray-800">
                  <Shield className="w-3 h-3 text-[var(--primary-color)] mr-2" />
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                    No credit card required
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border-b-2 border-gray-800 focus:border-[var(--primary-color)] px-4 py-4 text-white placeholder-gray-600 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border-b-2 border-gray-800 focus:border-[var(--primary-color)] px-4 py-4 text-white placeholder-gray-600 outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border-b-2 border-gray-800 focus:border-[var(--primary-color)] px-4 py-4 text-white placeholder-gray-600 outline-none transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--primary-color)] text-black font-black text-xl py-5 rounded-none hover:bg-white transition-colors shadow-[0_0_30px_rgba(37,244,120,0.2)] mt-4 uppercase tracking-tighter"
                >
                  Start My 14-Day Free Trial
                </button>
              </form>

              <p className="text-center text-gray-600 mt-8 text-sm">
                Already have an account?{" "}
                <a
                  href="/#/admin/login"
                  className="text-white hover:text-[var(--primary-color)] transition-colors underline decoration-gray-700 underline-offset-4"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Full Width Testimonials - Bottom */}
        <div className="bg-gray-950 border-t border-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/3 text-center md:text-left">
                <h3 className="text-[var(--primary-color)] font-bold tracking-widest mb-2 uppercase">
                  Success Stories
                </h3>
                <h4 className="text-3xl font-black italic text-white">
                  DON'T JUST TAKE OUR WORD FOR IT.
                </h4>
              </div>

              <div className="md:w-2/3 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 rounded-none border-l-4 border-[var(--primary-color)]">
                  <div className="flex text-[var(--primary-color)] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="italic text-gray-400 mb-4">
                    "The structure is exactly what I needed. I've never felt
                    stronger."
                  </p>
                  <p className="font-bold text-white text-sm">
                    - Sarah Jenkins, Pro Member
                  </p>
                </div>
                <div className="hidden md:block bg-gray-900 p-6 rounded-none border-l-4 border-gray-700 hover:border-[var(--primary-color)] transition-colors">
                  <div className="flex text-[var(--primary-color)] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="italic text-gray-400 mb-4">
                    "Worth every penny. The community challenges keep me
                    accountable."
                  </p>
                  <p className="font-bold text-white text-sm">
                    - Mike T., 3-Year Member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
