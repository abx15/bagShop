import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useShop } from "@/context/ShopContext";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES } from "@/data/categories";

const Index = () => {
  const { products } = useShop();

  const featuredProducts = products.filter((p) => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 8);

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-muted/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-100" />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
        <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-12 z-10">
          <div className="max-w-2xl space-y-6 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm tracking-wide">
              New Collection 2026
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
              Carry Your World <br />
              <span className="text-primary-foreground">In Style.</span>
            </h1>
            <p className="text-lg text-white/80 max-w-lg leading-relaxed">
              Discover our premium range of handcrafted bags for travel, work,
              and every adventure in between. Designed for durability, styled
              for you.
            </p>
            <div className="flex gap-4 pt-4">
              <Link to="/products">
                <Button size="lg" className="rounded-full px-8 text-base h-12">
                  Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/products?category=Travel">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 text-base h-12 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm"
                >
                  View Collections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: ShoppingBag,
              title: "Premium Quality",
              desc: "Certified authentic materials",
            },
            {
              icon: Truck,
              title: "Free Shipping",
              desc: "On all orders over $150",
            },
            {
              icon: ShieldCheck,
              title: "Warranty Protection",
              desc: "2-year comprehensive warranty",
            },
            {
              icon: RefreshCw,
              title: "Easy Returns",
              desc: "30-day risk-free returns",
            },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="p-3 bg-primary-foreground/10 rounded-full">
                <feature.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm">{feature.title}</h4>
                <p className="text-primary-foreground/70 text-xs">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2">
                Browse by Category
              </h2>
              <p className="text-muted-foreground">
                Find the perfect bag for every occasion.
              </p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center text-primary font-medium hover:underline"
            >
              View All Categories <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="group relative overflow-hidden rounded-xl aspect-[3/4]"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{cat.name}</h3>
                  <p className="text-white/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    Explore Collection
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Top Rated
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              Best Sellers of the Season
            </h2>
            <p className="text-muted-foreground">
              Our most loved designs, tested and approved by thousands of happy
              customers worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 text-white">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Ready for your next <br />{" "}
              <span className="text-primary">Adventure?</span>
            </h2>
            <p className="text-lg text-white/70">
              Equip yourself with our specialized travel gear. Waterproof,
              durable, and designed for the modern explorer.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-white text-black hover:bg-white/90"
            >
              Explore Travel Gear
            </Button>
          </div>
          {/* Visual Element could go here */}
        </div>
      </section>

      {/* New Arrivals Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <h2 className="font-display text-3xl font-bold mb-12">
            New Arrivals
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/products">
              <Button variant="outline" size="lg" className="px-12">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
