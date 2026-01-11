import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Music, Ghost, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  { icon: Facebook, name: "Facebook", color: "from-blue-600 to-blue-700" },
  { icon: Instagram, name: "Instagram", color: "from-pink-500 via-purple-500 to-orange-400" },
  { icon: Twitter, name: "Twitter (X)", color: "from-sky-400 to-sky-500" },
  { icon: Linkedin, name: "LinkedIn", color: "from-blue-700 to-blue-800" },
  { icon: Music, name: "TikTok", color: "from-pink-500 to-cyan-400" },
  { icon: Ghost, name: "Snapchat", color: "from-yellow-400 to-yellow-500" },
];

export function PlatformsPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Detect Fakes Across <span className="gradient-text">All Platforms</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI engine is trained to detect platform-specific fake account patterns. 
            Select your platform and analyze any suspicious profile.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {platforms.map((platform, index) => (
            <Link
              key={platform.name}
              to="/detector"
              className="platform-card rounded-xl p-6 border border-border/50 text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110`}>
                <platform.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium">{platform.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Link to="/detector">
            <Button variant="cyber" size="lg" className="group">
              Start Platform Detection
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center mt-6 gap-2 text-muted-foreground text-sm">
          <Plus className="w-4 h-4" />
          <span>More platforms coming soon</span>
        </div>
      </div>
    </section>
  );
}
