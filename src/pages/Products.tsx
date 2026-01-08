import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import bag1 from "@/assets/bag-1.jpg";
import bag2 from "@/assets/bag-2.jpg";
import bag3 from "@/assets/bag-3.jpg";
import bag4 from "@/assets/bag-4.jpg";
import bag5 from "@/assets/bag-5.jpg";
import bag6 from "@/assets/bag-6.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Tote",
    "Crossbody",
    "Satchel",
    "Clutch",
    "Bucket",
  ];

  const allProducts = [
    {
      id: "1",
      name: "Classic Tote",
      price: 895,
      image: bag1,
      category: "Tote",
    },
    {
      id: "2",
      name: "Noir Crossbody",
      price: 645,
      image: bag2,
      category: "Crossbody",
    },
    {
      id: "3",
      name: "Olive Satchel",
      price: 1250,
      image: bag3,
      category: "Satchel",
    },
    {
      id: "4",
      name: "Bordeaux Kelly",
      price: 2100,
      image: bag4,
      category: "Handbag",
    },
    {
      id: "5",
      name: "Camel Bucket",
      price: 785,
      image: bag5,
      category: "Bucket",
    },
    {
      id: "6",
      name: "Navy Clutch",
      price: 495,
      image: bag6,
      category: "Clutch",
    },
    { id: "7", name: "Cognac Tote", price: 945, image: bag1, category: "Tote" },
    {
      id: "8",
      name: "Ebony Crossbody",
      price: 725,
      image: bag2,
      category: "Crossbody",
    },
    {
      id: "9",
      name: "Forest Satchel",
      price: 1350,
      image: bag3,
      category: "Satchel",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="py-16 bg-gradient-hero">
        <div className="w-full px-4 lg:px-12">
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
              Our Collection
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our exquisite range of handcrafted luxury handbags, each
              piece a masterwork of Italian craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Products */}
      <section className="py-16 bg-background">
        <div className="w-full px-4 lg:px-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-secondary/20 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-16">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft size={18} />
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-full font-body text-sm transition-all duration-300 ${
                  page === 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-secondary/20"
                }`}
              >
                {page}
              </button>
            ))}
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
