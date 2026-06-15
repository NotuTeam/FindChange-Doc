import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

export default function FeatureCard({ icon: Icon, title, description, badge }: FeatureCardProps) {
  return (
    <div className="group relative rounded-card border border-border bg-bg-surface p-5 transition-colors hover:border-accent/40">
      {badge && (
        <span className="absolute top-3 right-3 text-[10px] uppercase text-accent bg-accent/10 px-1.5 py-0.5 rounded-badge">
          {badge}
        </span>
      )}
      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-3">
        <Icon className="text-accent" size={20} />
      </div>
      <h3 className="font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}
