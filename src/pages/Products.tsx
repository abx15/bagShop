import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useShop } from "@/context/ShopContext";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/products/FilterSidebar";
import { CATEGORIES } from "@/data/categories";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products } = useShop();

  // Filters State
  const initialCategory = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Sync URL with State
  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "All");
  }, [searchParams]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === "All") setSearchParams({});
    else setSearchParams({ category: cat });
    setCurrentPage(1);
  };

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category Filter
      if (selectedCategory !== "All") {
        if (!product.category.includes(selectedCategory as any)) {
          return false;
        }
      }

      // Price Filter
      if (
        product.basePrice < priceRange[0] ||
        product.basePrice > priceRange[1]
      ) {
        return false;
      }

      return true;
    });
  }, [products, selectedCategory, priceRange]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h1 className="font-display text-4xl font-bold mb-2">
              Shop All Bags
            </h1>
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} results
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="bg-background border border-border rounded-md px-3 py-1 text-sm outline-none focus:ring-2 focus:ring-primary">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <FilterSidebar
                categories={CATEGORIES.map((c) => c.id)}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategoryChange}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>
          </aside>

          {/* Main Content */}
          <div>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed rounded-xl">
                <p className="text-lg text-muted-foreground">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setPriceRange([0, 1000]);
                  }}
                  className="text-primary mt-2 hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12 gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-muted"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${
                      currentPage === i + 1
                        ? "bg-primary text-primary-foreground font-bold"
                        : "hover:bg-muted"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-muted"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
