import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link
      to={`/products/${id}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-lg bg-muted aspect-[3/4] mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-body text-muted-foreground uppercase tracking-wider">
          {category}
        </span>
      </div>
      <div className="space-y-2">
        <h3 className="font-display text-lg font-medium text-foreground group-hover:text-secondary transition-colors duration-300">
          {name}
        </h3>
        <p className="font-body text-base font-semibold text-primary">
          ${price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
