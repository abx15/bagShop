import { VariantType, VariantOption } from "@/types";
import { cn } from "@/lib/utils";

interface VariantSelectorProps {
  variants: VariantType[];
  selectedVariants: Record<string, string>;
  onSelect: (variantName: string, optionId: string) => void;
}

const VariantSelector = ({
  variants,
  selectedVariants,
  onSelect,
}: VariantSelectorProps) => {
  return (
    <div className="space-y-6">
      {variants.map((variant) => (
        <div key={variant.name}>
          <h4 className="text-sm font-semibold mb-3 text-foreground">
            {variant.name}:{" "}
            <span className="text-muted-foreground font-normal">
              {
                variant.options.find(
                  (o) => o.id === selectedVariants[variant.name]
                )?.value
              }
            </span>
          </h4>

          <div className="flex flex-wrap gap-3">
            {variant.options.map((option) => {
              const isSelected = selectedVariants[variant.name] === option.id;

              // Color Variant Style
              if (variant.name === "Color") {
                return (
                  <button
                    key={option.id}
                    onClick={() => onSelect(variant.name, option.id)}
                    className={cn(
                      "w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center p-0.5",
                      isSelected
                        ? "border-primary scale-110"
                        : "border-transparent hover:scale-105"
                    )}
                    title={option.value}
                  >
                    <div
                      className="w-full h-full rounded-full border border-black/10 shadow-inner"
                      style={{
                        backgroundColor:
                          option.id === "black"
                            ? "#1a1a1a"
                            : option.id === "white"
                            ? "#ffffff"
                            : option.id === "blue"
                            ? "#1e3a8a"
                            : option.id === "brown"
                            ? "#78350f"
                            : option.id === "tan"
                            ? "#d2b48c"
                            : "#e5e5e5",
                      }}
                    />
                  </button>
                );
              }

              // Default Button Style (Size, Material, etc.)
              return (
                <button
                  key={option.id}
                  onClick={() => onSelect(variant.name, option.id)}
                  className={cn(
                    "px-4 py-2 border rounded-md text-sm font-medium transition-all",
                    isSelected
                      ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                      : "border-border text-muted-foreground hover:border-gray-400 hover:text-foreground"
                  )}
                >
                  {option.value}
                  {option.priceModifier ? (
                    <span className="ml-1 text-xs opacity-70">
                      (+${option.priceModifier})
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VariantSelector;
