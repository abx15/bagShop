import { Category, BagType } from "@/types";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FilterSidebarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (c: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const FilterSidebar = ({
  categories,
  selectedCategory,
  onSelectCategory,
  priceRange,
  setPriceRange,
}: FilterSidebarProps) => {
  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-display font-semibold mb-4 text-lg">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => onSelectCategory("All")}
            className={`block w-full text-left font-body text-sm transition-colors ${
              selectedCategory === "All"
                ? "text-primary font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`block w-full text-left font-body text-sm transition-colors ${
                selectedCategory === cat
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              For {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Price Range */}
      <div>
        <h3 className="font-display font-semibold mb-6 text-lg">Price Range</h3>
        <Slider
          defaultValue={[0, 1000]}
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={(val) => setPriceRange(val as [number, number])}
          className="my-6"
        />
        <div className="flex items-center justify-between text-sm font-medium">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Bag Type (Mock) */}
      <div>
        <h3 className="font-display font-semibold mb-4 text-lg">Bag Type</h3>
        <div className="space-y-3">
          {["Backpack", "Handbag", "Trolley", "Duffel", "Briefcase"].map(
            (type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={type} />
                <label
                  htmlFor={type}
                  className="text-sm font-body leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {type}
                </label>
              </div>
            )
          )}
        </div>
      </div>

      {/* Material (Mock) */}
      <div>
        <h3 className="font-display font-semibold mb-4 text-lg mt-8">
          Material
        </h3>
        <div className="space-y-3">
          {["Leather", "Canvas", "Nylon", "Polyester"].map((mat) => (
            <div key={mat} className="flex items-center space-x-2">
              <Checkbox id={mat} />
              <label
                htmlFor={mat}
                className="text-sm font-body leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {mat}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button variant="outline" className="w-full mt-4">
        Reset Filters
      </Button>
    </div>
  );
};

export default FilterSidebar;
