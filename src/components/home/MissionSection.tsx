import { Heart, Shield, Sparkles } from "lucide-react";

export function MissionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="card-glass rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <span className="text-primary font-semibold">Our Mission</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Empowering Women with{" "}
              <span className="gradient-text">AI-Powered Safety</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              CyberShield HER was created with a singular focus: protecting women from the growing 
              threat of fake social media accounts. Women are disproportionately targeted by 
              impersonation, catfishing, stalking, and harassment online. Our AI-driven platform 
              provides accessible, beginner-friendly tools to identify and avoid these digital threats.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Protection First</h4>
                  <p className="text-sm text-muted-foreground">
                    Every feature is designed with user safety as the top priority.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">AI-Powered</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced ML and NLP technology for accurate threat detection.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Women-Centric</h4>
                  <p className="text-sm text-muted-foreground">
                    Built by women, for women—addressing unique online threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
