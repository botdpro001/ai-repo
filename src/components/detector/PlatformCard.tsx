import { PlatformInfo } from "@/lib/platforms";

interface PlatformCardProps {
  platform: PlatformInfo;
  onClick: () => void;
  index: number;
}

export function PlatformCard({ platform, onClick, index }: PlatformCardProps) {
  const Icon = platform.icon;
  
  return (
    <button
      onClick={onClick}
      className="platform-card rounded-xl p-6 border border-border/50 text-center group animate-fade-in cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.bgGradient} flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="font-display font-semibold text-lg mb-2">{platform.name}</h3>
      <p className="text-xs text-muted-foreground">
        Detect fake {platform.name} accounts
      </p>
    </button>
  );
}
