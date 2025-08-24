import { ArrowRight, Shield, Zap, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-accent-500/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-primary-400/20 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 bg-clip-text text-accent-400 ">
              FASTHELP
            </span>
            <br />
            <span className="text-white">Instant Loans</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get approved in
            <span className="text-accent-400 font-semibold">60 seconds</span>
            with our fast lending platform. No paperwork, no waiting, just
            instant financial solutions.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full">
              <Zap className="h-5 w-5 text-accent-400" />
              <span className="text-sm">60s Approval</span>
            </div>
            <div className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-primary-400" />
              <span className="text-sm">Bank-Level Security</span>
            </div>
            <div className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full">
              <Clock className="h-5 w-5 text-accent-400" />
              <span className="text-sm">24/7 Available</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300">
              Apply Now - Free
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass-morphism text-white px-8 py-4 rounded-full text-lg font-semibold hover-glow border border-primary-500/30">
              Check Your Rate
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            No impact to your credit score • Secure & Confidential
          </p>
        </div>
      </div>
    </section>
  );
}
