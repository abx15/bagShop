export type Category = "Men" | "Women" | "Travel" | "Office" | "School" | "Laptop";
export type BagType = "Pouch" | "Sling" | "Handbag" | "Backpack" | "Laptop Bag" | "Office Bag" | "Duffel" | "Travel" | "Trolley";

export interface VariantType {
    name: string; // e.g., "Size", "Color", "Material"
    options: VariantOption[];
}

export interface VariantOption {
    id: string;
    value: string; // e.g., "M", "Red", "Leather"
    priceModifier?: number; // Added to base price
    image?: string; // Optional image specific to this variant
}

export interface Review {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    basePrice: number;
    rating: number;
    reviews: number;
    category: Category[]; // Can belong to multiple (e.g., Office & Men)
    type: BagType;
    brand: string;
    images: string[];
    variants?: VariantType[];
    features?: string[];
    isNew?: boolean;
    isBestSeller?: boolean;
}

export interface CartItem extends Product {
    selectedVariants: Record<string, string>;
    quantity: number;
    totalPrice: number;
}
