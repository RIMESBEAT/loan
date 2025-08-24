import {
  Zap,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  GoalIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                FastHelpMe
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Get approved in 60 seconds with our fast lending platform. No
              paperwork, no waiting, just instant financial solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {/* <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  About Us
                </a>
              </li> */}
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#rates"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Rates & Terms
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Reviews
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Blog
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Careers
                </a>
              </li> */}
            </ul>
          </div>

          {/* Legal */}
          {/* <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Responsible Lending
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  State Licenses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  CCPA
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">1-800-FASTHELP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">admin@fasthelpme.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                <span className="text-gray-400">Ikeja, Lagos</span>
              </div>
            </div>

            {/* App Download */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">
                Download Our App
              </h4>
              <div className="flex space-x-3">
                <button className="glass-morphism px-4 py-2 flex flex-row items-center gap-2 rounded-lg text-sm hover-glow">
                  <GoalIcon /> Google Play
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="">
            <div className="text-gray-400  text-center text-sm  mb-4 md:mb-0">
              © 2024 FastHelpMe Financial Services. All rights reserved.
            </div>
            {/* <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Licensed Lender • NMLS ID: 123456</span>
              <span>Equal Housing Lender</span>
              <span>FDIC Insured</span>
            </div> */}
          </div>
          <div className="text-center text-xs text-gray-500 mt-4">
            Loans subject to credit approval. Rates and terms may vary based on
            creditworthiness and other factors.
          </div>
        </div>
      </div>
    </footer>
  );
}
