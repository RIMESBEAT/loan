import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2 cursor-pointer">
            <div className="relative">
              <Zap className="h-8 w-8 text-primary-500 animate-pulse" />
              <div className="absolute inset-0 h-8 w-8 text-primary-500 animate-ping opacity-20">
                <Zap className="h-8 w-8" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-green-500">
              FastHelpMe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-primary-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#rates"
              className="text-gray-300 hover:text-primary-400 transition-colors"
            >
              Rates
            </a>
            {/* <a
              href="#about"
              className="text-gray-300 hover:text-primary-400 transition-colors"
            >
              About
            </a> */}
            {/* <a
              href="#contact"
              className="text-gray-300 hover:text-primary-400 transition-colors"
            >
              Contact
            </a> */}
            {/* <button className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full hover-glow">
              Login
            </button> */}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/50 rounded-lg">
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-gray-300 hover:text-primary-400"
              >
                How It Works
              </a>
              <a
                href="#rates"
                className="block px-3 py-2 text-gray-300 hover:text-primary-400"
              >
                Rates
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-primary-400"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-primary-400"
              >
                Contact
              </a>
              <button className="w-full mt-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
