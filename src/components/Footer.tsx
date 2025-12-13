import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Innovation", path: "/innovation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <img 
              src={logo} 
              alt="Fary's Ginger Company" 
              className="h-20 w-auto mb-4 bg-background/90 rounded-full p-2"
            />
            <p className="text-sm opacity-90 mb-4">
              Premium organic ginger-based products for a healthier world.
            </p>
            <p className="text-xs italic text-primary">
              "This is the beginning of something good."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-smooth"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-smooth"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 pt-6 text-center text-sm opacity-90">
          <p>© {currentYear} Fary's Ginger Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
