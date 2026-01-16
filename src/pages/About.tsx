import { Award, Users, Heart, Leaf, MapPin, Globe, Shield } from "lucide-react";

// You might usually import images here, effectively reusing what you might have
// import craftsmanship from "@/assets/craftsmanship.jpg";
// mocking image URLs for speed and reliability in this specific execution context
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=2000",
  craft:
    "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800",
  team: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
};

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Masterful Craftsmanship",
      description:
        "Every stitch tells a story of tradition. Our artisans dedicate days to perfect a single piece, ensuring quality that stands the test of time.",
    },
    {
      icon: Leaf,
      title: "Sustainable Luxury",
      description:
        "We source our leathers from ethical tanneries and use recycled materials for linings, committed to reducing our environmental footprint.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "From personalized styling to lifetime care for your bags, we build relationships, not just transactions.",
    },
  ];

  const stats = [
    { label: "Years of Excellence", value: "35+" },
    { label: "Global Boutiques", value: "12" },
    { label: "Artisans", value: "150+" },
    { label: "Countries Served", value: "40+" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Cinematic Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={IMAGES.hero}
          alt="Leather workshop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-3xl px-6">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block text-white/80 animate-fade-in">
            Our Heritage
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            The Art of Carrying
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
            Since 1989, we have been crafting more than just bags. We craft
            companions for your life's journey.
          </p>
        </div>
      </section>

      {/* Our Story - Split Layout */}
      <section className="py-24 bg-background w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="font-display text-4xl font-bold text-foreground">
              A Legacy Woven in Leather
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-body">
              <p>
                It began in a small, sunlit workshop in Florence. Founder Arun
                Rossi, inspired by his grandfather's saddle-making tools,
                stitched his first satchel. It wasn't perfect, but it had soul.
              </p>
              <p>
                Three decades later, that soul remains the core of Arun Bag.
                We've grown from a single workbench to a global name, yet we've
                never lost touch with the hands that make us.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground font-medium">
                "Luxury isn't about the price tag. It's about the feeling of
                holding something made with love, intention, and mastery."
              </blockquote>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-500" />
            <img
              src={IMAGES.craft}
              alt="Artisan working"
              className="relative rounded-xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-muted/30">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide every sketch, stitch, and shipment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-background p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <v.icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="px-4">
                <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                  {s.value}
                </div>
                <div className="text-sm uppercase tracking-wider font-semibold opacity-80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Image */}
      <section className="relative h-[400px]">
        <img
          src={IMAGES.team}
          alt="Our Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h2 className="font-display text-3xl font-bold mb-4">
              Be Part of Our Journey
            </h2>
            <p className="mb-8 max-w-lg mx-auto opacity-90">
              Join thousands of others who carry their world in an Arun Bag.
            </p>
            <a
              href="/products"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              View Collection
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
