import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Innovation", path: "/innovation" },
    { name: "Gallery", path: "/gallery" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-elegant"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Fary's Ginger Company"
              className="h-12 md:h-14 w-auto transition-smooth group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-lg text-accent">Fary's Ginger</span>
              <span className="text-[0.6rem] tracking-[0.25em] uppercase text-muted-foreground">
                Est. Pure · Organic
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[0.78rem] uppercase tracking-[0.18em] font-medium transition-snappy ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/75 hover:text-primary"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-primary" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none px-6 py-5 text-xs uppercase tracking-[0.2em]">
                Partner With Us
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-accent hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 animate-fade-in border-t border-border/60 pt-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm uppercase tracking-[0.2em] font-medium ${
                    isActive(link.path) ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full mt-2 bg-accent text-accent-foreground rounded-none uppercase tracking-[0.2em] text-xs">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
