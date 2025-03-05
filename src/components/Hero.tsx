import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (nameRef.current) {
        nameRef.current.classList.add('animate');
      }
    }, 500);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto relative mb-8 group">
            <img
              src="/../src/images/img.jpg"
              alt="Srinivasu Kadiyam"
              className="w-full h-full object-cover rounded-full border-4 border-primary/30 transition-all duration-300 group-hover:border-primary"
            />
            <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow"></div>
          </div>
        </motion.div>

        <motion.h1
          ref={nameRef}
          className="text-4xl md:text-6xl font-bold mb-4 gradient-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Srinivasu Kadiyam
        </motion.h1>
        
        <motion.p
          className="text-sm md:text-base text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Srinu
        </motion.p>

        <motion.div
          className="text-xl md:text-2xl mb-8 h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typewriter
            options={{
              strings: ['Entrepreneur', 'Tech Enthusiast', 'Innovator'],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
              delay: 150,
              wrapperClassName: 'typewriter-wrapper',
              cursorClassName: 'typewriter-cursor text-primary',
            }}
          />
        </motion.div>

        <motion.p
          className="text-lg md:text-xl mb-8 gradient-text font-medium font-elegant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          "Help Millions, To make Millions"
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#contact" 
            className="primary-btn transform transition-transform duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className="outline-btn hover:bg-primary/20 transition-all duration-300"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col items-center">
            <p className="text-sm text-text/70 mb-2">Keep Scrolling</p>
            <ChevronDown className="text-primary animate-bounce-slow" size={24} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;