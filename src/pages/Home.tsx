import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Users, TrendingUp, Award, ArrowUpRight, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import GoldDivider from "@/components/GoldDivider";
import ScrollReveal from "@/components/ScrollReveal";
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
    { icon: Leaf, title: "Organic & Natural", description: "100% pure organic ingredients, with no artificial additives." },
    { icon: Users, title: "Sustainable Sourcing", description: "Responsible farming practices that uplift local communities." },
    { icon: TrendingUp, title: "Ethical Trade", description: "Fair compensation and long-term partnerships with our farmers." },
    { icon: Award, title: "Innovative Range", description: "Cutting-edge formats that meet world-class quality standards." },
  ];

  const heroSlides = [
    { image: gingerChew, eyebrow: "Signature Range", title: "Ginger Chew", description: "Chewy candy crafted from pure ginger root." },
    { image: gingerPowder, eyebrow: "Culinary Essentials", title: "Ginger Powder", description: "Premium ground ginger for kitchens worldwide." },
    { image: gingerFlakes, eyebrow: "Naturally Dehydrated", title: "Ginger Flakes", description: "Slow-dried flakes for tea, brews and recipes." },
    { image: allProducts, eyebrow: "Our Collection", title: "Complete Range", description: "A curated portfolio of organic ginger products." },
  ];

  const products = [
    { image: gingerChew, title: "Ginger Chew", description: "Chewy candy made from pure ginger root and sugar." },
    { image: gingerPowder, title: "Ginger Powder", description: "Premium ground ginger for culinary excellence." },
    { image: freshGinger, title: "Fresh Ginger", description: "Organic fresh ginger roots with vibrant flavor." },
    { image: gingerOil, title: "Ginger Oil", description: "Pure essential oil for wellness and aromatherapy." },
  ];

  const stats = [
    { value: "100%", label: "Organic Certified" },
    { value: "12+", label: "Global Markets" },
    { value: "500+", label: "Partner Farmers" },
    { value: "8", label: "Signature Products" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative -mt-[88px] h-screen min-h-[720px] overflow-hidden bg-espresso">
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[Autoplay({ delay: 6000, stopOnInteraction: false })]}
          className="h-full"
        >
          <CarouselContent className="h-screen min-h-[720px] -ml-0">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-screen min-h-[720px] pl-0 basis-full">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover animate-slow-zoom"
                    />
                  </div>
                  <div className="absolute inset-0 gradient-hero" />
                  <div className="absolute inset-0 gradient-hero-radial" />

                  <div className="relative z-10 h-full container mx-auto px-6 lg:px-10 flex flex-col justify-end pb-24 md:pb-32">
                    <div className="max-w-3xl animate-fade-up">
                      <p className="eyebrow text-primary-foreground/80 mb-6 flex items-center gap-3">
                        <span className="w-10 h-px bg-primary" />
                        {slide.eyebrow}
                      </p>
                      <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] text-primary-foreground leading-[0.95] text-balance">
                        {slide.title}
                      </h1>
                      <p className="mt-8 max-w-xl text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
                        {slide.description}
                      </p>
                      <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Link to="/products">
                          <Button
                            size="lg"
                            className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-xs uppercase tracking-[0.25em] shadow-gold"
                          >
                            Explore Products
                            <ArrowRight className="ml-3 w-4 h-4" />
                          </Button>
                        </Link>
                        <Link to="/about">
                          <Button
                            size="lg"
                            variant="outline"
                            className="rounded-none bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 py-6 text-xs uppercase tracking-[0.25em]"
                          >
                            Our Story
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Slide indicator */}
                  <div className="absolute right-6 lg:right-10 bottom-24 md:bottom-32 z-10 hidden md:flex items-center gap-3 text-primary-foreground/70">
                    <span className="font-display text-4xl text-primary-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="w-16 h-px bg-primary-foreground/30" />
                    <span className="text-xs tracking-[0.25em] uppercase">
                      {String(heroSlides.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-6 lg:left-10 w-12 h-12 rounded-none bg-primary-foreground/5 hover:bg-primary-foreground/15 border-primary-foreground/30 text-primary-foreground" />
          <CarouselNext className="right-6 lg:right-10 w-12 h-12 rounded-none bg-primary-foreground/5 hover:bg-primary-foreground/15 border-primary-foreground/30 text-primary-foreground" />
        </Carousel>

        {/* Marquee at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-primary-foreground/10 bg-espresso/70 backdrop-blur-sm py-4 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...Array(2)].flatMap((_, j) =>
              ["Organic Certified", "HACCP", "FDA Approved", "Halal", "Sustainably Sourced", "Fair Trade", "Premium Quality"].map(
                (label, i) => (
                  <span
                    key={`${j}-${i}`}
                    className="flex items-center gap-12 text-primary-foreground/60 text-[0.7rem] tracking-[0.3em] uppercase"
                  >
                    {label}
                    <span className="w-1 h-1 rotate-45 bg-primary" />
                  </span>
                )
              )
            )}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-accent text-accent-foreground">
        <div className="container mx-auto px-6 lg:px-10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} animation="fade-up" delay={i * 80}>
                <div className="flex flex-col items-start md:items-center text-left md:text-center md:border-l md:first:border-l-0 border-accent-foreground/10 md:px-6">
                  <span className="font-display text-5xl md:text-6xl text-primary">{s.value}</span>
                  <span className="mt-2 text-xs uppercase tracking-[0.25em] text-accent-foreground/70">
                    {s.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY — editorial split */}
      <section className="py-28 md:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <ScrollReveal animation="fade-right" className="lg:col-span-5 lg:sticky lg:top-32">
              <p className="eyebrow mb-6">Our Story</p>
              <h2 className="font-display text-5xl md:text-6xl text-accent leading-[1.02] text-balance">
                Rooted in the earth.<br />
                <span className="italic text-primary">Refined</span> for the world.
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" className="lg:col-span-7 lg:pt-4">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty">
                Fary's Ginger Company crafts high-quality, organic ginger-based products while
                championing sustainable farming and the communities that grow with us.
              </p>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed text-pretty">
                Every harvest is traced to its farmer. Every product is a quiet promise — that
                what's natural, when handled with care, becomes extraordinary.
              </p>
              <Link
                to="/about"
                className="mt-10 group inline-flex items-center gap-3 text-accent border-b border-accent/30 hover:border-primary hover:text-primary pb-1 text-xs uppercase tracking-[0.25em] transition-smooth"
              >
                Discover our journey
                <ArrowUpRight className="w-4 h-4 transition-smooth group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-28 md:py-36 bg-cream relative">
        <div className="container mx-auto px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <div>
                <p className="eyebrow mb-5">The Collection</p>
                <h2 className="font-display text-5xl md:text-6xl text-accent leading-[1.02] text-balance max-w-2xl">
                  A curated portfolio of pure ginger expressions.
                </h2>
              </div>
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 text-accent hover:text-primary text-xs uppercase tracking-[0.25em] transition-snappy shrink-0"
              >
                View all products
                <ArrowUpRight className="w-4 h-4 transition-smooth group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {products.map((product, index) => (
              <ScrollReveal key={product.title} animation="fade-up" delay={index * 120}>
                <ProductCard {...product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — bento */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="eyebrow mb-5">The Difference</p>
              <h2 className="font-display text-5xl md:text-6xl text-accent leading-[1.02] text-balance">
                A standard set by <span className="italic text-primary">nature</span>,<br />
                upheld by intention.
              </h2>
              <GoldDivider />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.title} animation="fade-up" delay={index * 100}>
                  <div className="h-full bg-background p-10 group hover:bg-cream transition-smooth">
                    <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-smooth">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-accent uppercase tracking-wider">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <span className="block mt-8 text-xs font-display text-primary/60">
                      0{index + 1}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION — dark cinematic */}
      <section className="relative py-32 md:py-44 bg-espresso text-accent-foreground overflow-hidden">
        <div className="absolute inset-0 noise opacity-30 pointer-events-none" />
        <div className="absolute inset-0 gradient-hero-radial pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-10 relative">
          <ScrollReveal animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <p className="eyebrow text-primary mb-8">Our Mission</p>
              <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-balance text-accent-foreground">
                "To harness the natural power of ginger to create products that{" "}
                <span className="italic text-primary">energize, nourish, and inspire</span>{" "}
                healthier living — crafted with honesty and care."
              </blockquote>
              <div className="mt-12 flex items-center justify-center gap-4">
                <span className="w-12 h-px bg-primary/60" />
                <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/70">
                  Fary's Ginger Company
                </span>
                <span className="w-12 h-px bg-primary/60" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div>
                <p className="eyebrow mb-5">Partner With Us</p>
                <h2 className="font-display text-5xl md:text-6xl text-accent leading-[1.02] text-balance">
                  Join a movement toward a healthier, sustainable future.
                </h2>
              </div>
              <div className="lg:pl-10 lg:border-l border-border">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Distributors, retailers and wellness brands — collaborate with us to bring
                  premium, organic superfood products to your market.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-xs uppercase tracking-[0.25em] shadow-elegant"
                    >
                      Contact Us
                      <ArrowRight className="ml-3 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-none border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-xs uppercase tracking-[0.25em]"
                    >
                      Browse Catalogue
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
