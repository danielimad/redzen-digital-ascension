import { Card, CardContent } from '@/components/ui/card';
import { 
  Cloud, 
  Github, 
  Bot, 
  Workflow, 
  Zap, 
  Database,
  Code,
  Cpu
} from 'lucide-react';

const Solutions = () => {
  const technologies = [
    { icon: Cloud, name: 'AWS', description: 'Scalable cloud infrastructure' },
    { icon: Code, name: 'Ubuntu', description: 'Reliable server environments' },
    { icon: Github, name: 'GitHub', description: 'Version control & CI/CD' },
    { icon: Workflow, name: 'Bubble', description: 'No-code applications' },
    { icon: Zap, name: 'Framer', description: 'Interactive prototypes' },
    { icon: Bot, name: 'OpenAI', description: 'AI-powered automation' },
    { icon: Database, name: 'Make.com', description: 'Process automation' },
    { icon: Cpu, name: 'n8n', description: 'Workflow orchestration' },
  ];

  return (
    <section id="solutions" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 slide-in-bottom px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-glow leading-tight">
            Advanced <span className="text-matrix-glow">Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies orchestrated for maximum efficiency and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.name} 
              className="glass-morphism group hover:neon-border transition-all duration-500 slide-in-bottom"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-4 md:p-6 text-center">
                <div className="mb-3 md:mb-4 flex justify-center">
                  <div className="p-2 md:p-3 rounded-full bg-matrix-glow/10 group-hover:bg-matrix-glow/20 transition-all duration-300">
                    <tech.icon className="h-6 w-6 md:h-8 md:w-8 text-matrix-glow" />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-foreground">
                  {tech.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center slide-in-bottom px-4 sm:px-0" style={{animationDelay: '0.8s'}}>
          <div className="glass-morphism p-6 md:p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-matrix-glow">
              Intelligent Automation Framework
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our solutions integrate seamlessly across cloud platforms, enabling 
              <span className="text-matrix-glow"> autonomous workflows</span>, 
              <span className="text-neon-cyan"> real-time optimization</span>, and 
              <span className="text-secondary"> predictive scaling</span>.
              Experience the future of cloud infrastructure today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;