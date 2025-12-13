import GoldDivider from "@/components/GoldDivider";
import { Button } from "@/components/ui/button";
import { Beaker, Lightbulb, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Innovation = () => {
  const innovations = [
    {
      icon: Beaker,
      title: "Product Development",
      description: "Creating ginger-based beverages, extracts, and wellness products",
    },
    {
      icon: Lightbulb,
      title: "Processing Technology",
      description: "Advanced methods to preserve nutrients and enhance quality",
    },
    {
      icon: TrendingUp,
      title: "Market Expansion",
      description: "Exploring new markets and applications for ginger products",
    },
    {
      icon: Users,
      title: "Research Partnerships",
      description: "Collaborating with institutions and global partners",
    },
  ];

  const researchAreas = [
    "Ginger essential oil extraction and applications",
    "Functional beverages with health benefits",
    "Nutraceutical product development",
    "Sustainable processing methodologies",
    "Quality enhancement techniques",
    "New cultivar development for optimal yields",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Innovation & Research
          </h1>
          <GoldDivider />
          <p className="text-xl mt-8 max-w-3xl mx-auto animate-fade-in opacity-90">
            Pioneering the future of ginger-based products through research and innovation
          </p>
        </div>
      </section>

      {/* Innovation Overview */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-center">
              Driving Innovation Forward
            </h2>
            <GoldDivider />
            <p className="text-xl text-center text-muted-foreground mt-8 leading-relaxed">
              Our commitment to innovation drives us to continuously explore new
              possibilities in ginger processing, product development, and sustainable
              farming practices. We invest in research and development to bring the best
              possible products to our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Innovation Focus Areas
            </h2>
            <GoldDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((innovation) => {
              const Icon = innovation.icon;
              return (
                <div
                  key={innovation.title}
                  className="text-center p-6 gradient-card rounded-lg shadow-elegant"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-3">
                    {innovation.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{innovation.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Development */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-playfair font-bold mb-6">
                  New Product Development
                </h2>
                <GoldDivider />
                <div className="mt-8 space-y-4 text-muted-foreground">
                  <p>
                    We're constantly innovating to bring new ginger-based products to
                    market. Our research and development team works on creating functional
                    beverages, enhanced extracts, and essential oils that meet the evolving
                    needs of health-conscious consumers.
                  </p>
                  <p>
                    Our innovation pipeline includes ready-to-drink ginger beverages,
                    concentrated wellness shots, aromatherapy products, and pharmaceutical-
                    grade extracts—all while maintaining our commitment to organic,
                    sustainable production.
                  </p>
                </div>
              </div>
              <div className="gradient-card p-8 rounded-lg shadow-elegant gold-border">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-center">
                  Active Research Areas
                </h3>
                <div className="space-y-3">
                  {researchAreas.map((area) => (
                    <div key={area} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                      <p className="text-muted-foreground">{area}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Research Partnerships
            </h2>
            <GoldDivider />
            <p className="text-xl mt-8 opacity-90 leading-relaxed">
              We collaborate with leading research institutions, universities, and global
              partners to advance our understanding of ginger cultivation, processing, and
              application. These partnerships enable us to stay at the forefront of
              innovation in the superfood industry.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Partner With Us
          </h2>
          <GoldDivider />
          <p className="text-xl text-muted-foreground mt-8 mb-8 max-w-2xl mx-auto">
            Are you interested in collaborating on research, product development, or
            distribution? We're always looking for partners who share our vision.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
