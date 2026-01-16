import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, total, items } = location.state || {}; // Expecting simulation data passed here

  if (!orderId) {
    return (
      <div className="min-h-screen pt-32 pb-16 text-center px-4">
        <h1 className="text-2xl font-bold mb-4">No order found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background flex items-center justify-center w-full">
      <div className="w-full max-w-lg px-6">
        <div className="bg-card border border-border rounded-2xl shadow-xl p-8 md:p-12 text-center space-y-8 animate-fade-in-up">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={40} />
          </div>

          <div>
            <h1 className="font-display text-3xl font-bold mb-2">
              Order Placed Successfully!
            </h1>
            <p className="text-muted-foreground">
              Thank you for your purchase. Your order has been received.
            </p>
          </div>

          <div className="bg-muted/30 rounded-xl p-6 text-left space-y-4">
            <div className="flex justify-between border-b border-border pb-4">
              <span className="text-muted-foreground">Order ID</span>
              <span className="font-mono font-bold">{orderId}</span>
            </div>
            <div className="flex justify-between border-b border-border pb-4">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-lg font-bold">Total Amount</span>
              <span className="text-2xl font-display font-bold text-primary">
                ${total?.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              onClick={() => navigate("/products")}
              className="w-full h-12 rounded-full font-bold"
            >
              Continue Shopping
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="w-full h-12 rounded-full"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
