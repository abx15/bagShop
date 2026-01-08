import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Minus,
  Plus,
  Heart,
  ShoppingBag,
  ArrowLeft,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import bag1 from "@/assets/bag-1.jpg";
import bag2 from "@/assets/bag-2.jpg";
import bag3 from "@/assets/bag-3.jpg";
import bag4 from "@/assets/bag-4.jpg";
import bag5 from "@/assets/bag-5.jpg";
import bag6 from "@/assets/bag-6.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const products: Record<
    string,
    {
      name: string;
      price: number;
      images: string[];
      category: string;
      description: string;
      material: string;
      dimensions: string;
      finishing: string;
    }
  > = {
    "1": {
      name: "Classic Tote",
      price: 895,
      images: [bag1, bag2, bag3],
      category: "Tote",
      description:
        "A timeless tote bag crafted from the finest Italian calfskin leather. Perfect for the modern professional who values both style and functionality.",
      material: "Premium Italian Calfskin Leather",
      dimensions: "35cm x 28cm x 14cm",
      finishing: "Gold-plated hardware, suede interior lining",
    },
    "2": {
      name: "Noir Crossbody",
      price: 645,
      images: [bag2, bag1, bag4],
      category: "Crossbody",
      description:
        "An elegant crossbody bag with a sophisticated chain strap. Ideal for evening occasions or daily elegance.",
      material: "Smooth Italian Nappa Leather",
      dimensions: "22cm x 15cm x 8cm",
      finishing: "Gold chain strap, signature clasp",
    },
    "3": {
      name: "Olive Satchel",
      price: 1250,
      images: [bag3, bag5, bag1],
      category: "Satchel",
      description:
        "A structured satchel in rich olive green, featuring our signature hardware and spacious interior.",
      material: "Full-grain Italian Leather",
      dimensions: "32cm x 25cm x 12cm",
      finishing: "Brass hardware, cotton twill lining",
    },
    "4": {
      name: "Bordeaux Kelly",
      price: 2100,
      images: [bag4, bag2, bag6],
      category: "Handbag",
      description:
        "Our flagship heritage piece, the Bordeaux Kelly combines classic silhouette with modern craftsmanship.",
      material: "Box Calf Italian Leather",
      dimensions: "28cm x 22cm x 10cm",
      finishing: "Palladium hardware, lambskin lining",
    },
    "5": {
      name: "Camel Bucket",
      price: 785,
      images: [bag5, bag1, bag3],
      category: "Bucket",
      description:
        "A relaxed bucket bag in warm camel, perfect for effortless everyday style.",
      material: "Soft Italian Calfskin",
      dimensions: "26cm x 30cm x 18cm",
      finishing: "Gold drawstring tips, suede interior",
    },
    "6": {
      name: "Navy Clutch",
      price: 495,
      images: [bag6, bag4, bag2],
      category: "Clutch",
      description:
        "A sophisticated evening clutch in deep navy, designed to complement your most elegant occasions.",
      material: "Italian Nappa Leather",
      dimensions: "28cm x 16cm x 4cm",
      finishing: "Gold zip, satin lining",
    },
  };

  const product = products[id || "1"] || products["1"];

  const features = [
    "Handcrafted in Italy",
    "Lifetime warranty",
    "Free shipping worldwide",
    "Complimentary gift wrapping",
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="w-full px-4 lg:px-12 py-12">
        {/* Breadcrumb */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-2 ring-secondary ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-body text-xs uppercase tracking-wider mb-4">
                {product.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="font-display text-3xl font-semibold text-secondary">
                ${product.price.toLocaleString()}
              </p>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 py-6 border-y border-border">
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">
                  Material
                </span>
                <span className="font-body text-sm text-foreground">
                  {product.material}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">
                  Dimensions
                </span>
                <span className="font-body text-sm text-foreground">
                  {product.dimensions}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">
                  Finishing
                </span>
                <span className="font-body text-sm text-foreground">
                  {product.finishing}
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-6">
              <span className="font-body text-sm text-foreground">
                Quantity
              </span>
              <div className="flex items-center gap-4 border border-border rounded-lg p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-body font-medium text-foreground">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button variant="hero" size="xl" className="flex-1">
                <ShoppingBag size={20} />
                Add to Cart
              </Button>
              <Button variant="outline" size="xl" className="px-6">
                <Heart size={20} />
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={16} className="text-olive" />
                  <span className="font-body text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
