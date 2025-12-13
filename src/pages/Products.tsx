import GoldDivider from "@/components/GoldDivider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ShoppingCart } from "lucide-react";
import gingerChew from "@/assets/product-ginger-chew.jpg";
import gingerPowder from "@/assets/product-ginger-powder.jpg";
import gingerFlakes from "@/assets/product-ginger-flakes.jpg";
import freshGinger from "@/assets/product-fresh-ginger.jpg";
import gingerOil from "@/assets/product-ginger-oil.jpg";

const Products = () => {
  const products = [
    {
      name: "Ginger Chew",
      image: gingerChew,
      description: "Chewy candy made from pure ginger root and sugar",
      benefits: "Reduces nausea, boosts immunity, lowers blood sugar, aids digestion",
      use: "Chew as a snack or after meals",
      ingredients: "Pure ginger root, natural sugar",
    },
    {
      name: "Ginger Powder",
      image: gingerPowder,
      description: "Premium ground ginger for culinary excellence",
      benefits: "Anti-inflammatory properties, digestive support, immune system booster",
      use: "Add to beverages, cooking, or baking (1-2 teaspoons daily)",
      ingredients: "100% organic ginger root",
    },
    {
      name: "Fresh Ginger",
      image: freshGinger,
      description: "Organic fresh ginger roots with vibrant flavor",
      benefits: "Maximum potency, natural enzymes, authentic flavor and aroma",
      use: "Grate, slice, or juice for culinary and wellness applications",
      ingredients: "Fresh organic ginger root",
    },
    {
      name: "Ginger Oil",
      image: gingerOil,
      description: "Pure essential oil for wellness and aromatherapy",
      benefits: "Pain relief, aromatherapy benefits, skin health, circulation support",
      use: "Topical application (diluted), diffusion, or massage therapy",
      ingredients: "Pure ginger essential oil extract",
    },
    {
      name: "Ginger Flakes",
      image: gingerFlakes,
      description: "Dehydrated ginger pieces for versatile use",
      benefits: "Long shelf life, concentrated flavor, convenient storage",
      use: "Rehydrate for cooking or use directly in soups and stews",
      ingredients: "Dehydrated organic ginger",
    },
    {
      name: "Dehydrated Ginger",
      image: freshGinger,
      description: "Dried ginger slices preserving natural goodness",
      benefits: "Retained nutrients, extended shelf life, portable wellness",
      use: "Steep in hot water for tea or add to recipes",
      ingredients: "100% dehydrated ginger root",
    },
    {
      name: "Ginger Split",
      image: gingerChew,
      description: "Premium split ginger for processing and culinary use",
      benefits: "Versatile preparation options, ideal for extraction and processing",
      use: "Perfect for commercial food processing and manufacturing",
      ingredients: "Split-dried organic ginger",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Products
          </h1>
          <GoldDivider />
          <p className="text-xl mt-8 max-w-3xl mx-auto animate-fade-in opacity-90">
            Premium organic ginger products crafted with care for your health and wellness
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.name}
                className="overflow-hidden shadow-elegant hover:shadow-gold transition-smooth brand-border"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 gradient-card">
                  <h3 className="text-2xl font-bold mb-3 text-accent">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>

                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Benefits:</h4>
                      <p className="text-muted-foreground">{product.benefits}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">How to Use:</h4>
                      <p className="text-muted-foreground">{product.use}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Ingredients:</h4>
                      <p className="text-muted-foreground">{product.ingredients}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Our Products?
          </h2>
          <GoldDivider />
          <p className="text-xl mt-8 mb-8 max-w-2xl mx-auto opacity-90">
            Contact us to place an order or download our complete product catalogue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant"
            >
              <ShoppingCart className="mr-2" />
              Order Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <Download className="mr-2" />
              Download Catalogue
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
