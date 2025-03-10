import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../Components/ui/Navbar';

export default function Works() {
  // Sample project data - in a real app, you might fetch this from an API
  const works = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform with cart functionality",
      image: "https://placehold.co/600x400",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creative professionals",
      image: "https://placehold.co/600x400",
      category: "UI/UX Design"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app to help teams organize their work",
      image: "https://placehold.co/600x400",
      category: "Web Application"
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "A website for a local restaurant with online ordering",
      image: "https://placehold.co/600x400",
      category: "Web Development"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Here are some of my recent works. Each project represents a unique challenge
          and showcases different skills and technologies.
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {works.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <Link to={`/work/${project.id}`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500 mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}