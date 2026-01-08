import { Link } from "react-router-dom";
import { ArrowRight, Clock, Truck, DollarSign, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBag from "@/assets/hero-bag.jpg";
import bag1 from "@/assets/bag-1.jpg";
import bag2 from "@/assets/bag-2.jpg";
import bag3 from "@/assets/bag-3.jpg";
import bag4 from "@/assets/bag-4.jpg";
import bag5 from "@/assets/bag-5.jpg";
import bag6 from "@/assets/bag-6.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";

const Index = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Quick Order",
      description: "Fast and easy ordering process for your convenience.",
      bgColor: "bg-primary",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Swift delivery to your doorstep worldwide.",
      bgColor: "bg-secondary",
    },
    {
      icon: DollarSign,
      title: "Best Price Offer",
      description: "Competitive prices without compromising quality.",
      bgColor: "bg-primary",
    },
  ];

  const testimonials = [
    {
      name: "Raymond Boyle",
      role: "Fashion Enthusiast",
      content:
        "Amazing quality and design. My new favorite bag for everyday use.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      content: "Elegant and professional. Perfect for my work meetings.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Travel Blogger",
      content: "Durable and stylish. Accompanies me on all my journeys.",
      rating: 5,
    },
  ];

  const products = [
    { id: "1", name: "Midnight Noir", price: 249, image: bag1 },
    { id: "2", name: "Sunrise Tan", price: 199, image: bag2 },
    { id: "3", name: "Caramel Tote", price: 279, image: bag3 },
    { id: "4", name: "Travel Black", price: 329, image: bag4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex flex-col bg-background relative overflow-hidden">
        {/* Abstract background circles for luxury feel */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -z-10" />

        <div className="w-full flex-1 px-4 lg:px-12 py-12 lg:py-20 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Amazing Product Badge */}
              <div className="flex items-center gap-4 bg-muted/40 backdrop-blur-md px-4 py-2 rounded-full w-fit border border-border/50 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center overflow-hidden ring-2 ring-background">
                  <img
                    src={bag2}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="font-body text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-0.5">
                    Premium Quality
                  </p>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight">
                Carry what
                <br />
                <span className="text-secondary">suits you</span>
              </h1>

              {/* Description */}
              <p className="font-body text-muted-foreground max-w-md leading-relaxed">
                Perfect for everyone on the go! This bracelet keychain has a
                stylish tassel and card holder attached. Several card slots and
                a fold over snap to keep them in place.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6">
                <Link to="/products">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 h-auto text-lg rounded-full font-body font-semibold transition-all hover:shadow-lg">
                    Order Now
                  </Button>
                </Link>
                <Link to="/products">
                  <Button
                    variant="link"
                    className="text-primary hover:text-secondary px-6 py-4 h-auto text-lg font-body font-semibold transition-all group"
                  >
                    Explore More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Material & Finishing */}
              <div className="flex gap-12 pt-4">
                <div>
                  <h4 className="font-body text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
                    Material
                  </h4>
                  <p className="font-body text-xs text-muted-foreground">
                    European spinned synthetic from
                    <br />
                    "Alpine Deer Wool"
                  </p>
                </div>
                <div>
                  <h4 className="font-body text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-3">
                    Finishing
                  </h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed uppercase">
                    Semi-tanned durable clear
                    <br />
                    from nitro thick lacquer
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl transform hover:scale-[1.02] transition-transform duration-700">
                <img
                  src={heroBag}
                  alt="Featured luxury handbag"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                />
                {/* Decorative plant element */}
                <div className="absolute -top-10 -right-10 w-32 h-48 opacity-20 pointer-events-none rotate-12">
                  <svg
                    viewBox="0 0 64 96"
                    className="w-full h-full text-secondary"
                  >
                    <path
                      fill="currentColor"
                      d="M32 0c0 20 16 40 16 60s-8 36-16 36-16-16-16-36S32 0 32 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full px-4 lg:px-12 py-12 border-t border-border/10 bg-muted/5 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {/* 15+ Years */}
            <div className="bg-primary text-primary-foreground p-6 rounded-lg">
              <p className="font-display text-3xl lg:text-4xl font-bold">15+</p>
              <p className="font-body text-xs uppercase tracking-wider mt-1 opacity-80">
                Years of Experience
              </p>
            </div>

            {/* 1M+ Customers with Progress */}
            <div className="bg-card border border-border p-6 rounded-lg col-span-1">
              <div className="flex items-center justify-between mb-2">
                <p className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                  1M+
                </p>
                <span className="font-body text-xs text-muted-foreground uppercase">
                  View
                </span>
              </div>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Happy Customers
              </p>
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-4/5 rounded-full"></div>
              </div>
            </div>

            {/* 95 Stores */}
            <div className="bg-card border border-border p-6 rounded-lg">
              <p className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                95
              </p>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">
                International Store
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="w-full px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src={craftsmanship}
                  alt="Craftsmanship"
                  className="w-full h-64 lg:h-80 object-cover rounded-lg"
                />
              </div>
              <img
                src={bag3}
                alt="Product 1"
                className="w-full h-40 object-cover rounded-lg"
              />
              <img
                src={bag4}
                alt="Product 2"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                We are the best
                <br />
                manufacturing
                <br />
                company
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Village did removed enjoyed explain nor ham saw calling talking.
                Securing as informed declared or margaret. Joy horrible moreover
                man feelings own shy. Request norland neither mistake for yet.
                Between the for morning assured country believe.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-body text-secondary hover:text-secondary/80 transition-colors group"
              >
                <span className="uppercase text-sm tracking-wider font-medium">
                  Learn More
                </span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="w-full px-4 lg:px-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            OUR ADVANTAGES
          </h2>
          <div className="grid md:grid-cols-3 gap-6 w-full mx-auto">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`${advantage.bgColor} ${
                  advantage.bgColor === "bg-secondary"
                    ? "text-foreground"
                    : "text-primary-foreground"
                } p-8 rounded-lg text-center`}
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-full ${
                    advantage.bgColor === "bg-secondary"
                      ? "bg-primary/10"
                      : "bg-secondary"
                  } flex items-center justify-center`}
                >
                  <advantage.icon
                    size={24}
                    className={
                      advantage.bgColor === "bg-secondary"
                        ? "text-primary"
                        : "text-primary"
                    }
                  />
                </div>
                <h3 className="font-body font-semibold text-lg mb-2">
                  {advantage.title}
                </h3>
                <p
                  className={`font-body text-sm ${
                    advantage.bgColor === "bg-secondary"
                      ? "text-foreground/70"
                      : "text-primary-foreground/70"
                  }`}
                >
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="w-full px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                We are experienced
                <br />
                and professional
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Removing may suffering continue interest. Having regard for
                strictly margaret. Relation speaking as speaking no letters as
                was. Do consider too proposal.
              </p>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-foreground">
                    15+
                  </p>
                  <p className="font-body text-xs text-muted-foreground uppercase">
                    Years
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-foreground">
                    1k+
                  </p>
                  <p className="font-body text-xs text-muted-foreground uppercase">
                    Products
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-foreground">
                    85%
                  </p>
                  <p className="font-body text-xs text-muted-foreground uppercase">
                    Positive
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <img
                src={bag5}
                alt="Professional bag"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trend Setter Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="w-full px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <img
                src={bag6}
                alt="Trendsetter bag"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                We are trend setter
                <br />
                and also reliable
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Whether you're headed to the office, a weekend getaway, or just
                running errands, our bags are designed to elevate your style
                while providing practical functionality.
              </p>
              <Link to="/products">
                <Button className="bg-secondary text-foreground hover:bg-secondary/90 px-6 py-3 rounded-md font-body font-medium">
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full of Style Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="w-full px-4 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              FULL OF STYLE
            </h2>
            <div className="flex justify-center gap-2">
              <div className="w-8 h-1 bg-secondary rounded-full"></div>
              <div className="w-2 h-1 bg-muted-foreground/30 rounded-full"></div>
              <div className="w-2 h-1 bg-muted-foreground/30 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group"
              >
                <div className="bg-muted rounded-lg p-4 mb-3 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-body text-sm font-medium text-foreground">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  ${product.price}
                </p>
                <div className="w-full h-0.5 bg-secondary mt-2"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="w-full px-4 lg:px-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            TESTIMONIALS
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 rounded-lg"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="font-body text-sm font-medium text-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
