import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('solutions');
    nextSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    solutionsSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="slide-in-bottom">
          <h1 className="sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 text-glow leading-tight text-6xl">
            Red<span className="text-destructive">Zen</span>
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4 text-matrix-fade">
            Cloud Solutions
          </div>
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto text-muted-foreground px-4 sm:px-0">
            Advanced automation. Intelligent systems. Visionary technology.
            <br className="hidden sm:block" />
            <span className="text-matrix-glow">Transform your digital infrastructure.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="neon" size="lg" className="font-semibold" onClick={scrollToSolutions}>
              Explore Solutions
            </Button>
            <Button variant="matrix" size="lg" className="font-semibold" onClick={scrollToProjects}>
              View Projects
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToNext} className="text-matrix-glow hover:text-matrix-glow/80">
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-matrix-glow/10 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 bg-neon-cyan/10 rounded-full blur-xl float-animation" style={{
      animationDelay: '2s'
    }}></div>
    </section>;
};
export default Hero;