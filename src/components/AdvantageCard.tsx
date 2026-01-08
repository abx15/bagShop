import { LucideIcon } from "lucide-react";

interface AdvantageCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AdvantageCard = ({ icon: Icon, title, description }: AdvantageCardProps) => {
  return (
    <div className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-secondary" />
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="font-body text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AdvantageCard;
