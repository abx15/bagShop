import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
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
    console.log("Submitted:", formData);
    // Add toast notification logic here if desired
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our
            products, need assistance with an order, or just want to discuss
            leather care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Info Column */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="font-display text-2xl font-bold border-l-4 border-primary pl-4">
                Contact Information
              </h2>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Flagship</h3>
                    <p className="text-muted-foreground text-sm">
                      123 Fashion Avenue
                      <br />
                      New York, NY 10012
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-sm">
                      support@arunbag.com
                      <br />
                      careers@arunbag.com
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Support</h3>
                    <p className="text-muted-foreground text-sm">
                      +1 (555) 123-4567
                      <br />
                      Mon-Fri, 9am - 6pm EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold border-l-4 border-primary pl-4">
                Follow Us
              </h2>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>

            {/* Map Mock */}
            <div className="h-64 bg-muted rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-500 font-medium">
                  Interactive Google Map
                </span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-lg">
            <h2 className="font-display text-2xl font-bold mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input
                    name="name"
                    placeholder="Jane"
                    className="h-11 bg-background"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" className="h-11 bg-background" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="h-11 bg-background"
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Topic</label>
                <select className="w-full h-11 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:ring-2 focus:ring-ring">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Returns & Exchanges</option>
                  <option>Wholesale</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  name="message"
                  placeholder="How can we help you today?"
                  className="min-h-[150px] bg-background resize-none"
                  onChange={handleChange}
                />
              </div>

              <Button className="w-full h-12 text-base rounded-full gap-2">
                Send Message <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
