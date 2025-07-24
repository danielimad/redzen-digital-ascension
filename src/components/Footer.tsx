import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
const Footer = () => {
  return <footer className="py-16 border-t border-matrix-glow/20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h3 className="text-3xl font-bold mb-4 text-glow">
              Ready to <span className="text-matrix-glow">Transform</span>?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Join the digital revolution. Let's architect your next-generation 
              cloud infrastructure with cutting-edge automation and intelligence.
            </p>
            <div className="flex gap-4">
              <Button variant="neon" size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Get Started
              </Button>
              <Button variant="glass" size="lg">
                <Terminal className="h-4 w-4 mr-2" />
                Documentation
              </Button>
            </div>
          </div>
          
          <div className="slide-in-right">
            <div className="glass-morphism p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-6 text-matrix-glow">Connect with RedZen Founder</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-matrix-glow transition-colors">
                  <Github className="h-5 w-5" />
                  <span>github.com/danielimad
                </span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-matrix-glow transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/0xdanielimad
                </span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-matrix-glow transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>contact@danielimad.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-matrix-glow/10 text-center text-sm text-muted-foreground slide-in-bottom">
          <p>
            © 2024 RedZen Cloud Solutions. 
            <span className="text-matrix-glow"> Engineered for the future.</span>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;