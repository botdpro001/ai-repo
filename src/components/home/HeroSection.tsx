import { Link } from "react-router-dom";
import { Shield, ArrowRight, ShieldCheck, AlertTriangle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI-Powered Protection</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Protect Yourself from{" "}
            <span className="gradient-text">Fake Social Media</span>{" "}
            Accounts
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            CyberShield HER uses advanced AI, Machine Learning, and Natural Language Processing 
            to detect fake accounts, impersonation, and online scams—protecting women and all users 
            from digital threats.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/detector">
              <Button variant="cyber" size="xl" className="group">
                Start Detection
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="xl">
                Learn How It Works
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="card-glass rounded-xl p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold gradient-text mb-1">6+</div>
              <div className="text-sm text-muted-foreground">Platforms Supported</div>
            </div>
            
            <div className="card-glass rounded-xl p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-accent" />
              </div>
              <div className="font-display text-3xl font-bold gradient-text-accent mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Detection Accuracy</div>
            </div>
            
            <div className="card-glass rounded-xl p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-success/10 mx-auto mb-3">
                <Users className="w-6 h-6 text-success" />
              </div>
              <div className="font-display text-3xl font-bold text-success mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Users Protected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Shield Animation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
        <Shield className="w-64 h-64 text-primary float-animation shield-glow" />
      </div>
    </section>
  );
}
