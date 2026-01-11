import { Layout } from "@/components/layout/Layout";
import { 
  MessageSquareWarning, 
  Fish, 
  ShieldCheck, 
  Smartphone, 
  Globe, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const futureFeatures = [
  {
    icon: MessageSquareWarning,
    title: "Cyberbullying Detection",
    description: "AI-powered analysis of comments and messages to identify bullying patterns, harassment, and toxic behavior in real-time.",
    status: "In Development"
  },
  {
    icon: Fish,
    title: "Phishing Profile Detection",
    description: "Enhanced detection of profiles created specifically for phishing attacks, including analysis of shared links and messaging patterns.",
    status: "Planned"
  },
  {
    icon: ShieldCheck,
    title: "Profile Verification Service",
    description: "Optional verification badges for users who pass our AI authentication, helping build trust in online interactions.",
    status: "Concept"
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Native iOS and Android apps for on-the-go profile checking, with real-time notifications and quick-scan features.",
    status: "Planned"
  },
  {
    icon: Globe,
    title: "Multilingual Analysis",
    description: "Expanding NLP capabilities to analyze profiles and content in multiple languages including Hindi, Spanish, Arabic, and more.",
    status: "In Development"
  },
  {
    icon: Sparkles,
    title: "Browser Extension",
    description: "One-click profile analysis directly from social media platforms with automatic suspicious account alerts.",
    status: "Concept"
  }
];

const roadmap = [
  { quarter: "Q1 2024", items: ["Launch core detection for 6 platforms", "Basic NLP text analysis", "Risk scoring system"] },
  { quarter: "Q2 2024", items: ["Cyberbullying detection beta", "Improved ML models", "API for developers"] },
  { quarter: "Q3 2024", items: ["Mobile app launch", "Multilingual support", "Browser extension beta"] },
  { quarter: "Q4 2024", items: ["Phishing detection", "Profile verification", "Enterprise solutions"] }
];

export default function FuturePage() {
  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Coming Soon</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Future <span className="gradient-text">Enhancements</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We're constantly evolving to provide better protection. Here's what's coming 
              to CyberShield HER in the near future.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {futureFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="card-elevated rounded-xl p-6 border border-border/30 hover:border-accent/30 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className={`
                    text-xs font-medium px-2 py-1 rounded-full
                    ${feature.status === "In Development" ? "bg-success/10 text-success" : ""}
                    ${feature.status === "Planned" ? "bg-warning/10 text-warning" : ""}
                    ${feature.status === "Concept" ? "bg-muted text-muted-foreground" : ""}
                  `}>
                    {feature.status}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
              Development <span className="gradient-text-accent">Roadmap</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {roadmap.map((phase, index) => (
                <div 
                  key={phase.quarter}
                  className="card-glass rounded-xl p-5 border border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-sm font-bold text-primary mb-3">{phase.quarter}</div>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Want to help shape the future of online safety?
            </p>
            <Link to="/detector">
              <Button variant="cyber" size="xl" className="group">
                Try Current Version
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
