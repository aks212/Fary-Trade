import GoldDivider from "@/components/GoldDivider";
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Our Journey in Pictures
            </h2>
            <GoldDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg shadow-elegant hover:shadow-gold transition-smooth gold-border"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                </div>
                <div className="p-4 gradient-card">
                  <p className="text-xs text-secondary font-semibold mb-1">
                    {image.category}
                  </p>
                  <h3 className="text-lg font-playfair font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              From Farm to Table
            </h2>
            <GoldDivider />
            <p className="text-xl mt-8 opacity-90 mb-8">
              Watch our complete journey—from sustainable farming practices to the final
              premium products that reach global markets
            </p>
            <div className="aspect-video bg-primary-foreground/10 rounded-lg shadow-elegant flex items-center justify-center">
              <p className="text-lg opacity-70">Video Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Media */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold mb-6">
                Press & Media Coverage
              </h2>
              <GoldDivider />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mediaFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 gradient-card rounded-lg shadow-elegant gold-border text-center"
                >
                  <p className="text-sm text-secondary font-semibold mb-2">
                    {feature.date}
                  </p>
                  <h3 className="text-xl font-playfair font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              What People Say
            </h2>
            <GoldDivider />
            <blockquote className="text-2xl font-playfair italic text-muted-foreground mt-8">
              "Fary's Ginger Company represents the best of African agriculture—
              sustainable, ethical, and exceptionally high quality."
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              — International Trade Review
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
