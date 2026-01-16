import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useShop } from "@/context/ShopContext";
import { CATEGORIES } from "@/data/categories";

import { useAuth } from "@/context/AuthContext";
import { User as UserIcon, LogOut } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartCount } = useShop();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop All", path: "/products" },
    ...CATEGORIES.slice(0, 3).map((c) => ({
      name: c.name,
      path: `/products?category=${c.id}`,
    })),
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path.split("?")[0]))
      return true; // Simple check
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-tr-xl rounded-bl-xl flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:rotate-12 transition-transform">
              A
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">
              Arun<span className="text-primary">Bag</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body text-sm font-medium px-4 py-2 rounded-full transition-all ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search (Mock) */}
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Search size={22} />
            </button>

            {/* Auth Button */}
            <div className="hidden md:block">
              {user ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium hidden xl:block">
                    Hi, {user.name.split(" ")[0]}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={logout}
                    title="Logout"
                  >
                    <LogOut size={20} />
                  </Button>
                </div>
              ) : (
                <Link to="/login">
                  <Button variant="ghost" size="icon" title="Login">
                    <UserIcon size={22} />
                  </Button>
                </Link>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart">
              <Button
                variant="ghost"
                className="relative p-2 hover:bg-transparent"
              >
                <ShoppingBag size={24} className="text-foreground" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-0 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-background">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in shadow-xl">
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 hover:bg-muted rounded-md text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-2 mt-4 pt-4 border-t">
                {user ? (
                  <Button
                    className="w-full"
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Link
                    to="/login"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button className="w-full">Sign In</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
