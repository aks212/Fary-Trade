import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const explore = [
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Innovation", path: "/innovation" },
    { name: "Sustainability", path: "/sustainability" },
  ];

  const company = [
    { name: "Gallery", path: "/gallery" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-espresso text-accent-foreground relative overflow-hidden">
      <div className="absolute inset-0 noise opacity-40 pointer-events-none" />
      <div className="absolute -top-px left-0 right-0 gold-rule" />

      <div className="container mx-auto px-6 lg:px-10 pt-20 pb-10 relative">
        {/* Top CTA */}
        <div className="grid lg:grid-cols-2 gap-10 pb-16 border-b border-accent-foreground/10">
          <div>
            <p className="eyebrow text-primary/80 mb-4">Begin a Partnership</p>
            <h2 className="font-display text-4xl md:text-6xl text-accent-foreground text-balance leading-[1.05]">
              Let's bring the heat of authentic ginger to your shelves.
            </h2>
          </div>
          <div className="flex lg:items-end lg:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-primary border-b border-primary/40 hover:border-primary pb-1 text-sm uppercase tracking-[0.25em] transition-smooth"
            >
              Start the conversation
              <ArrowUpRight className="w-4 h-4 transition-smooth group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 py-16">
          <div className="col-span-2 md:col-span-5">
            <img
              src={logo}
              alt="Fary's Ginger Company"
              className="h-16 w-auto mb-6 bg-ivory/95 rounded-full p-2"
            />
            <p className="text-sm text-accent-foreground/70 max-w-sm leading-relaxed">
              Premium organic ginger products — sustainably farmed, ethically traded,
              and crafted to inspire healthier living across the world.
            </p>
            <p className="mt-6 font-display italic text-primary/90 text-lg">
              "This is the beginning of something good."
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-5">Explore</h4>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-accent-foreground/80 hover:text-primary transition-snappy"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-accent-foreground/80 hover:text-primary transition-snappy"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-accent-foreground/80">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary/80" />
                hello@farys.ginger
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary/80" />
                West Africa
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-accent-foreground/15 flex items-center justify-center hover:border-primary hover:text-primary transition-snappy"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-accent-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-accent-foreground/55 uppercase tracking-[0.2em]">
          <p>© {currentYear} Fary's Ginger Company</p>
          <p>Pure · Organic · Powerful</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
