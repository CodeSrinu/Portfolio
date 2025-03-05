import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              <div className="d-none d-md-block w-48 h-48 md:w-64 md:h-64 mx-auto relative rounded-full overflow-hidden border-4 border-primary/30">
                <img
                  src="/../src/images/img.jpg"
                  alt="Srinivasu Kadiyam"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-2/3 bg-background/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
            >
              <p className="text-text/90 leading-relaxed mb-6">
                I am a passionate <span className="text-primary">entrepreneur</span> and <span className="text-primary">tech enthusiast</span>, dedicated to creating <span className="text-primary">impactful</span> solutions. Through my startup and VR projects, I aim to <span className="text-primary">revolutionize</span> agriculture and education. My journey is driven by <span className="text-primary">innovation</span> and <span className="text-primary">accessibility</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;