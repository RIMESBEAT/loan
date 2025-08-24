import { Check, Star, Zap } from "lucide-react";

export default function LoanOptions() {
  const loanTypes = [
    {
      title: "Personal Loans",
      subtitle: "For life's moments",
      amount: "N10,000 - 25,000",
      apr: "2.99% daily interest",
      term: "8-10 days",
      features: [
        "No collateral required",
        "Fixed interest rates",
        "Flexible repayment terms",
        "No prepayment penalties",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Business Loans",
      subtitle: "Grow your business",
      amount: "N25,000 - N50,000",
      apr: "2.99% daily interest",
      term: "1-2 weeks",
      features: [
        "Fast business funding",
        "Competitive rates",
        "Minimal documentation",
        "Same-day approval",
      ],
      popular: true,
      color: "from-primary-500 to-accent-500",
    },
    {
      title: "Emergency Loans",
      subtitle: "When you need it now",
      amount: "N50,000 - N150,000",
      apr: "2.99% daily interest",
      term: " 1-2 months",
      features: [
        "Instant approval",
        "Same-day funding",
        "No credit check options",
        "24/7 application",
      ],
      popular: false,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="rates" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loan{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-green-500">
              Options
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect loan solution for your needs. All with
            competitive rates and flexible terms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {loanTypes.map((loan, index) => (
            <div
              key={index}
              className={`relative glass-morphism p-8 rounded-2xl hover-glow transform hover:scale-105 transition-all duration-300 ${
                loan.popular ? "ring-2 ring-primary-500" : ""
              }`}
            >
              {/* Popular Badge */}
              {loan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${loan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {loan.title}
                </h3>
                <p className="text-gray-400">{loan.subtitle}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="text-3xl font-bold text-white mb-2">
                  {loan.amount}
                </div>
                <div className="text-primary-400 font-semibold mb-1">
                  {loan.apr}
                </div>
                <div className="text-gray-400 text-sm">{loan.term}</div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {loan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <Check className="h-5 w-5 text-accent-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  loan.popular
                    ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover-glow"
                    : "glass-morphism text-white border border-primary-500/30 hover:border-primary-500"
                }`}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass-morphism p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Why Our Rates Are Better
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  2.99%
                </div>
                <div className="text-gray-300">Starting APR</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">
                  N0
                </div>
                <div className="text-gray-300">Hidden Fees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
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
