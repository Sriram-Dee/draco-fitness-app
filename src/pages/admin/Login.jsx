import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock, Mail, ArrowRight, Shield, Zap } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (email === "admin@draco.com" && password === "admin") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Invalid credentials (Try: admin@draco.com / admin)");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--primary-color)]/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--primary-color)]/5 rounded-full blur-[200px] translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      {/* Left Side - Branding (Desktop) */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative z-10 p-12">
        <div className="max-w-lg">
          <Link to="/" className="inline-block mb-12">
            <h1 className="text-4xl font-black tracking-tighter text-white">
              DRACO<span className="text-[var(--primary-color)]">.</span>
            </h1>
          </Link>

          <h2 className="text-5xl font-black italic uppercase text-white leading-tight mb-6">
            Command
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-emerald-300">
              Your Empire
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Access the control center. Manage content, track metrics, and shape
            the Draco experience.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[var(--primary-color)]" />
              </div>
              <div>
                <h4 className="font-bold text-white">Secure Access</h4>
                <p className="text-sm text-gray-500">
                  Enterprise-grade protection
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[var(--primary-color)]" />
              </div>
              <div>
                <h4 className="font-bold text-white">Real-time Analytics</h4>
                <p className="text-sm text-gray-500">
                  Track performance instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center relative z-10 p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <Link to="/" className="lg:hidden inline-block mb-8">
            <h1 className="text-3xl font-black tracking-tighter text-white">
              DRACO<span className="text-[var(--primary-color)]">.</span>
            </h1>
          </Link>

          <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-color)] to-emerald-400 flex items-center justify-center mb-6 shadow-lg shadow-[var(--primary-color)]/20">
                <Lock className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-black text-white uppercase italic mb-2">
                Admin Access
              </h2>
              <p className="text-gray-500">
                Enter your credentials to continue
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/50 border-2 border-gray-800 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary-color)] transition-colors"
                    placeholder="admin@draco.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black/50 border-2 border-gray-800 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary-color)] transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[var(--primary-color)] to-emerald-400 text-black font-black py-4 rounded-xl hover:shadow-lg hover:shadow-[var(--primary-color)]/30 transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                ) : (
                  <>
                    Enter Dashboard <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-center text-gray-600 text-sm">
                Demo Credentials:{" "}
                <span className="text-gray-400">admin@draco.com</span> /{" "}
                <span className="text-gray-400">admin</span>
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm mt-8">
            <Link
              to="/"
              className="text-[var(--primary-color)] hover:underline"
            >
              ← Back to Homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
