import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
      <div className="w-full px-4 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-display text-xl lg:text-2xl font-bold text-primary tracking-wide uppercase">
              Arun Bag
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <div key={link.path} className="flex items-center">
                <Link
                  to={link.path}
                  className={`font-body text-sm tracking-wide transition-colors duration-300 px-3 py-2 ${
                    isActive(link.path)
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="text-muted-foreground/50">/</span>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Sign In & Camera */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-secondary font-body text-sm font-semibold transition-all px-0"
            >
              Sign In
            </Button>
            <button className="relative p-2 rounded-full bg-primary text-primary-foreground hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg">
              <Camera size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-base py-3 px-2 transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary font-body"
                >
                  Sign In
                </Button>
                <button className="p-2 rounded-full bg-primary text-primary-foreground">
                  <Camera size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
