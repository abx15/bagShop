import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { useShop } from "@/context/ShopContext";
import { toast } from "sonner";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useShop();
  const [isHovered, setIsHovered] = useState(false);

  // Default to first variants if available
  const defaultVariants: Record<string, string> = {};
  product.variants?.forEach((v) => {
    if (v.options.length > 0) {
      defaultVariants[v.name] = v.options[0].id;
    }
  });

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultVariants);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block relative bg-card rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
              Best Seller
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background text-muted-foreground hover:text-red-500 transition-colors shadow-sm">
          <Heart size={18} />
        </button>

        {/* Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Quick Add Overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent flex justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            onClick={handleAddToCart}
            className="w-full bg-white text-black hover:bg-white/90 font-semibold"
          >
            <ShoppingCart size={18} className="mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {product.brand}
            </p>
            <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="font-bold text-lg text-primary">${product.basePrice}</p>
        </div>

        {/* Variants Preview (Color Dots) */}
        {product.variants?.find((v) => v.name === "Color") && (
          <div className="flex gap-1.5 pt-1">
            {product.variants
              .find((v) => v.name === "Color")
              ?.options.slice(0, 4)
              .map((color) => (
                <div
                  key={color.id}
                  className="w-3 h-3 rounded-full border border-border"
                  style={{
                    backgroundColor:
                      color.id === "black"
                        ? "#000"
                        : color.id === "white"
                        ? "#fff"
                        : color.id === "blue"
                        ? "#1e3a8a"
                        : color.id === "brown"
                        ? "#78350f"
                        : "#d4d4d8",
                  }}
                  title={color.value}
                />
              ))}
            {(product.variants.find((v) => v.name === "Color")?.options
              .length ?? 0) > 4 && (
              <span className="text-[10px] text-muted-foreground">+more</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
