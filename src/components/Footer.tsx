import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-300 pt-20 pb-10 border-t border-zinc-800">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section: Newsletter & Brand */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-4xl font-bold text-white tracking-wide">
                Arun<span className="text-primary">Bag</span>
              </span>
            </Link>
            <p className="text-lg leading-relaxed max-w-md text-zinc-400">
              Crafting timeless companions for the modern voyager. Designed in
              Florence, loved worldwide.
            </p>
          </div>
          <div className="lg:pl-12">
            <h3 className="text-white font-bold text-lg mb-4">
              Join our inner circle
            </h3>
            <div className="flex bg-zinc-800 rounded-full p-1 border border-zinc-700 focus-within:border-primary transition-colors">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent border-none px-6 text-white focus:ring-0 placeholder:text-zinc-500"
              />
              <Button className="rounded-full px-6 bg-white text-black hover:bg-zinc-200">
                Subscribe <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-zinc-500 mt-4 px-2">
              By subscribing you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>

        <div className="h-px bg-zinc-800 w-full mb-16" />

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
              Shop
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/products?category=Travel"
                  className="hover:text-primary transition-colors"
                >
                  Travel Gear
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Office"
                  className="hover:text-primary transition-colors"
                >
                  Office Essentials
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Women"
                  className="hover:text-primary transition-colors"
                >
                  For Women
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Men"
                  className="hover:text-primary transition-colors"
                >
                  For Men
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
              Support
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Order Status
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Care Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
              Social
            </h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-zinc-400"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-800 text-xs text-zinc-500">
          <p>&copy; {currentYear} Arun Bag. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
