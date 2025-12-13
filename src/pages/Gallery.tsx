import GoldDivider from "@/components/GoldDivider";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-ginger.jpg";
import gingerChew from "@/assets/product-ginger-chew.jpg";
import gingerPowder from "@/assets/product-ginger-powder.jpg";
import freshGinger from "@/assets/product-fresh-ginger.jpg";
import gingerOil from "@/assets/product-ginger-oil.jpg";
import farmImage from "@/assets/sustainability-farm.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, title: "Fresh Organic Ginger", category: "Products" },
    { src: gingerChew, title: "Ginger Chew Production", category: "Processing" },
    { src: gingerPowder, title: "Premium Ginger Powder", category: "Products" },
    { src: freshGinger, title: "Harvested Ginger Roots", category: "Farm" },
    { src: gingerOil, title: "Ginger Essential Oil", category: "Products" },
    { src: farmImage, title: "Sustainable Farming", category: "Farm" },
  ];

  const mediaFeatures = [
    {
      title: "International Trade Magazine",
      description: "Featured as a leading African organic exporter",
      date: "2024",
    },
    {
      title: "Sustainable Business Journal",
      description: "Recognized for community empowerment initiatives",
      date: "2024",
    },
    {
      title: "Agriculture Today",
      description: "Spotlight on innovative farming practices",
      date: "2023",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Gallery
          </h1>
          <GoldDivider />
          <p className="text-xl mt-8 max-w-3xl mx-auto animate-fade-in opacity-90">
            A visual journey from farm to table
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-accent">
                Our Journey in Pictures
              </h2>
              <GoldDivider />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <ScrollReveal key={index} animation="scale" delay={index * 100}>
                <div className="group overflow-hidden rounded-lg shadow-elegant hover:shadow-gold transition-smooth brand-border">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 gradient-card">
                    <p className="text-xs text-primary font-semibold mb-1">
                      {image.category}
                    </p>
                    <h3 className="text-lg font-bold text-accent">{image.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                From Farm to Table
              </h2>
              <GoldDivider />
              <p className="text-xl mt-8 opacity-90 mb-8">
                Watch our complete journey—from sustainable farming practices to the final
                premium products that reach global markets
              </p>
              <div className="aspect-video bg-secondary-foreground/10 rounded-lg shadow-elegant flex items-center justify-center">
                <p className="text-lg opacity-70">Video Coming Soon</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Press & Media */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-accent">
                  Press & Media Coverage
                </h2>
                <GoldDivider />
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mediaFeatures.map((feature, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className="p-6 gradient-card rounded-lg shadow-elegant brand-border text-center h-full">
                    <p className="text-sm text-primary font-semibold mb-2">
                      {feature.date}
                    </p>
                    <h3 className="text-xl font-bold mb-3 text-accent">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-accent">
                What People Say
              </h2>
              <GoldDivider />
              <blockquote className="text-2xl italic text-muted-foreground mt-8">
                "Fary's Ginger Company represents the best of African agriculture—
                sustainable, ethical, and exceptionally high quality."
              </blockquote>
              <p className="mt-4 text-sm text-muted-foreground">
                — International Trade Review
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
