import GoldDivider from "@/components/GoldDivider";
import { Target, Heart, Lightbulb, Leaf, Users } from "lucide-react";
const About = () => {
  const values = [{
    icon: Target,
    title: "Quality",
    description: "Uncompromising standards in every product"
  }, {
    icon: Heart,
    title: "Integrity",
    description: "Honest and ethical in all our practices"
  }, {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering new products and methods"
  }, {
    icon: Leaf,
    title: "Sustainability",
    description: "Protecting our planet for future generations"
  }, {
    icon: Users,
    title: "Impact",
    description: "Empowering communities and creating opportunities"
  }];
  const divisions = [{
    name: "Fary's Ginger Company",
    description: "Premium organic ginger products for global markets"
  }, {
    name: "Fary's Baobab Company",
    description: "Nutrient-rich baobab superfoods and powders"
  }, {
    name: "Fary's Hibiscus Company",
    description: "Vibrant hibiscus products for health and wellness"
  }, {
    name: "Fary's Chili Company",
    description: "Authentic African chili products with bold flavors"
  }];
  return <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in">
            About Fary's Company
          </h1>
          <GoldDivider />
          <p className="text-xl mt-8 max-w-3xl mx-auto animate-fade-in opacity-90">
            Leading African producer of premium superfood products
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-center">
              Our Story
            </h2>
            <GoldDivider />
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>Fary's Company is a leading African producer of premium superfood products, including ginger, baobab, hibiscus, chili and Egg powder. We are committed to delivering the highest quality organic products while championing sustainable farming practices and empowering local communities.</p>
              <p>
                Our journey began with a simple vision: to share the incredible power of
                African superfoods with the world while creating meaningful impact in the
                communities where we operate. Today, we stand as a testament to what's
                possible when quality, sustainability, and social responsibility come together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Philosophy */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Sustainability Philosophy
            </h2>
            <GoldDivider />
            <p className="text-xl mt-8 opacity-90">
              We believe in responsible farming, Fary Trade practices, and community
              empowerment. Every product we create supports sustainable agriculture and
              contributes to the well-being of farming communities across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Our Divisions
            </h2>
            <GoldDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {divisions.map(division => <div key={division.name} className="p-8 gradient-card rounded-lg shadow-elegant gold-border">
                <h3 className="text-2xl font-playfair font-semibold mb-3 text-secondary">
                  {division.name}
                </h3>
                <p className="text-muted-foreground">{division.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold mb-6">
                Our Vision
              </h2>
              <GoldDivider />
              <p className="text-2xl font-playfair italic text-primary mt-8">
                To lead Africa's organic trade movement and become the global standard
                for premium superfood products
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-playfair font-bold mb-8 text-center">
                Our Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map(value => {
                const Icon = value.icon;
                return <div key={value.title} className="text-center p-6 gradient-card rounded-lg shadow-elegant">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                        <Icon className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="text-xl font-playfair font-semibold mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>;
              })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;