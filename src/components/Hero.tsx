import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('solutions');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="slide-in-bottom">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
            Red<span className="text-secondary">Zen</span>
          </h1>
          <div className="text-2xl md:text-3xl mb-4 text-matrix-fade">
            Cloud Solutions
          </div>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-muted-foreground">
            Advanced automation. Intelligent systems. Visionary technology.
            <br />
            <span className="text-matrix-glow">Transform your digital infrastructure.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="neon" size="lg" className="font-semibold">
              Explore Solutions
            </Button>
            <Button variant="matrix" size="lg" className="font-semibold">
              View Projects
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNext}
          className="text-matrix-glow hover:text-matrix-glow/80"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-matrix-glow/10 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-neon-cyan/10 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;