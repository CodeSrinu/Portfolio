import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Collaboration: React.FC = () => {
  return (
    <section id="collaboration" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <Users className="text-primary" size={40} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Collaborate</h2>
          
          <p className="text-xl text-text/90 mb-8">
            Exciting opportunity to work on my VR Educational Project and startup! I'm looking for individuals with expertise in UI/UX, 3D modeling, VR Unity, and ECE subjects to create impactful educational solutions and scale my Farm Service Platform.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#contact" className="primary-btn inline-block">
              Collaborate Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;