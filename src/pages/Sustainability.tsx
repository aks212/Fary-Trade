import GoldDivider from "@/components/GoldDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { Leaf, Users, Globe, Heart } from "lucide-react";
import sustainabilityImage from "@/assets/sustainability-farm.jpg";

const Sustainability = () => {
  const commitments = [
    {
      icon: Leaf,
      title: "Organic Cultivation",
      description: "100% organic farming methods without harmful pesticides or chemicals",
    },
    {
      icon: Users,
      title: "Fary Trade",
      description: "Fair compensation and empowerment for all farming communities",
    },
    {
      icon: Globe,
      title: "Environmental Care",
      description: "Protecting biodiversity and promoting sustainable land use",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Supporting education, healthcare, and infrastructure development",
    },
  ];

  const practices = [
    "Organic farming certification and compliance",
    "Water conservation and efficient irrigation systems",
    "Soil health management and natural composting",
    "Recyclable and eco-friendly packaging materials",
    "Carbon footprint reduction initiatives",
    "Renewable energy adoption in processing facilities",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Sustainability & Impact
          </h1>
          <GoldDivider />
          <p className="text-xl mt-8 max-w-3xl mx-auto animate-fade-in opacity-90">
            Building a sustainable future through responsible farming and community empowerment
          </p>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-center text-accent">
                Our Commitment
              </h2>
              <GoldDivider />
              <p className="text-xl text-center text-muted-foreground mt-8 leading-relaxed">
                We champion sustainable farming and ethical sourcing, ensuring every product
                benefits both the consumer and the community. Our commitment extends beyond
                business—it's about creating lasting positive impact on people and the planet.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <ScrollReveal key={commitment.title} animation="scale" delay={index * 100}>
                  <div className="text-center p-6 gradient-card rounded-lg shadow-elegant h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-accent">
                      {commitment.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{commitment.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Farm Image Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="max-w-6xl mx-auto">
              <div className="aspect-video overflow-hidden rounded-lg shadow-elegant brand-border">
                <img
                  src={sustainabilityImage}
                  alt="Sustainable farming practices"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Supporting Farmers */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-center">
                Supporting Our Farmers
              </h2>
              <GoldDivider />
              <div className="mt-8 space-y-6 text-lg opacity-90">
                <p>
                  At the heart of our sustainability mission are the farmers and communities
                  we work with. We provide comprehensive training programs, fair compensation,
                  and access to resources that enable farmers to thrive.
                </p>
                <p>
                  Our farmer empowerment initiatives include technical training in organic
                  farming methods, access to quality seeds and tools, fair pricing structures,
                  and investment in community infrastructure.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Eco-Friendly Practices */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <h2 className="text-4xl font-bold mb-6 text-center text-accent">
                Eco-Friendly Practices
              </h2>
              <GoldDivider />
            </ScrollReveal>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {practices.map((practice, index) => (
                <ScrollReveal key={practice} animation="fade-left" delay={index * 80}>
                  <div className="flex items-start p-4 gradient-card rounded-lg shadow-elegant">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2 mr-4" />
                    <p className="text-muted-foreground">{practice}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-4xl font-bold mb-6 text-accent">
              Our Global Reach
            </h2>
            <GoldDivider />
            <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
              From African farms to global markets, we're building partnerships that create
              sustainable value chains. Our products reach health-conscious consumers
              worldwide while maintaining our commitment to quality and sustainability.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
