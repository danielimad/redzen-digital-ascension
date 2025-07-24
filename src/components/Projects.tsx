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
      delay: '0s'
    },
    {
      title: 'Streaming Platform',
      description: 'Next-generation media distribution system with real-time content delivery, adaptive bitrate streaming, and intelligent load balancing across global edge networks.',
      image: streamingPlatformImage,
      tech: ['AWS', 'Ubuntu', 'Make.com'],
      delay: '0.2s'
    },
    {
      title: 'Social Media Platform',
      description: 'Scalable social networking infrastructure with advanced user engagement analytics, real-time communication systems, and intelligent content recommendation engines.',
      image: socialPlatformImage,
      tech: ['Bubble', 'GitHub', 'Framer'],
      delay: '0.4s'
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Live <span className="text-matrix-glow">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deployed solutions demonstrating the power of our integrated technology stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-matrix-glow">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-matrix-glow/10 text-matrix-glow rounded-full border border-matrix-glow/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="matrix" 
                  className="w-full group/btn"
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