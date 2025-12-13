import { Award, CheckCircle, Shield, Globe } from "lucide-react";
import GoldDivider from "@/components/GoldDivider";
import ScrollReveal from "@/components/ScrollReveal";

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "Organic Certification",
      issuer: "USDA Organic",
      description: "Certified 100% organic by USDA standards, ensuring no synthetic pesticides or GMOs.",
      year: "2020",
      status: "In Process",
    },
    {
      icon: Shield,
      title: "Fary Trade Certified",
      issuer: "Fary Trade International",
      description: "Committed to fair wages, safe working conditions, and sustainable farming practices.",
      year: "2021",
      status: "In Process",
    },
    {
      icon: Globe,
      title: "ISO 22000",
      issuer: "International Organization for Standardization",
      description: "Food safety management system certification for quality control.",
      year: "2022",
      status: "In Process",
    },
    {
      icon: CheckCircle,
      title: "GMP Certified",
      issuer: "Good Manufacturing Practice",
      description: "Adhering to strict manufacturing and quality assurance standards.",
      year: "2023",
      status: "In Process",
    },
    {
      icon: Award,
      title: "HACCP Certified",
      issuer: "Hazard Analysis Critical Control Point",
      description: "Food safety management system preventing biological, chemical, and physical hazards.",
      year: "2023",
      status: "Certified",
    },
    {
      icon: Shield,
      title: "Rainforest Alliance",
      issuer: "Rainforest Alliance Certified",
      description: "Promoting biodiversity conservation and sustainable livelihoods.",
      year: "2024",
      status: "In Process",
    },
    {
      icon: CheckCircle,
      title: "FDA Certified",
      issuer: "Food and Drug Administration",
      description: "Compliance with FDA regulations for food safety and quality standards.",
      year: "2024",
      status: "Certified",
    },
    {
      icon: Award,
      title: "Halal Certified",
      issuer: "Islamic Food and Nutrition Council of America",
      description: "Products meet Islamic dietary laws and halal food standards.",
      year: "2024",
      status: "Certified",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Certifications
          </h1>
          <GoldDivider />
          <p className="text-xl mt-8 max-w-3xl mx-auto opacity-90">
            Recognized globally for our commitment to quality, sustainability, and ethical practices
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <ScrollReveal key={cert.title} animation="fade-up" delay={index * 80}>
                  <div className="gradient-card rounded-lg p-8 shadow-elegant h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-2xl font-bold text-accent">
                            {cert.title}
                          </h3>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {cert.year}
                            </span>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                              cert.status === "Certified" 
                                ? "bg-secondary/20 text-secondary" 
                                : "bg-primary/10 text-primary"
                            }`}>
                              {cert.status}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-primary font-medium mb-3">{cert.issuer}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-6 text-accent">
                Why Certifications Matter
              </h2>
              <GoldDivider />
              <div className="mt-12 space-y-6 text-lg text-muted-foreground">
                <p>
                  Our certifications represent more than just compliance—they're a testament to our
                  unwavering commitment to excellence, sustainability, and ethical business practices.
                </p>
                <p>
                  Each certification is earned through rigorous audits and continuous improvement,
                  ensuring that every product meets the highest international standards for quality,
                  safety, and environmental responsibility.
                </p>
                <p>
                  When you choose Fary's Ginger Company, you're choosing products backed by globally
                  recognized standards that protect both people and the planet.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-4xl font-bold mb-6 text-accent">
              Partner With a Certified Leader
            </h2>
            <GoldDivider />
            <p className="text-lg text-muted-foreground mt-8 mb-8 max-w-2xl mx-auto">
              Join us in delivering certified excellence to customers worldwide
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
