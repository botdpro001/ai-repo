import { ShieldAlert, UserX, CreditCard, MessageSquareWarning, Eye, Lock } from "lucide-react";

const dangers = [
  {
    icon: UserX,
    title: "Identity Theft",
    description: "Fake accounts steal personal photos and information to impersonate victims, causing reputation damage and emotional distress.",
  },
  {
    icon: CreditCard,
    title: "Financial Scams",
    description: "Scammers use fake profiles to build trust before stealing money through romance scams, fake investments, or phishing.",
  },
  {
    icon: MessageSquareWarning,
    title: "Cyberbullying & Harassment",
    description: "Fake accounts are used to harass, stalk, and spread misinformation about victims—especially targeting women.",
  },
  {
    icon: ShieldAlert,
    title: "Catfishing",
    description: "Deceptive profiles create false emotional connections, leading to manipulation and emotional harm.",
  },
  {
    icon: Eye,
    title: "Privacy Invasion",
    description: "Fake followers and accounts collect personal data for malicious purposes including doxxing and stalking.",
  },
  {
    icon: Lock,
    title: "Account Compromise",
    description: "Social engineering through fake accounts can lead to hacked accounts and stolen credentials.",
  },
];

export function WhySection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why Fake Accounts Are <span className="gradient-text">Dangerous</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding the threats helps you stay protected. Fake social media accounts pose 
            serious risks to your safety, privacy, and financial security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dangers.map((danger, index) => (
            <div
              key={danger.title}
              className="card-elevated rounded-xl p-6 transition-all duration-300 hover:border-destructive/30 hover:shadow-[0_0_30px_hsl(0_84%_60%_/_0.1)] group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-destructive/10 mb-4 transition-colors group-hover:bg-destructive/20">
                <danger.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{danger.title}</h3>
              <p className="text-muted-foreground text-sm">{danger.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
