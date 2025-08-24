import {
  Zap,
  Brain,
  DollarSign,
  Target,
  Shield,
  Star,
  Clock,
  Smartphone,
  Award,
  TrendingUp,
  Users,
  Lock,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast Approval",
      description:
        "60-second application with instant decisions and same-day funding available.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    // {
    //   icon: Brain,
    //   title: "Smart AI Technology",
    //   description:
    //     "Advanced algorithms for fair credit assessment beyond traditional scores with blockchain security.",
    //   color: "text-purple-400",
    //   bgColor: "bg-purple-400/10",
    // },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description:
        "Rates as low as 2.99% APR with no hidden fees and complete transparency in pricing.",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      icon: Target,
      title: "Personalized Experience",
      description:
        "Custom loan recommendations with integrated budgeting tools and free credit monitoring.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    // {
    //   icon: Shield,
    //   title: "Bank-Level Security",
    //   description:
    //     "256-bit SSL encryption with FDIC insured partner banks and SOC 2 Type II certification.",
    //   color: "text-cyan-400",
    //   bgColor: "bg-cyan-400/10",
    // },
    {
      icon: Star,
      title: "5-Star Service",
      description:
        "24/7  human support with 4.9/5 rating from 2,000+ satisfied customers.",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
  ];

  const stats = [
    { icon: Users, value: "2k+", label: "Happy Customers" },

    { icon: Clock, value: "60s", label: "Avg Approval Time" },
    { icon: Award, value: "4.9/5", label: "Customer Rating" },
  ];

  return (
    <section id="why-choose-us" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-green-500">
              FastHelpMe?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of lending with cutting-edge technology,
            unmatched speed, and customer-first approach.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20 ">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="glass-morphism p-6 rounded-2xl hover-glow transform hover:scale-105 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-primary-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-morphism p-8 rounded-2xl hover-glow transform hover:scale-105 transition-all duration-300 cyber-border"
            >
              <div
                className={`${feature.bgColor} ${feature.color} p-3 rounded-xl w-fit mb-6 group-hover:animate-pulse`}
              >
                <feature.icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-500 mt-4"></div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        {/* <div className="mt-20 text-center">
          <div className="glass-morphism p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Additional Benefits
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-accent-400" />
                <span className="text-gray-300">No Prepayment Penalties</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4 text-primary-400" />
                <span className="text-gray-300">Mobile-First Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Credit Score Improvement</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
