import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Lightbulb, Monitor, ChevronDown, ChevronUp, PenTool as Box } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming',
      icon: <Code className="text-primary" size={24} />,
      skills: [
        { name: 'C', level: 91 },
        { name: 'Python', level: 95 },
        { name: 'HTML & CSS', level: 92 },
        { name: 'JavaScript', level: 80 },
        { name: 'C#', level: 40 },
      ],
    },
    {
      name: 'Software Tools',
      icon: <Monitor className="text-primary" size={24} />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Unity', level: 75 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 80 },
      ],
    },
    {
      name: 'Frameworks & Libraries',
      icon: <Box className="text-primary" size={24} />,
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Unity', level: 75 },
      ],
    },
    {
      name: 'Entrepreneurial Skills',
      icon: <Lightbulb className="text-primary" size={24} />,
      skills: [
        { name: 'Business Strategy', level: 55 },
        { name: 'Market Analysis', level: 60 },
        { name: 'Funding', level: 45 },
        { name: 'Team Leadership', level: 90 },
      ],
    },
  ];

  const toggleCategory = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryName);
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-text/80 max-w-2xl mx-auto">
            A curated showcase of my technical expertise and entrepreneurial achievements, honed through years of innovation and leadership.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0f1a1b] rounded-lg overflow-hidden"
            >
              <div 
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-[#1a2526] transition-colors duration-300"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-primary">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className="text-primary">
                  {activeCategory === category.name ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </div>
              
              <AnimatePresence>
                {activeCategory === category.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[#1a2526]">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="bg-[#0f1a1b] rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-primary">({skill.level}%)</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8 }}
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;