import { createContext, useContext, useState, ReactNode } from "react";
import { Product, CartItem, VariantOption } from "@/types";
import { PRODUCTS } from "@/data/mockData";
import { toast } from "sonner";

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product, variants: Record<string, string>) => void;
  removeFromCart: (productId: string, variantKey: string) => void;
  updateQuantity: (
    productId: string,
    variantKey: string,
    delta: number
  ) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [products] = useState<Product[]>(PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Generate a unique key for cart items based on product ID and selected variants
  const getVariantKey = (
    productId: string,
    variants: Record<string, string>
  ) => {
    return `${productId}-${JSON.stringify(variants)}`;
  };

  const addToCart = (
    product: Product,
    selectedVariants: Record<string, string>
  ) => {
    setCart((prev) => {
      const variantKey = getVariantKey(product.id, selectedVariants);
      const existingItem = prev.find(
        (item) => getVariantKey(item.id, item.selectedVariants) === variantKey
      );

      // Calculate price with variant modifiers
      let finalPrice = product.basePrice;
      if (product.variants) {
        Object.entries(selectedVariants).forEach(
          ([variantName, variantValueId]) => {
            const variantType = product.variants?.find(
              (v) => v.name === variantName
            );
            const option = variantType?.options.find(
              (o) => o.id === variantValueId
            );
            if (option?.priceModifier) {
              finalPrice += option.priceModifier;
            }
          }
        );
      }

      if (existingItem) {
        toast.success("Updated quantity in cart");
        return prev.map((item) =>
          getVariantKey(item.id, item.selectedVariants) === variantKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      toast.success("Added to cart");
      return [
        ...prev,
        {
          ...product,
          selectedVariants,
          quantity: 1,
          totalPrice: finalPrice, // Base price + modifiers
        },
      ];
    });
  };

  const removeFromCart = (productId: string, variantKey: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => getVariantKey(item.id, item.selectedVariants) !== variantKey
      )
    );
    toast.error("Removed from cart");
  };

  const updateQuantity = (
    productId: string,
    variantKey: string,
    delta: number
  ) => {
    setCart((prev) =>
      prev.map((item) => {
        if (getVariantKey(item.id, item.selectedVariants) === variantKey) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce(
    (total, item) => total + item.totalPrice * item.quantity,
    0
  );

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};
