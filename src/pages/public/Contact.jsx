import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronDown,
  ChevronUp,
  MessageSquare,
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Contact() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What are your opening hours?",
      answer:
        "We are open 24/7 for members with keycard access. Staffed hours are Mon-Fri 6am-10pm and Sat-Sun 8am-8pm.",
    },
    {
      question: "Can I freeze my membership?",
      answer:
        "Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons. Just contact support.",
    },
    {
      question: "Do you offer guest passes?",
      answer:
        "Absolutely! All Pro and Athlete members get 2 guest passes per month to bring friends or family.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-24 pb-20">
        {/* Hero Section */}
        <div className="text-center py-16 px-4 max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--primary-color)]/20 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="relative z-10">
            <h1 className="text-[var(--primary-color)] font-bold tracking-widest mb-4 uppercase">
              Here to Help
            </h1>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 leading-none">
              GOT QUESTIONS? <br /> WE'VE GOT ANSWERS.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whether you're looking to join, need help with your plan, or just
              want to verify our coffee selection - we're here.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 mb-24">
          {/* Contact Info Column */}
          <div className="space-y-8">
            <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 hover:border-[var(--primary-color)] transition-colors group">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-6 text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">
                For general inquiries and support.
              </p>
              <a
                href="mailto:support@draco.com"
                className="text-white font-bold hover:text-[var(--primary-color)] transition-colors text-lg"
              >
                support@draco.com
              </a>
            </div>

            <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 hover:border-[var(--primary-color)] transition-colors group">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-6 text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-400 mb-4">Mon-Fri from 8am to 5pm.</p>
              <a
                href="tel:+15550000000"
                className="text-white font-bold hover:text-[var(--primary-color)] transition-colors text-lg"
              >
                +1 (555) 000-0000
              </a>
            </div>

            <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 hover:border-[var(--primary-color)] transition-colors group">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-6 text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Visit HQ</h3>
              <p className="text-gray-400 mb-4">
                Come say hi at our main office.
              </p>
              <p className="text-white font-bold text-lg">
                100 Fitness Blvd, <br /> Los Angeles, CA 90210
              </p>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-gray-900/50 p-8 md:p-12 rounded-[3rem] border border-gray-800">
            <h3 className="text-3xl font-black italic mb-8 uppercase">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[var(--primary-color)] uppercase tracking-widest mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black border border-gray-800 rounded-xl p-4 text-white focus:border-[var(--primary-color)] outline-none transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--primary-color)] uppercase tracking-widest mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black border border-gray-800 rounded-xl p-4 text-white focus:border-[var(--primary-color)] outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--primary-color)] uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-black border border-gray-800 rounded-xl p-4 text-white focus:border-[var(--primary-color)] outline-none transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--primary-color)] uppercase tracking-widest mb-2">
                  Subject
                </label>
                <select className="w-full bg-black border border-gray-800 rounded-xl p-4 text-white focus:border-[var(--primary-color)] outline-none transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Membership Support</option>
                  <option>Personal Training</option>
                  <option>Careers</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--primary-color)] uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  className="w-full bg-black border border-gray-800 rounded-xl p-4 text-white focus:border-[var(--primary-color)] outline-none transition-colors h-32 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button className="w-full bg-[var(--primary-color)] text-black font-black text-xl py-5 rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(37,244,120,0.2)] flex items-center justify-center uppercase tracking-wider">
                Send Message <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black italic text-center mb-12 uppercase">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#111] rounded-2xl border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-900 transition-colors"
                >
                  <span className="font-bold text-lg text-white">
                    {faq.question}
                  </span>
                  {activeAccordion === i ? (
                    <ChevronUp className="text-[var(--primary-color)]" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </button>
                {activeAccordion === i && (
                  <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
