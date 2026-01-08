import { Award, Users, Heart, Leaf } from "lucide-react";
import craftsmanship from "@/assets/craftsmanship.jpg";
import bag3 from "@/assets/bag-3.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We pursue the highest standards of craftsmanship in every piece we create.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our artisans pour their heart into every stitch, every detail, every bag.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We source responsibly and create products designed to last generations.",
    },
    {
      icon: Users,
      title: "Heritage",
      description:
        "Three generations of leather crafting expertise define our legacy.",
    },
  ];

  const highlights = [
    { value: "1985", label: "Founded" },
    { value: "50K+", label: "Happy Customers" },
    { value: "120+", label: "Global Stores" },
    { value: "500+", label: "Artisans" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="w-full px-4 lg:px-12">
          <div className="w-full">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-body text-sm tracking-wider uppercase mb-6">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Crafting Luxury
              <span className="block text-secondary">Since 1985</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed w-full">
              For nearly four decades, Arun Bag has been at the forefront of
              luxury leather goods, combining traditional craftsmanship with
              contemporary design to create timeless pieces that transcend
              seasons and trends.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="w-full px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={craftsmanship}
                alt="Our craftsmanship"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-bold text-foreground">
                A Legacy of Excellence
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our journey began in a small workshop in Florence, where founder
                Marco Bellini first learned the art of leather working from his
                father. What started as a passion for creating beautiful,
                functional accessories has grown into a globally recognized
                luxury brand.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Today, we continue to honor that heritage while embracing
                innovation. Every Arun Bag is still handcrafted by skilled
                artisans using techniques passed down through generations,
                combined with modern design principles that ensure each piece is
                as relevant today as it will be in decades to come.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We believe that true luxury lies not just in the finest
                materials or impeccable craftsmanship, but in the stories our
                products help you create and the confidence they inspire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-primary">
        <div className="w-full px-4 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {item.value}
                </h3>
                <p className="font-body text-primary-foreground/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Quality */}
      <section className="py-24 bg-muted">
        <div className="w-full px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <span className="inline-block px-4 py-2 rounded-full bg-olive/10 text-olive font-body text-sm tracking-wider uppercase">
                Quality Assurance
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground">
                Uncompromising Standards
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Every Arun Bag undergoes over 100 quality checkpoints before
                leaving our atelier. From the initial selection of leather hides
                to the final inspection of hardware placement, we leave nothing
                to chance.
              </p>
              <ul className="space-y-4">
                {[
                  "Hand-selected premium Italian leather",
                  "Gold-plated and palladium hardware",
                  "Double-stitched seams for durability",
                  "Hand-painted and burnished edges",
                  "Custom-made signature linings",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src={bag3}
                alt="Quality craftsmanship"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 p-6 bg-secondary rounded-xl shadow-gold">
                <p className="font-display text-4xl font-bold text-primary">
                  100+
                </p>
                <p className="font-body text-sm text-primary/80">
                  Quality Checks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="w-full px-4 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-body text-sm tracking-wider uppercase mb-4">
              Our Values
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
