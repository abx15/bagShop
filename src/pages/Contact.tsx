import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no actual submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Flagship",
      lines: ["123 Via della Moda", "Florence, Italy 50123"],
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: ["+1 (888) 555-0123", "+39 055 123 4567"],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: ["hello@arunbag.com", "support@arunbag.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      lines: ["Mon - Fri: 9AM - 6PM", "Sat: 10AM - 4PM"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="w-full px-4 lg:px-12">
          <div className="text-center w-full">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-body text-sm tracking-wider uppercase mb-6">
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              We'd Love to
              <span className="block text-secondary">Hear From You</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Whether you have a question about our products, need assistance
              with an order, or simply want to say hello, our team is here to
              help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="w-full px-4 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                {info.lines.map((line, i) => (
                  <p
                    key={i}
                    className="font-body text-sm text-muted-foreground"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-muted">
        <div className="w-full px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-lg">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="resize-none"
                  />
                </div>
                <Button variant="hero" size="xl" className="w-full">
                  Send Message
                  <Send size={18} />
                </Button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Find Our Store
              </h2>
              <p className="font-body text-muted-foreground">
                Visit our flagship store in the heart of Florence to experience
                our collection in person and receive personalized styling advice
                from our experts.
              </p>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-primary/5 border border-border">
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
                    <p className="font-display text-xl font-semibold text-foreground mb-2">
                      Arun Bag Flagship Store
                    </p>
                    <p className="font-body text-muted-foreground">
                      123 Via della Moda, Florence
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-4">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Book an Appointment
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  For a personalized shopping experience, schedule a private
                  appointment with one of our expert stylists.
                </p>
                <Button variant="gold" size="default">
                  Schedule Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
