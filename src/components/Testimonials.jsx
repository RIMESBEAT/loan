import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Small Business Owner",
      content:
        "Got approved in 2 minutes and funded the same day. FastHelpMe saved my business during a critical time. The AI-powered process is incredible!",
      rating: 5,
      avatar: "SM",
    },
    {
      name: "Mike Rodriguez",
      role: "Teacher",
      content:
        "The mobile app is amazing. I can manage everything from my phone. Best rates I found anywhere, and the customer service is outstanding.",
      rating: 5,
      avatar: "MR",
    },
    {
      name: "Jennifer Chen",
      role: "Nurse",
      content:
        "Their AI actually gave me a better rate than my bank, even with average credit. The whole process was transparent and stress-free.",
      rating: 5,
      avatar: "JC",
    },
    {
      name: "David Thompson",
      role: "Contractor",
      content:
        "Needed emergency funding for equipment. Applied at 10 PM and had the money by noon the next day. Absolutely incredible service!",
      rating: 5,
      avatar: "DT",
    },
    {
      name: "Lisa Park",
      role: "Marketing Manager",
      content:
        "The personalized loan recommendations were spot-on. They understood my needs better than I did. Highly recommend FastHelpMe!",
      rating: 5,
      avatar: "LP",
    },
    {
      name: "Robert Johnson",
      role: "Freelancer",
      content:
        "As a freelancer, getting loans is usually difficult. FastHelpMe's AI looked beyond my credit score and approved me instantly.",
      rating: 5,
      avatar: "RJ",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who chose FastHelpMe for their
            financial needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-morphism p-8 rounded-2xl hover-glow transform hover:scale-105 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary-400/30 absolute top-4 right-4" />

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="glass-morphism p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">
              Trusted by Thousands
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  4.9/5
                </div>
                <div className="text-gray-300">Trustpilot Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  500K+
                </div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">
                  99.9%
                </div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
