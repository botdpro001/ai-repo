import { Layout } from "@/components/layout/Layout";
import { Heart, Shield, Target, Users, Sparkles, Globe } from "lucide-react";
import heroImage from "@/assets/hero-shield.jpg";

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden mb-12">
              <img 
                src={heroImage} 
                alt="CyberShield HER - Protecting Women Online" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="font-display text-3xl md:text-4xl font-bold">
                  About <span className="gradient-text">CyberShield HER</span>
                </h1>
              </div>
            </div>

            {/* Abstract */}
            <div className="card-glass rounded-2xl p-8 border border-primary/20 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="font-display text-xl font-bold">Project Abstract</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CyberShield HER is an AI-powered web application designed to combat the growing threat of 
                fake social media accounts, with a special focus on protecting women from online harassment, 
                impersonation, catfishing, and digital fraud.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Using advanced Machine Learning algorithms and Natural Language Processing techniques, 
                our system analyzes social media profiles across multiple platforms to detect suspicious 
                patterns, fake engagement, and scam indicators. The platform provides users with clear, 
                actionable insights about potential threats.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This project demonstrates the practical application of AI in cybersecurity, specifically 
                addressing the unique challenges women face in the digital space—from stalking and 
                harassment to identity theft and romance scams.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="card-elevated rounded-xl p-6 border border-border/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  To empower individuals, especially women, with AI-driven tools that help identify 
                  and protect against fake social media accounts and online threats.
                </p>
              </div>

              <div className="card-elevated rounded-xl p-6 border border-border/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg">Why Women-Centric</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Women are disproportionately targeted by catfishing, stalking, harassment, and 
                  identity fraud. Our platform addresses these specific vulnerabilities.
                </p>
              </div>

              <div className="card-elevated rounded-xl p-6 border border-border/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-success" />
                  </div>
                  <h3 className="font-display font-bold text-lg">AI-First Approach</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Leveraging cutting-edge ML and NLP technologies ensures high accuracy detection 
                  that evolves with new fake account tactics.
                </p>
              </div>

              <div className="card-elevated rounded-xl p-6 border border-border/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-warning" />
                  </div>
                  <h3 className="font-display font-bold text-lg">Accessibility</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Designed to be beginner-friendly with clear explanations, making advanced 
                  cybersecurity tools accessible to everyone.
                </p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="card-glass rounded-2xl p-8 border border-accent/20">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-accent" />
                <h2 className="font-display text-xl font-bold">Real-World Impact</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="font-display text-3xl font-bold gradient-text mb-1">70%</div>
                  <div className="text-xs text-muted-foreground">of women experience online harassment</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold gradient-text-accent mb-1">1.3B</div>
                  <div className="text-xs text-muted-foreground">fake accounts removed annually</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-warning mb-1">$1.3B</div>
                  <div className="text-xs text-muted-foreground">lost to romance scams in 2022</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-success mb-1">95%</div>
                  <div className="text-xs text-muted-foreground">detection accuracy goal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
