import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('solutions');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    solutionsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-matrix-glow/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-matrix-glow/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="slide-in-bottom">
          {/* Enhanced title with better typography hierarchy */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-2 md:mb-4 text-glow leading-none tracking-tight">
              Red<span className="text-secondary relative">
                Zen
                <div className="absolute -inset-1 bg-secondary/20 blur-xl rounded-full animate-pulse"></div>
              </span>
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-matrix-fade font-light tracking-wider">
              <span className="bg-gradient-to-r from-matrix-glow via-neon-cyan to-secondary bg-clip-text text-transparent">
                Cloud Solutions
              </span>
            </div>
          </div>
          
          {/* Enhanced description with better visual hierarchy */}
          <div className="max-w-3xl mx-auto mb-10 md:mb-16">
            <p className="text-lg sm:text-xl md:text-2xl mb-4 text-muted-foreground/90 leading-relaxed px-4 sm:px-0">
              Advanced automation. Intelligent systems. Visionary technology.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-matrix-glow leading-relaxed">
              Transform your digital infrastructure.
            </p>
          </div>
          
          {/* Enhanced buttons with better spacing and effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="neon" 
              size="lg" 
              className="font-semibold text-lg px-8 py-4 group relative overflow-hidden" 
              onClick={scrollToSolutions}
            >
              <span className="relative z-10">Explore Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-matrix-glow/0 via-matrix-glow/20 to-matrix-glow/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            <Button 
              variant="matrix" 
              size="lg" 
              className="font-semibold text-lg px-8 py-4 group relative overflow-hidden" 
              onClick={scrollToProjects}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
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
      
      {/* Enhanced floating elements */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-matrix-glow/10 rounded-full blur-xl float-animation">
        <div className="w-full h-full bg-matrix-glow/20 rounded-full animate-ping"></div>
      </div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 bg-neon-cyan/10 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}>
        <div className="w-full h-full bg-neon-cyan/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Additional floating particles */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-matrix-glow rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-secondary rounded-full animate-bounce opacity-80" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-neon-cyan rounded-full animate-pulse opacity-70" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default Hero;