import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to checkout if that's where they came from, otherwise home
  const from = location.state?.from?.pathname || "/";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistering) {
      // Register simulation
      login(formData);
    } else {
      // Login simulation - for now just use the name provided or a dummy
      login({
        ...formData,
        name: formData.name || "Returning User",
        address: formData.address || "123 Main St, New York, NY",
        phone: formData.phone || "555-0123",
      });
    }
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background flex items-center justify-center w-full">
      <div className="w-full max-w-md px-6">
        <div className="bg-card border border-border rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold mb-2">
              {isRegistering ? "Create Account" : "Welcome Back"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {isRegistering
                ? "Enter your details to create a new account."
                : "Sign in to access your saved information."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form fields */}
            <div className="space-y-4">
              {isRegistering && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input
                    name="name"
                    placeholder="John Doe"
                    required={isRegistering}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  onChange={handleChange}
                />
              </div>

              {isRegistering && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      required={isRegistering}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Shipping Address
                    </label>
                    <Input
                      name="address"
                      placeholder="123 Fashion St, NY"
                      required={isRegistering}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              {!isRegistering && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input
                    type="password"
                    placeholder="Any password works"
                    required
                  />
                </div>
              )}
            </div>

            <Button className="w-full rounded-full h-12 text-base font-bold mt-6">
              {isRegistering ? "Create Account" : "Sign In"}{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">
              {isRegistering
                ? "Already have an account?"
                : "Don't have an account?"}
            </span>
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="ml-2 font-bold text-primary hover:underline"
            >
              {isRegistering ? "Sign In" : "Register"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
