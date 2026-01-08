import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, role, content, rating, image }: TestimonialCardProps) => {
  return (
    <div className="p-8 rounded-2xl bg-card border border-border hover-lift">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "fill-secondary text-secondary" : "text-border"}
          />
        ))}
      </div>
      <p className="font-body text-foreground leading-relaxed mb-6 italic">
        "{content}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="font-display text-lg font-semibold text-secondary">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <h4 className="font-display text-base font-semibold text-foreground">
            {name}
          </h4>
          <p className="font-body text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
