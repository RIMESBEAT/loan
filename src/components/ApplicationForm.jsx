import { useState } from "react";
import { User, Mail, Phone, DollarSign, Briefcase, Shield } from "lucide-react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    loanAmount: "",
    loanPurpose: "",
    annualIncome: "",
    employmentStatus: "",
    employer: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="apply" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900/10 to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Apply Now -{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                It's Free!
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your personalized rate in 60 seconds. No impact to your credit
              score to check rates.
            </p>

            {/* Security Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-accent-400" />
                <span className="text-gray-300">256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-primary-400" />
                <span className="text-gray-300">No Credit Score Impact</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-green-400" />
                <span className="text-gray-300">FDIC Insured Partners</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="glass-morphism p-6 rounded-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-400">
                    500K+
                  </div>
                  <div className="text-sm text-gray-400">Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-400">
                    4.9/5
                  </div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">$2B+</div>
                  <div className="text-sm text-gray-400">Funded</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="glass-morphism p-8 rounded-2xl cyber-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Quick Application
              </h3>

              {/* Personal Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary-400 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </h4>

                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Loan Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-accent-400 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Loan Details
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Loan Amount</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-15000">$5,000 - $15,000</option>
                      <option value="15000-35000">$15,000 - $35,000</option>
                      <option value="35000-50000">$35,000 - $50,000</option>
                      <option value="50000+">$50,000+</option>
                    </select>
                  </div>

                  <div className="relative">
                    <select
                      name="loanPurpose"
                      value={formData.loanPurpose}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Loan Purpose</option>
                      <option value="debt-consolidation">
                        Debt Consolidation
                      </option>
                      <option value="home-improvement">Home Improvement</option>
                      <option value="business">Business</option>
                      <option value="emergency">Emergency</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Employment */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-yellow-400 flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Employment
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      name="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Employment Status</option>
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="retired">Retired</option>
                      <option value="student">Student</option>
                    </select>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="annualIncome"
                      placeholder="Annual Income"
                      value={formData.annualIncome}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-4 rounded-full text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300 animate-glow"
              >
                🚀 Get My Rate - FREE
              </button>

              <p className="text-sm text-gray-400 text-center">
                Takes 60 seconds • No obligation • Secure & confidential
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
