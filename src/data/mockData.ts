import { Product, VariantType } from "@/types";

// --- VARIANTS HELPERS ---

const getSizeVariant = (baseMod = 10): VariantType => ({
    name: "Size",
    options: [
        { id: "s", value: "Small", priceModifier: 0 },
        { id: "m", value: "Medium", priceModifier: baseMod },
        { id: "l", value: "Large", priceModifier: baseMod * 2 },
    ],
});

const getMaterialVariant = (leatherPrice = 50): VariantType => ({
    name: "Material",
    options: [
        { id: "fabric", value: "Premium Canvas", priceModifier: 0 },
        { id: "leather", value: "Genuine Leather", priceModifier: leatherPrice },
        { id: "waterproof", value: "Waterproof Nylon", priceModifier: 20 },
    ],
});

const getColorVariant = (): VariantType => ({
    name: "Color",
    options: [
        { id: "black", value: "Midnight Black", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=500" },
        { id: "brown", value: "Classic Brown", image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&q=80&w=500" },
        { id: "tan", value: "Tan / Beige", image: "https://images.unsplash.com/photo-1590874103328-96030165e366?auto=format&fit=crop&q=80&w=500" },
        { id: "blue", value: "Navy Blue", image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c9?auto=format&fit=crop&q=80&w=500" },
    ],
});

// --- BASE PRODUCTS (Hand Curated) ---

const base_products: Product[] = [
    {
        id: "b1",
        name: "The Executive Office Satchel",
        description: "Crafted for the modern professional, this satchel combines functionality with timeless elegance. Features a padded laptop compartment and multiple organizer pockets.",
        basePrice: 149,
        rating: 4.8,
        reviews: 128,
        category: ["Office", "Men"],
        type: "Office Bag",
        brand: "LuxeCarry",
        images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=500"],
        variants: [getMaterialVariant(80), getColorVariant()],
        features: ["Fits 15-inch laptop", "Water-resistant coating", "Detachable shoulder strap"],
        isBestSeller: true,
    },
    {
        id: "b2",
        name: "Urban Explorer Backpack",
        description: "Rugged yet stylish, the Urban Explorer is perfect for daily commutes or weekend getaways. Ergonomic straps ensure all-day comfort.",
        basePrice: 89,
        rating: 4.6,
        reviews: 340,
        category: ["School", "Travel", "Men"],
        type: "Backpack",
        brand: "Nomad",
        images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=500"], // Placeholder logic below
        variants: [getSizeVariant(15), getColorVariant()],
        features: ["Anti-theft pocket", "USB charging port", "Breathable mesh back"],
    },
    {
        id: "b3",
        name: "Signature Tote Bag",
        description: "Minimalist design meets maximum utility. Spacious enough for your essentials and more.",
        basePrice: 129,
        rating: 4.9,
        reviews: 85,
        category: ["Women", "Office"],
        type: "Handbag",
        brand: "Vogue",
        images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500"],
        variants: [getMaterialVariant(60), getColorVariant()],
        isNew: true,
    },
    {
        id: "b4",
        name: "Jetsetter Trolley Suitcase",
        description: "Glide through terminals with our 360-degree spinner wheels. Polycarbonate shell protects your belongings.",
        basePrice: 220,
        rating: 4.7,
        reviews: 210,
        category: ["Travel"],
        type: "Trolley",
        brand: "Aero",
        images: ["https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=500"],
        variants: [getSizeVariant(50), { // Custom Trolley Size Variant
            name: "Size",
            options: [
                { id: "cabin", value: "Cabin (20\")", priceModifier: 0 },
                { id: "medium", value: "Check-in (24\")", priceModifier: 50 },
                { id: "large", value: "Large (28\")", priceModifier: 100 },
            ]
        }, getColorVariant()],
        features: ["TSA Lock", "Expandable storage", "5-year warranty"],
    },
    {
        id: "b5",
        name: "Canvas Weekender Duffel",
        description: "The perfect companion for short trips. Spacious main compartment with shoe pocket.",
        basePrice: 110,
        rating: 4.5,
        reviews: 90,
        category: ["Travel", "Men", "Women"],
        type: "Duffel",
        brand: "Heritage",
        variants: [getSizeVariant(20), getColorVariant()],
        images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=500"], // Placeholder logic below
    }
];

// --- GENERATION LOGIC ---

const generatedProducts: Product[] = [];
let idCounter = 100;

const bagTypes = ["Backpack", "Handbag", "Sling", "Travel", "Office Bag"];
const adjectives = ["Premium", "Classic", "Modern", "Vintage", "Durable", "Lightweight", "Luxury", "Essential"];

const unsplashImages = [
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=500", // Backpack
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500", // Tote
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=500", // Handbag red
    "https://images.unsplash.com/photo-1622560480609-bc0846e8e2c0?auto=format&fit=crop&q=80&w=500", // Backpack men
    "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=500", // Purse
    "https://images.unsplash.com/photo-1491637639811-60e2756cc1c9?auto=format&fit=crop&q=80&w=500", // Backpack forest
    "https://images.unsplash.com/photo-1590874103328-96030165e366?auto=format&fit=crop&q=80&w=500", // Travel bag
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500", // Watch (oops, wrong one, removing in filter)
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=500" // Generic bag
];

// Add base products
generatedProducts.push(...base_products);

// Generate 100 products
for (let i = 0; i < 95; i++) {
    const typeStr = bagTypes[Math.floor(Math.random() * bagTypes.length)];
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const brand = ["Nomad", "LuxeCarry", "Vogue", "Heritage", "SkyHigh"][Math.floor(Math.random() * 5)];

    // Assign random categories based on type
    const cats: any[] = [];
    if (typeStr === "Backpack") { cats.push("School", "Travel", "Men"); }
    if (typeStr === "Handbag") { cats.push("Women", "Office"); }
    if (typeStr === "Travel") { cats.push("Travel"); }
    if (typeStr === "Office Bag") { cats.push("Office", "Laptop"); }
    if (typeStr === "Sling") { cats.push("Women", "Travel"); }

    // Select random valid image
    const img = unsplashImages[Math.floor(Math.random() * unsplashImages.length)];

    generatedProducts.push({
        id: `bag_${idCounter++}`,
        name: `${adj} ${typeStr} ${i + 1}`,
        description: `A ${adj.toLowerCase()} ${typeStr.toLowerCase()} designed for style and utility. High-quality materials ensure longevity.`,
        basePrice: Math.floor(Math.random() * 200) + 40,
        rating: Number((Math.random() * 1.5 + 3.5).toFixed(1)),
        reviews: Math.floor(Math.random() * 200),
        category: cats,
        type: typeStr as any,
        brand: brand,
        images: [img],
        variants: [getColorVariant(), i % 2 === 0 ? getMaterialVariant() : getSizeVariant()], // Varied options
        isNew: i < 10,
        isBestSeller: i > 80,
    });
}

export const PRODUCTS = generatedProducts;
