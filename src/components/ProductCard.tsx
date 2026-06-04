import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const ProductCard = ({ image, title, description, link = "/products" }: ProductCardProps) => {
  return (
    <Link to={link} className="block group">
      <Card className="relative overflow-hidden rounded-none border-0 bg-transparent shadow-none">
        <div className="aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-smooth duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
        </div>
        <div className="pt-6 pb-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl md:text-3xl text-accent leading-tight">
              {title}
            </h3>
            <span className="mt-2 w-9 h-9 rounded-full border border-border flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-snappy shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
