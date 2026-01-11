import { Layout } from "@/components/layout/Layout";
import { Database, Brain, Cpu, FileSearch, BarChart3, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Data Collection",
    description: "You provide profile information such as username, bio, follower count, post activity, and account age. This data forms the foundation of our analysis."
  },
  {
    icon: Cpu,
    step: "02",
    title: "Feature Extraction",
    description: "Our system extracts key features from the data: follower ratios, account age, bio patterns, engagement metrics, and platform-specific indicators."
  },
  {
    icon: Brain,
    step: "03",
    title: "NLP Text Analysis",
    description: "Using TF-IDF and Natural Language Processing, we analyze bio text for scam keywords, suspicious patterns, and language anomalies common in fake accounts."
  },
  {
    icon: Database,
    step: "04",
    title: "ML Classification",
    description: "Our trained Machine Learning model processes all features through a classifier algorithm, comparing patterns against thousands of known fake account signatures."
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Risk Scoring",
    description: "The AI generates a fake probability score (0-100%) and categorizes the account as Low, Medium, or High risk based on weighted analysis of all factors."
  },
  {
    icon: Shield,
    step: "06",
    title: "Results & Protection",
    description: "You receive a detailed report with red flags, explanation of findings, and personalized safety recommendations to protect yourself online."
  }
];

export default function HowItWorksPage() {
  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">AI Technology</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              How <span className="gradient-text">CyberShield HER</span> Works
            </h1>
            <p className="text-muted-foreground text-lg">
              Our AI-powered detection system combines Machine Learning, Natural Language Processing, 
              and pattern recognition to identify fake social media accounts with high accuracy.
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto mb-16">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative flex gap-6 pb-12 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-accent/30" />
                )}
                
                {/* Step number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="card-glass rounded-xl p-6 flex-1 border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      STEP {step.step}
                    </span>
                    <h3 className="font-display font-bold text-xl">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="card-elevated rounded-2xl p-8 border border-border/30">
              <h2 className="font-display text-2xl font-bold mb-6 text-center">
                Technology Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🐍</span>
                  </div>
                  <h4 className="font-semibold mb-1">Python + Flask</h4>
                  <p className="text-sm text-muted-foreground">Backend API and ML model serving</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h4 className="font-semibold mb-1">Scikit-learn</h4>
                  <p className="text-sm text-muted-foreground">Machine Learning classification</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h4 className="font-semibold mb-1">TF-IDF NLP</h4>
                  <p className="text-sm text-muted-foreground">Text analysis and pattern detection</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/detector">
              <Button variant="cyber" size="xl" className="group">
                Try It Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
