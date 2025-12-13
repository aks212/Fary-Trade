import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Users, TrendingUp, Award } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import GoldDivider from "@/components/GoldDivider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import gingerChew from "@/assets/product-ginger-chew.jpg";
import gingerPowder from "@/assets/product-ginger-powder.jpg";
import gingerFlakes from "@/assets/product-ginger-flakes.jpg";
import allProducts from "@/assets/all-products.jpg";
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

  const heroSlides = [
    {
      image: gingerChew,
      title: "Ginger Chew",
      subtitle: "Pure. Organic. Powerful.",
      description: "Chewy candy made from pure ginger root and sugar",
    },
    {
      image: gingerPowder,
      title: "Ginger Powder",
      subtitle: "Premium Quality",
      description: "Premium ground ginger for culinary excellence",
    },
    {
      image: gingerFlakes,
      title: "Ginger Flakes",
      subtitle: "Naturally Dehydrated",
      description: "Dehydrated ginger pieces for versatile use",
    },
    {
      image: allProducts,
      title: "Complete Range",
      subtitle: "Discover All Products",
      description: "Explore our full collection of organic ginger products",
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
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="h-full"
        >
          <CarouselContent className="h-screen">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-screen">
                <div className="relative h-full flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 gradient-hero" />
                  </div>
                  <div className="relative z-10 text-center px-4 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
                      {slide.subtitle}
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-semibold text-primary-foreground/90 mb-6 drop-shadow-md">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                      {slide.description}
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" />
          <CarouselNext className="right-4 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" />
        </Carousel>
      </section>

      {/* About Preview */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-accent">
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
            <h2 className="text-4xl font-bold mb-6 text-accent">
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
            <h2 className="text-4xl font-bold mb-6 text-accent">
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
                  <h3 className="text-xl font-bold mb-3 text-accent">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
          <blockquote className="text-xl md:text-2xl italic mb-6 animate-fade-in max-w-4xl mx-auto">
            "To harness the natural power of ginger to create products that energize, nourish, 
            and inspire healthier living. We are committed to delivering authentic, nature-driven 
            experiences made from real ingredients, crafted with honesty and care."
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-accent">
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
