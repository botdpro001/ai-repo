import { Link } from "react-router-dom";
import { Shield, Heart, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-xl gradient-text">CyberShield HER</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              Protecting users—especially women—from fake social media accounts, impersonation, 
              scams, and identity fraud using AI-powered detection technology.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/detector" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Detect Fake Account
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/future" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Future Enhancements
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Report a Scam
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 CyberShield HER. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive" /> for women's online safety
          </p>
        </div>
      </div>
    </footer>
  );
}
