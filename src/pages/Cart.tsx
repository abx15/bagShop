import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useShop } from "@/context/ShopContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } =
    useShop();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-background flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <ShoppingBagIcon className="w-10 h-10 text-muted-foreground" />
        </div>
        <h1 className="font-display text-3xl font-bold mb-2">
          Your Cart is Empty
        </h1>
        <p className="text-muted-foreground max-w-md mb-8">
          It looks like you haven't added anything to your cart yet. Explore our
          collection to find your perfect match.
        </p>
        <Link to="/products">
          <Button size="lg" className="rounded-full px-8">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h1 className="font-display text-4xl font-bold mb-8">
          Shopping Bag ({cart.length})
        </h1>

        <div className="grid lg:grid-cols-[1fr_380px] gap-12">
          {/* Cart Items List */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${JSON.stringify(item.selectedVariants)}`}
                  className="p-6 flex gap-6 border-b border-border last:border-0 relative group"
                >
                  {/* Image */}
                  <Link
                    to={`/products/${item.id}`}
                    className="w-24 h-32 bg-muted rounded-md overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <Link
                        to={`/products/${item.id}`}
                        className="font-display font-bold text-lg hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="font-bold text-lg">
                        ${item.totalPrice * item.quantity}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.brand} |{" "}
                      {Object.entries(item.selectedVariants)
                        .map(([key, val]) => {
                          const variant = item.variants?.find(
                            (v) => v.name === key
                          );
                          const option = variant?.options.find(
                            (o) => o.id === val
                          );
                          return option?.value;
                        })
                        .join(", ")}
                    </p>

                    <div className="flex items-center gap-6">
                      {/* Quantity */}
                      <div className="flex items-center gap-3 border border-border rounded-full px-3 py-1">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              `${item.id}-${JSON.stringify(
                                item.selectedVariants
                              )}`,
                              -1
                            )
                          }
                          className="w-6 h-6 flex items-center justify-center hover:bg-muted rounded-full transition-colors disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              `${item.id}-${JSON.stringify(
                                item.selectedVariants
                              )}`,
                              1
                            )
                          }
                          className="w-6 h-6 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(
                            item.id,
                            `${item.id}-${JSON.stringify(
                              item.selectedVariants
                            )}`
                          )
                        }
                        className="text-sm text-muted-foreground hover:text-red-500 flex items-center gap-1 transition-colors"
                      >
                        <Trash2 size={16} />{" "}
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="font-display font-bold text-xl mb-6">
                Order Summary
              </h3>

              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${cartTotal}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping Estimate</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl">${cartTotal}</span>
                </div>
              </div>

              <Button size="lg" className="w-full h-12 text-base rounded-full">
                Checkout <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                <ShieldCheck size={14} className="text-green-600" />
                Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple Icon Component for empty state
const ShoppingBagIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export default Cart;
