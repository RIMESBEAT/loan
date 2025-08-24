import { FileText, Brain, CheckCircle, CreditCard } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Quick Application",
      description:
        "Fill out our smart form in under 60 seconds with basic information",
      time: "60 seconds",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description:
        "Our advanced AI reviews your application and provides instant decision",
      time: "Instant",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      icon: CheckCircle,
      title: "Verification",
      description:
        "Upload documents securely via our mobile app for final verification",
      time: "5 minutes",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      icon: CreditCard,
      title: "Get Funded",
      description:
        "Receive funds directly to your bank account, often same day",
      time: "Same day",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-green-500">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your loan in 4 simple steps. Our streamlined process is designed
            for speed and convenience.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>

                <div className="glass-morphism p-8 rounded-2xl hover-glow transform hover:scale-105 transition-all duration-300 h-full">
                  <div
                    className={`${step.bgColor} ${step.color} p-4 rounded-xl w-fit mb-6 group-hover:animate-pulse`}
                  >
                    <step.icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                    <span className="text-accent-400 font-semibold text-sm">
                      {step.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300">
            Start Your Application
          </button>
          <p className="text-gray-400 mt-4">
            No credit impact to check your rate
          </p>
        </div>
      </div>
    </section>
  );
}
