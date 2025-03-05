// src/components/Projects.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Leaf, Cloud, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'vr-education',
      title: 'VR Educational Project',
      tagline: 'Immersive Learning Experience',
      description: 'I have consistently worked on VR-based educational projects, focusing on making learning immersive and interactive. My goal has been to leverage VR technology to simplify complex concepts, especially in STEM education. From developing 3D models and simulations to integrating backend communication for VR labs, I have explored various ways to make education more engaging and accessible.',
      icon: <Globe className="text-primary" size={32} />,
      technologies: ['Unity', 'Unreal Engine', 'Vuforia', 'ARCore'],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'farm-service',
      title: 'Farm Service Platform',
      tagline: 'My Startup',
      description: 'I am actively working on my startup, Farm Service Platform, which aims to help farmers access essential services efficiently. The platform enables farmers to rent equipment, hire labor, and access services like drone fertilization, harvesting, and organic crop solutions through a WhatsApp bot, mobile app, and toll-free number. The WhatsApp bot is fully functional, and I am currently developing the mobile app while working on real-time service tracking.',
      icon: <Leaf className="text-primary" size={32} />,
      technologies: ['React Native', 'WhatsApp API', 'Node.js', 'Real-time Tracking'],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'weather-prediction',
      title: 'Weather Prediction System',
      tagline: 'AI-Powered Forecasting',
      description: 'I worked on a Weather Prediction System that used satellite images, radar data, and AI analysis to provide accurate, real-time weather forecasts. The system was designed to predict rainfall with precise timing, benefiting agriculture and institutional weather reporting. I used Python, OpenWeather API, and data from MOSDAC and MAUSAM IMD to process satellite imagery and radar inputs.',
      icon: <Cloud className="text-primary" size={32} />,
      technologies: ['Python', 'OpenWeather API', 'MOSDAC', 'MAUSAM IMD'],
      githubUrl: '#',
      demoUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Works</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Matches Tailwind's 'md' breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    if (isMobile) setIsFlipped(!isFlipped); // Flip on click for mobile
  };

  // Truncate description for front side preview
  const shortDescription = project.description.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.1 },
        y: { duration: 0.5, delay: index * 0.1 },
      }}
      viewport={{ once: true }}
      className="w-full bg-background border border-primary/20 rounded-lg perspective-1000 overflow-hidden min-h-[16rem] transition-all duration-600 ease-in-out"
      onClick={handleClick}
      onHoverStart={() => !isMobile && setIsFlipped(true)} // Flip on hover for desktop
      onHoverEnd={() => !isMobile && setIsFlipped(false)} // Reset on hover out
    >
      <motion.div
        className="w-full p-6"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 60,
          damping: 12,
          mass: 0.6,
          restDelta: 0.001,
        }}
        style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
      >
        {isFlipped ? (
          // Back Side with counter-rotation
          <div className="w-full flex flex-col items-center" style={{ transform: 'rotateY(180deg)' }}>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-text/70 mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto flex gap-3">
              <a
                href={project.githubUrl}
                className="flex items-center gap-1 text-sm bg-primary text-background px-3 py-1 rounded"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={project.demoUrl}
                className="flex items-center gap-1 text-sm border border-primary text-text px-3 py-1 rounded"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        ) : (
          // Front Side with short content
          <div className="w-full flex flex-col items-center justify-center text-center">
            <div className="mb-4">{project.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-primary mb-2">{project.tagline}</p>
            <p className="text-sm text-text/70 line-clamp-2">{shortDescription}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Projects;