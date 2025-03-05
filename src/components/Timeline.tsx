import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, X, Youtube, School, BookOpen, AwardIcon, Glasses,Satellite, Rocket} from 'lucide-react';

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ReactNode;
}

const Timeline: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  const timelineItems: TimelineItem[] = [
    {
      id: 'school',
      date: '2020',
      title: '10th Grade - Infant Jesus School',
      shortDescription: 'Secured 10/10 GPA in SSC (Corona Batch).',
      fullDescription: 'Completed 10th grade at Infant Jesus English Medium High School with a perfect 10/10 GPA, adapting to online learning challenges during the pandemic.',
      icon: <School size={20} />,
    },
    {
      id: 'intermediate',
      date: '2022',
      title: '12th Grade - Narayana Junior College',
      shortDescription: 'Scored 82% in Intermediate, EPCET Rank - 111072.',
      fullDescription: 'Completed Intermediate at Narayana Junior College, focusing on science and engineering subjects, securing 82% and an EPCET Rank of 111072.',
      icon: <BookOpen size={20} />,
    },
    {
      id: 'engineering',
      date: '2023-Present',
      title: 'Engineering - SITE',
      shortDescription: 'Currently pursuing Engineering at Sasi Institute.',
      fullDescription: 'Enrolled in the Engineering program at Sasi Institute of Technology and Engineering, gaining hands-on experience in research and real-world projects.',
      icon: <GraduationCap size={20} />,
    },
    {
      id: 'vr-project',
      date: '2024',
      title: 'VR Educational Platform',
      shortDescription: 'Developing a VR-based education project.',
      fullDescription: 'Taking forward an SIH project as a personal initiative to create a VR-based educational platform, making learning more immersive.',
      icon: <Glasses size={20} />,
    },
    {
      id: 'sih',
      date: '2024',
      title: 'Smart India Hackathon',
      shortDescription: 'Participated in SIH, cleared two rounds.',
      fullDescription: 'Competed in Smart India Hackathon (SIH), successfully clearing two rounds while working on an innovative solution.',
      icon: <AwardIcon size={20} />,
    },
    {
      id: 'weather-research',
      date: '2025',
      title: 'Weather Satellite Research',
      shortDescription: 'Processing image data for satellite research.',
      fullDescription: 'Working as a researcher in the R&D department of ECT, focusing on processing satellite image data for weather prediction systems.',
      icon: <Satellite size={20} />,
    },
    {
      id: 'startup',
      date: '2025',
      title: 'Startup - Naandhi Tech',
      shortDescription: 'Building a tech-driven platform for farmers.',
      fullDescription: 'Founded Naandhi Tech, a startup dedicated to supporting farmers by providing innovative tech solutions for agriculture.',
      icon: <Rocket size={20} />,
    },
    {
      id: 'youtube',
      date: '2025',
      title: 'YouTube - Srinu Bytes',
      shortDescription: 'Started Srinu Bytes for tech & VR content.',
      fullDescription: 'Launched Srinu Bytes YouTube channel to share insights on VR development, tech innovations, and startup experiences.',
      icon: <Youtube size={20} />,
    },
  ];

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey So Far</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="timeline-line"></div>
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex mb-12 relative"
            >
              <div 
                className="timeline-node cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {item.icon}
              </div>
              <div className="ml-8">
                <span className="text-sm text-primary font-medium">{item.date}</span>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-text/70">{item.shortDescription}</p>
                <button 
                  className="text-primary mt-2 text-sm hover:underline"
                  onClick={() => setSelectedItem(item)}
                >
                  Read more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div className={`modal ${selectedItem ? 'active' : ''}`}>
        <div className="modal-content">
          {selectedItem && (
            <>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm text-primary font-medium">{selectedItem.date}</span>
                  <h3 className="text-2xl font-semibold">{selectedItem.title}</h3>
                </div>
                <button 
                  title='btn'
                  className="text-text/70 hover:text-primary"
                  onClick={() => setSelectedItem(null)}
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-text/90 mb-4">{selectedItem.fullDescription}</p>
              <div className="flex justify-end">
                <button 
                  className="outline-btn py-2 px-4"
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
