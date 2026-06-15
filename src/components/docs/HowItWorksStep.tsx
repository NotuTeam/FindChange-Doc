import type { LucideIcon } from 'lucide-react';

interface HowItWorksStepProps {
  stepNumber: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function HowItWorksStep({
  stepNumber,
  icon: Icon,
  title,
  description,
  isLast,
}: HowItWorksStepProps) {
  return (
    <div className="flex gap-4 relative">
      {!isLast && (
        <div className="absolute left-[18px] top-10 bottom-0 w-px bg-border" />
      )}
      <div className="shrink-0 w-9 h-9 rounded-full border-2 border-accent bg-accent/10 flex items-center justify-center relative z-10">
        <Icon className="text-accent" size={16} />
      </div>
      <div className="pb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono text-zinc-500">Step {stepNumber}</span>
        </div>
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
