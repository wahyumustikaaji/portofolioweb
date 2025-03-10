import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CardWorks = ({ projects, inDarkMode = false }) => {
  const textColor = inDarkMode ? "text-white" : "text-black";
  const subtextColor = inDarkMode ? "text-gray-300" : "text-gray-600";
  const borderColor = inDarkMode ? "border-gray-700" : "border-gray-300";
  
  return (
    <div className="min-h-screen pb-20 relative z-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className='w-full flex items-center justify-between mb-8'>
          <motion.h2 
            className={`text-2xl font-nohemi font-semibold ${textColor}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            WORKS
          </motion.h2>
          <p className={`font-nohemi text-xl font-medium ${textColor}`}>{projects.length}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-6">
          {projects.map((project, index) => {
            const [projectRef, projectInView] = useInView({
              threshold: 0.2,
              triggerOnce: true
            });
            
            return (
              <motion.div 
                ref={projectRef}
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Link to={`/work/${project.id}`} className="block">
                  <div className="overflow-hidden mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-[400px] lg:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105 rounded-lg"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`text-xl font-semibold ${textColor}`}>{project.title}</h3>
                  </div>
                  <p className={`text-sm ${subtextColor}`}>
                    {project.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardWorks;