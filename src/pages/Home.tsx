import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Users, TrendingUp, Award } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import GoldDivider from "@/components/GoldDivider";
import heroImage from "@/assets/hero-ginger.jpg";
import gingerChew from "@/assets/product-ginger-chew.jpg";
import gingerPowder from "@/assets/product-ginger-powder.jpg";
import freshGinger from "@/assets/product-fresh-ginger.jpg";
import gingerOil from "@/assets/product-ginger-oil.jpg";

const Home = () => {
  const features = [
    {
      icon: Leaf,
      title: "Organic & Natural",
      description: "100% pure organic ingredients with no artificial additives",
    },
    {
      icon: Users,
      title: "Sustainable Sourcing",
      description: "Responsible farming practices supporting local communities",
    },
    {
      icon: TrendingUp,
      title: "Ethical Trade",
      description: "Fair compensation and empowerment for all farmers",
    },
    {
      icon: Award,
      title: "Innovative Range",
      description: "Cutting-edge products meeting global quality standards",
    },
  ];

  const products = [
    {
      image: gingerChew,
      title: "Ginger Chew",
      description: "Chewy candy made from pure ginger root and sugar",
    },
    {
      image: gingerPowder,
      title: "Ginger Powder",
      description: "Premium ground ginger for culinary excellence",
    },
    {
      image: freshGinger,
      title: "Fresh Ginger",
      description: "Organic fresh ginger roots with vibrant flavor",
    },
    {
      image: gingerOil,
      title: "Ginger Oil",
      description: "Pure essential oil for wellness and aromatherapy",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary-foreground mb-6">
            Pure. Organic. Powerful.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            High-quality, organic ginger-based products for a healthier world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-gold px-8">
                Explore Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-foreground">
              Our Story
            </h2>
            <GoldDivider />
            <p className="text-lg text-muted-foreground mt-8 mb-6">
              Fary's Ginger Company provides high-quality, organic ginger-based products
              while promoting sustainable farming and supporting local communities.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-foreground">
              Featured Products
            </h2>
            <GoldDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-foreground">
              Why Choose Us
            </h2>
            <GoldDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="text-center p-6 gradient-card rounded-lg shadow-elegant animate-scale-in"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Banner */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-3xl md:text-4xl font-playfair italic mb-6 animate-fade-in">
            "To become the leading global provider of ginger-based products—driven by
            sustainability, innovation, and quality."
          </blockquote>
          <p className="text-xl opacity-90">Our Vision</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl font-playfair font-bold mb-6 text-foreground">
            Join Our Journey Towards a Healthier, Sustainable Future
          </h2>
          <GoldDivider />
          <p className="text-lg text-muted-foreground mt-8 mb-8 max-w-2xl mx-auto">
            Partner with us to bring premium, organic superfood products to the world
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant px-8">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
