import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShop } from "@/context/ShopContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Truck, ShieldCheck, Loader2 } from "lucide-react";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useShop();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [paymentMethod, setPaymentMethod] = useState("card");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: { pathname: "/checkout" } } });
    }
  }, [isAuthenticated, navigate]);

  const tax = cartTotal * 0.1;
  const shipping = cartTotal > 150 ? 0 : 20;
  const total = cartTotal + tax + shipping;

  const handlePayment = () => {
    setIsProcessing(true);
    let counter = 5;
    setCountdown(5);

    const timer = setInterval(() => {
      counter -= 1;
      setCountdown(counter);

      if (counter === 0) {
        clearInterval(timer);
        setIsProcessing(false);

        const orderData = {
          orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
          user: user,
          items: cart,
          total: total,
          date: new Date().toISOString(),
        };

        // Save order to history (mock)
        const history = JSON.parse(
          localStorage.getItem("orderHistory") || "[]"
        );
        history.push(orderData);
        localStorage.setItem("orderHistory", JSON.stringify(history));

        clearCart();
        navigate("/order-success", { state: orderData });
      }
    }, 1000);
  };

  if (!cart.length) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <h1 className="font-display text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Details & Payment */}
          <div className="lg:col-span-2 space-y-8">
            {/* User Details */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Shipping Information</h2>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                  Verified
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Name</p>
                  <p className="font-medium">{user?.name}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p className="font-medium">{user?.phone}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-muted-foreground">Address</p>
                  <p className="font-medium">{user?.address}</p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="font-bold text-lg mb-6">Payment Method</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <CreditCard size={32} />
                  <span className="font-bold text-sm">Credit Card</span>
                </button>
                <button
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 transition-all ${
                    paymentMethod === "cod"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Wallet size={32} />
                  <span className="font-bold text-sm">Cash on Delivery</span>
                </button>
              </div>

              {paymentMethod === "card" && (
                <div className="mt-6 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground text-center">
                  <ShieldCheck className="mx-auto mb-2 w-6 h-6 text-green-600" />
                  This is a secure 256-bit encrypted transaction. <br />
                  (Simulated Payment - No real card needed)
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="font-display font-bold text-xl mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 max-h-[300px] overflow-auto pr-2 mb-6 custom-scrollbar">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${JSON.stringify(item.selectedVariants)}`}
                    className="flex gap-4"
                  >
                    <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">
                        {item.name}
                      </h4>
                      <div className="text-xs text-muted-foreground mt-1">
                        Qty: {item.quantity} × ${item.totalPrice}
                      </div>
                    </div>
                    <div className="font-bold text-sm">
                      ${item.totalPrice * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-border text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-4 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full mt-8 h-14 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing
                    Order ({countdown}s)... Please wait
                  </>
                ) : (
                  `Pay $${total.toFixed(2)}`
                )}
              </Button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Truck size={14} /> Free delivery on this order
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
