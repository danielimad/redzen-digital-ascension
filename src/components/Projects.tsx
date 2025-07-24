import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Play } from 'lucide-react';
import aiWizardImage from '@/assets/ai-wizard.jpg';
import streamingPlatformImage from '@/assets/streaming-platform.jpg';
import socialPlatformImage from '@/assets/social-platform.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'AI Wizard',
      description: 'Intelligent automation platform powered by advanced machine learning algorithms. Streamlines complex workflows with predictive analytics and autonomous decision-making capabilities.',
      image: aiWizardImage,
      tech: ['OpenAI', 'AWS', 'n8n'],
      delay: '0s',
      url: 'https://ai.redzen.cloud'
    },
    {
      title: 'Streaming Platform',
      description: 'Next-generation media distribution system with real-time content delivery, adaptive bitrate streaming, and intelligent load balancing across global edge networks.',
      image: streamingPlatformImage,
      tech: ['AWS', 'Ubuntu', 'Make.com'],
      delay: '0.2s',
      url: 'https://tv.redzen.cloud'
    },
    {
      title: 'Social Media Platform',
      description: 'Scalable social networking infrastructure with advanced user engagement analytics, real-time communication systems, and intelligent content recommendation engines.',
      image: socialPlatformImage,
      tech: ['Bubble', 'GitHub', 'Framer'],
      delay: '0.4s',
      url: 'https://app.danielimad.com'
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 slide-in-bottom px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-glow leading-tight">
            Live <span className="text-matrix-glow">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Deployed solutions demonstrating the power of our integrated technology stack
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-morphism group hover:neon-border transition-all duration-500 overflow-hidden slide-in-bottom"
              style={{animationDelay: project.delay}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-matrix-glow">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 md:px-3 py-1 text-xs font-medium bg-matrix-glow/10 text-matrix-glow rounded-full border border-matrix-glow/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="matrix" 
                  className="w-full group/btn"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  <Play className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                  Launch Project
                  <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;