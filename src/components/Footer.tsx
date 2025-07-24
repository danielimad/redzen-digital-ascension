import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
const Footer = () => {
  return <footer className="py-16 border-t border-matrix-glow/20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="slide-in-left text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4 text-glow">
              Ready to <span className="text-matrix-glow">Transform</span>?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed px-4 md:px-0">
              Join the digital revolution. Let's architect your next-generation 
              cloud infrastructure with cutting-edge automation and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 px-4 md:px-0">
              <Button variant="neon" size="lg" onClick={() => window.location.href = 'mailto:contact@danielimad.com'}>
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
            <div className="glass-morphism p-6 md:p-8 rounded-2xl mx-4 md:mx-0">
              <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-matrix-glow text-center md:text-left">Connect with RedZen Founder</h4>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-matrix-glow transition-colors text-sm md:text-base">
                  <Github className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span className="break-all">github.com/danielimad</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-matrix-glow transition-colors text-sm md:text-base">
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span className="break-all">linkedin.com/in/0xdanielimad</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-matrix-glow transition-colors text-sm md:text-base">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span className="break-all">contact@danielimad.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-matrix-glow/10 text-center text-xs md:text-sm text-muted-foreground slide-in-bottom px-4 md:px-0">
          <p className="leading-relaxed">
            © 2025 RedZen Cloud Solutions. 
            <a 
              href="https://danielimad.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-matrix-glow hover:text-matrix-glow/80 transition-colors ml-1"
            >
              Engineered for the future.
            </a>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;