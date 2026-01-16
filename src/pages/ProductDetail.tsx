import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useShop } from "@/context/ShopContext";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  Star,
  ShieldCheck,
  Truck,
  RefreshCw,
  ChevronRight,
} from "lucide-react";
import VariantSelector from "@/components/products/VariantSelector";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart } = useShop();
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "reviews">(
    "desc"
  );

  const product = products.find((p) => p.id === id);
  const relatedProducts = product
    ? products
        .filter(
          (p) =>
            p.category.some((c) => product.category.includes(c)) &&
            p.id !== product.id
        )
        .slice(0, 4)
    : [];

  // State for Variants
  const [selectedVariants, setSelectedVariants] = useState<
    Record<string, string>
  >({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Initialize variants
  useEffect(() => {
    if (product?.variants) {
      const defaults: Record<string, string> = {};
      product.variants.forEach((v) => {
        defaults[v.name] = v.options[0].id;
      });
      setSelectedVariants(defaults);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link
          to="/products"
          className="text-primary hover:underline mt-4 inline-block"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  // Calculate Price
  let finalPrice = product.basePrice;
  if (product.variants) {
    Object.entries(selectedVariants).forEach(([variantName, valId]) => {
      const vType = product.variants?.find((v) => v.name === variantName);
      const option = vType?.options.find((o) => o.id === valId);
      if (option?.priceModifier) finalPrice += option.priceModifier;
    });
  }

  const handleVariantSelect = (name: string, id: string) => {
    setSelectedVariants((prev) => ({ ...prev, [name]: id }));

    // Update image if color variant has a specific image
    if (name === "Color") {
      const vType = product.variants?.find((v) => v.name === "Color");
      const option = vType?.options.find((o) => o.id === id);
      if (option?.image) {
        // In a real app we might switch the main gallery.
        // Here we just keep using the main images array but could potentially swap index 0 if we had per-variant images logic fully mapped.
        // For now, let's just toast or do nothing visually except the dot selection,
        // as the mock data `image` on variant option is sometimes same as main product images.
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/products" className="hover:text-foreground">
            Shop
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-muted rounded-xl overflow-hidden relative">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">
                  New Arrival
                </span>
              )}
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-24 aspect-square rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                    currentImageIndex === idx
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-primary mb-1">
                {product.brand}
              </h3>
              <h1 className="font-display text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-foreground">
                  ${finalPrice}
                </span>
                {product.basePrice !== finalPrice && (
                  <span className="text-lg text-muted-foreground line-through decoration-red-500/50">
                    Base: ${product.basePrice}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 mb-6">
                <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground mx-1">•</span>
                <span className="text-muted-foreground underline cursor-pointer">
                  {product.reviews} reviews
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="h-px bg-border my-8" />

            {/* Variants */}
            {product.variants && (
              <VariantSelector
                variants={product.variants}
                selectedVariants={selectedVariants}
                onSelect={handleVariantSelect}
              />
            )}

            {/* Actions */}
            <div className="mt-8 flex gap-4">
              <Button
                size="lg"
                className="flex-1 h-14 text-base rounded-full"
                onClick={() => addToCart(product, selectedVariants)}
              >
                <ShoppingBag className="mr-2" /> Add to Cart - ${finalPrice}
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-14 w-14 rounded-full"
              >
                <Star className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <Truck className="mx-auto text-primary mb-2" />
                <span className="text-xs font-medium">Free Shipping</span>
              </div>
              <div className="text-center">
                <ShieldCheck className="mx-auto text-primary mb-2" />
                <span className="text-xs font-medium">2 Year Warranty</span>
              </div>
              <div className="text-center">
                <RefreshCw className="mx-auto text-primary mb-2" />
                <span className="text-xs font-medium">30 Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-24">
          <div className="flex border-b border-border mb-8">
            {["desc", "specs", "reviews"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t as any)}
                className={`px-8 py-4 text-sm font-medium uppercase tracking-wider border-b-2 transition-colors ${
                  activeTab === t
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "desc"
                  ? "Description"
                  : t === "specs"
                  ? "Specifications"
                  : "Reviews"}
              </button>
            ))}
          </div>

          <div className="min-h-[200px] animate-fade-in">
            {activeTab === "desc" && (
              <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
                <p>{product.description}</p>
                <p>
                  Detailed craftsmanship meets modern functionality. This bag is
                  designed to accompany you on any journey, whether it's the
                  daily commute or an international adventure.
                </p>
              </div>
            )}
            {activeTab === "specs" && (
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                <div>
                  <h4 className="font-bold mb-4">Features</h4>
                  <ul className="space-y-2">
                    {product.features?.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />{" "}
                        {f}
                      </li>
                    )) || <p>No specific features listed.</p>}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Materials & Care</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Premium materials sourced responsibly. Wipe clean with a
                    damp cloth. Do not machine wash.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-5xl font-bold text-foreground">
                    {product.rating}
                  </div>
                  <div>
                    <div className="flex text-yellow-500 mb-1">
                      <Star className="fill-current" />
                      <Star className="fill-current" />
                      <Star className="fill-current" />
                      <Star className="fill-current" />
                      <Star className="fill-current opacity-50" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on {product.reviews} reviews
                    </p>
                  </div>
                  <Button variant="outline" className="ml-auto">
                    Write a Review
                  </Button>
                </div>
                <div className="space-y-6">
                  {[1, 2].map((i) => (
                    <div key={i} className="border-b border-border pb-6">
                      <div className="flex justify-between mb-2">
                        <span className="font-bold">Happy Customer</span>
                        <span className="text-xs text-muted-foreground">
                          2 days ago
                        </span>
                      </div>
                      <div className="flex text-yellow-500 w-20 mb-2">
                        <Star className="fill-current w-3 h-3" />
                        <Star className="fill-current w-3 h-3" />
                        <Star className="fill-current w-3 h-3" />
                        <Star className="fill-current w-3 h-3" />
                        <Star className="fill-current w-3 h-3" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Absolutely love this bag! The quality is outstanding and
                        it fits everything I need.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24 border-t border-border pt-16">
          <h2 className="font-display text-3xl font-bold mb-12">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
