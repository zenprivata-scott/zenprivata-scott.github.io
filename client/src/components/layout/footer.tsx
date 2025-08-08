import { Link } from "wouter";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zen-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-zen-orange rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <span className="text-zen-muted font-light text-xl">ZEN</span>
                <span className="text-white font-bold text-xl">PRIVATA</span>
                <sup className="text-xs">®</sup>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Protecting Community Development Financial Institutions with comprehensive cybersecurity and privacy frameworks designed for your unique needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/zenprivata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-zen-orange transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@zenprivata.com"
                className="text-gray-400 hover:text-zen-orange transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-zen-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-gray-400 hover:text-zen-orange transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-zen-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-zen-orange transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-zen-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-zen-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-zen-orange transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-gray-400 hover:text-zen-orange transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#security" className="text-gray-400 hover:text-zen-orange transition-colors">
                  Security Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 ZenPrivata. All rights reserved. Sponsored by the African American Alliance of CDFI CEOs.
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="mailto:hello@zenprivata.com"
              className="text-zen-orange hover:text-orange-400 transition-colors font-medium"
            >
              hello@zenprivata.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
