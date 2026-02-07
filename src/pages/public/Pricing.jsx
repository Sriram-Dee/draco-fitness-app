import {
  Check,
  HelpCircle,
  Minus,
  ArrowRight,
  Sparkles,
  Crown,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useContent } from "../../context/ContentContext";

export default function Pricing() {
  const { state } = useContent();
  const navigate = useNavigate();

  const planIcons = {
    Beginner: Zap,
    Pro: Sparkles,
    Athlete: Crown,
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--primary-color)]/10 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 rounded-full px-5 py-2 mb-6">
            <span className="text-[var(--primary-color)] font-bold text-sm tracking-widest uppercase">
              Membership Plans
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black italic uppercase text-white leading-tight mb-6">
            Choose Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-emerald-300">
              Power Level
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Flexible plans designed for every stage of your fitness journey.
            Scale up as you get stronger.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 bg-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {state.plans.map((plan, index) => {
              const Icon = planIcons[plan.title] || Zap;
              return (
                <div
                  key={plan.id}
                  className={`relative group ${plan.isPopular ? "md:-mt-4 md:mb-4" : ""}`}
                >
                  {/* Popular Badge */}
                  {plan.isPopular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-[var(--primary-color)] to-emerald-400 text-black text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-[var(--primary-color)]/30">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div
                    className={`h-full p-8 lg:p-10 rounded-3xl border-2 transition-all duration-300 flex flex-col ${
                      plan.isPopular
                        ? "border-[var(--primary-color)] bg-gradient-to-b from-[var(--primary-color)]/10 to-transparent shadow-[0_0_60px_rgba(37,244,120,0.15)]"
                        : "border-gray-800 bg-gray-900/50 hover:border-gray-700 hover:bg-gray-900/80"
                    }`}
                  >
                    {/* Plan Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                        plan.isPopular
                          ? "bg-[var(--primary-color)] text-black"
                          : "bg-gray-800 text-[var(--primary-color)]"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Plan Title */}
                    <h3 className="text-2xl font-black text-white uppercase italic mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-8">
                      {plan.title === "Beginner"
                        ? "Start your transformation"
                        : plan.title === "Pro"
                          ? "For dedicated athletes"
                          : "Elite performance gear"}
                    </p>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl lg:text-6xl font-black text-white">
                          ${plan.price}
                        </span>
                        <span className="text-gray-500 text-lg">/month</span>
                      </div>
                      {plan.isPopular && (
                        <p className="text-[var(--primary-color)] text-sm font-bold mt-2">
                          Save 20% with annual billing
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-10 flex-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              plan.isPopular
                                ? "bg-[var(--primary-color)]"
                                : "bg-gray-800"
                            }`}
                          >
                            <Check
                              className={`w-3 h-3 ${plan.isPopular ? "text-black" : "text-[var(--primary-color)]"}`}
                            />
                          </div>
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      onClick={() => navigate("/start-trial")}
                      className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group ${
                        plan.isPopular
                          ? "bg-[var(--primary-color)] text-black hover:shadow-lg hover:shadow-[var(--primary-color)]/30 hover:scale-[1.02]"
                          : "bg-gray-800 text-white hover:bg-gray-700"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compare Features Table - Desktop */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-4">
              Compare Features
            </h2>
            <p className="text-gray-500 text-lg">
              Find the plan that fits your training style
            </p>
          </div>

          <div className="hidden md:block bg-gray-900/50 rounded-3xl p-8 border border-gray-800 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-6 px-6 text-gray-400 font-normal text-sm uppercase tracking-wider">
                    Features
                  </th>
                  <th className="py-6 px-6 text-center">
                    <span className="font-bold text-white text-lg">
                      Beginner
                    </span>
                  </th>
                  <th className="py-6 px-6 text-center bg-[var(--primary-color)]/5 rounded-t-2xl">
                    <span className="font-bold text-[var(--primary-color)] text-lg">
                      Pro
                    </span>
                  </th>
                  <th className="py-6 px-6 text-center">
                    <span className="font-bold text-white text-lg">
                      Athlete
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Live Coaching",
                    beginner: false,
                    pro: true,
                    athlete: true,
                  },
                  {
                    name: "Nutritional Tracking",
                    beginner: true,
                    pro: true,
                    athlete: true,
                  },
                  {
                    name: "Equipment Access",
                    beginner: "Basic",
                    pro: "Full",
                    athlete: "Full + Partner Gyms",
                  },
                  {
                    name: "Wearable Sync",
                    beginner: false,
                    pro: true,
                    athlete: true,
                  },
                  {
                    name: "1-on-1 Calls",
                    beginner: false,
                    pro: "Quarterly",
                    athlete: "Monthly",
                  },
                  {
                    name: "Community Challenges",
                    beginner: true,
                    pro: true,
                    athlete: true,
                  },
                  {
                    name: "Priority Support",
                    beginner: false,
                    pro: true,
                    athlete: true,
                  },
                  {
                    name: "Custom Workout Plans",
                    beginner: false,
                    pro: true,
                    athlete: true,
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-800/50 last:border-0 hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="py-5 px-6 text-gray-300 font-medium">
                      {row.name}
                    </td>
                    <td className="py-5 px-6 text-center">
                      {row.beginner === true ? (
                        <Check className="w-5 h-5 mx-auto text-[var(--primary-color)]" />
                      ) : row.beginner === false ? (
                        <Minus className="w-5 h-5 mx-auto text-gray-700" />
                      ) : (
                        <span className="text-gray-400 text-sm">
                          {row.beginner}
                        </span>
                      )}
                    </td>
                    <td className="py-5 px-6 text-center bg-[var(--primary-color)]/5">
                      {row.pro === true ? (
                        <Check className="w-5 h-5 mx-auto text-[var(--primary-color)]" />
                      ) : row.pro === false ? (
                        <Minus className="w-5 h-5 mx-auto text-gray-700" />
                      ) : (
                        <span className="text-white font-bold text-sm">
                          {row.pro}
                        </span>
                      )}
                    </td>
                    <td className="py-5 px-6 text-center">
                      {row.athlete === true ? (
                        <Check className="w-5 h-5 mx-auto text-[var(--primary-color)]" />
                      ) : row.athlete === false ? (
                        <Minus className="w-5 h-5 mx-auto text-gray-700" />
                      ) : (
                        <span className="text-gray-400 text-sm">
                          {row.athlete}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Features List */}
          <div className="md:hidden space-y-6">
            {state.plans.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 rounded-2xl border ${
                  plan.isPopular
                    ? "border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                    : "border-gray-800 bg-gray-900/50"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 ${
                    plan.isPopular
                      ? "text-[var(--primary-color)]"
                      : "text-white"
                  }`}
                >
                  {plan.title} Includes:
                </h3>
                <ul className="space-y-3">
                  {plan.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <Check className="w-4 h-4 text-[var(--primary-color)] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-4">
              Got Questions?
            </h2>
            <p className="text-gray-500 text-lg">We've got answers</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time through your account settings. Changes take effect on your next billing cycle.",
              },
              {
                q: 'What is the "Custom Kit"?',
                a: "Athletes receive a quarterly care package with Draco branded supplements, apparel, and specialized training equipment.",
              },
              {
                q: "Do you offer family plans?",
                a: "Yes! Contact our support team for special family bundle pricing.",
              },
              {
                q: "Is there a free trial?",
                a: "All plans come with a 14-day free trial. No credit card required to start.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors group"
              >
                <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary-color)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary-color)]/20 transition-colors">
                    <HelpCircle className="w-4 h-4 text-[var(--primary-color)]" />
                  </div>
                  {faq.q}
                </h3>
                <p className="text-gray-400 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-12">
            Need help choosing?{" "}
            <a
              href="/contact"
              className="text-[var(--primary-color)] hover:underline font-bold"
            >
              Talk to an advisor
            </a>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[var(--primary-color)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-black italic text-black uppercase mb-6 leading-tight">
            Ready to Start
            <br />
            Your Journey?
          </h2>
          <p className="text-xl text-black/70 mb-10 max-w-xl mx-auto">
            Join thousands of athletes who've transformed their lives with
            Draco.
          </p>
          <button
            onClick={() => navigate("/start-trial")}
            className="bg-black text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl flex items-center gap-3 mx-auto"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-6 text-black/50 font-bold text-sm uppercase tracking-wider">
            No credit card required • 14-day free trial
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
