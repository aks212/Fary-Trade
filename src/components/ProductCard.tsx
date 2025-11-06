import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const ProductCard = ({ image, title, description, link = "/products" }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-elegant hover:shadow-gold transition-smooth gold-border">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6 gradient-card">
        <h3 className="text-xl font-playfair font-semibold mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 gradient-card">
        <Link to={link} className="w-full">
          <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-smooth">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
