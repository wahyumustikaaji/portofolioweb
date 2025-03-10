import Navbar from '../../Components/ui/Navbar';
import Footer from '../../Components/ui/Footer/Index';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import CardWorks from '../../Components/ui/CardWorks/Index';
import projectsData from '../../data/projects.json';

export default function Home() {
  const [bgColor, setBgColor] = useState('bg-white');
  const [cardRef, cardInView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // useEffect(() => {
  //   if (cardInView) {
  //     setBgColor('bg-black');
  //   } else {
  //     setBgColor('bg-white');
  //   }
  // }, [cardInView]);

  const [ref1, inView1] = useInView({ threshold: 0.8, triggerOnce: false });
  const [ref2, inView2] = useInView({ threshold: 0.8, triggerOnce: false });
  const [ref3, inView3] = useInView({ threshold: 0.8, triggerOnce: false });
  const [ref4, inView4] = useInView({ threshold: 0.8, triggerOnce: false });
  const [ref5, inView5] = useInView({ threshold: 0.8, triggerOnce: false });

  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.0, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <div className={`transition-colors duration-700 ${bgColor} relative`}>
      {/* Grid background - vertical lines only */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 flex justify-between">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={`vline-${index}`} className="h-full w-px bg-gray-200"></div>
        ))}
      </div>
      
      <Navbar inDarkMode={cardInView} />
      <div className="min-h-screen flex flex-col relative z-10">
        {/* First section content */}
        <div className="container mx-auto px-4 flex-grow flex flex-col justify-center items-center">
          <div className="text-center max-w-6xl">
            <motion.h1 
              className="font-merriweather text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] leading-none tracking-tighter font-semibold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              WAYU
            </motion.h1>
            <motion.p 
              className="text-gray-400 uppercase tracking-wide text-lg sm:text-xl md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              WEBSITE DEVELOPER
            </motion.p>
            <motion.h1 
              className="font-merriweather text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] leading-none tracking-tighter font-semibold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              MASS.AJI
            </motion.h1>
          </div>
          
          <motion.div 
            className="absolute bottom-6 left-4 lg:left-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col">
              <p className="mb-1 font-merriweather text-sm">Freelancer Availability</p>
              <div className="flex items-center text-sm gap-2">
              <span class="relative flex size-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex size-2 rounded-full bg-green-500"></span>
              </span>
                <span className="text-gray-400">Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='min-h-screen flex justify-center items-center relative z-10'>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight px-4 md:px-8">
          <motion.p 
            ref={ref1}
            className='text-center font-merriweather flex flex-col sm:flex-row justify-center items-center sm:space-x-2'
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={fadeUpVariants}
          >
            <span className="text-black font-medium">Wahyu is a Indonesian</span>
            <span className="inline-flex items-center mx-2 mt-2 sm:mt-0">
              <img className='size-12 sm:size-14 md:size-16 rounded-full object-cover' src="https://cdn.antaranews.com/cache/1200x800/2023/06/18/20230618_080945.jpg" alt="" />
            </span>
          </motion.p>
          
          <motion.p 
            ref={ref2}
            className='text-center font-merriweather font-light mt-4 sm:mt-2'
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={fadeUpVariants}
          >
            <span className="text-black font-medium">Website Developer</span>
            <span className="inline-flex items-center mx-2 bg-blue-500 text-white px-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </span>
            <span className="text-gray-400">,</span>
          </motion.p>
          
          <motion.p 
            ref={ref3}
            className="text-gray-400 font-merriweather font-light text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-2"
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={fadeUpVariants}
          >
            Who builds <span className="flex items-center justify-center my-2 sm:my-0">
              <img src="https://placehold.co/100x80" alt="Project thumbnail" className="w-28 sm:w-32 md:w-36 h-12 sm:h-14 md:h-16 object-cover rounded-sm" />
            </span> websites
          </motion.p>
          
          <motion.p 
            ref={ref4}
            className="text-gray-400 font-merriweather font-light text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-2"
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={fadeUpVariants}
          >
            that drive business <span className="flex items-center justify-center my-2 sm:my-0">
              <img src="https://placehold.co/100x80" alt="Project thumbnail" className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 object-cover rounded-sm" />
            </span>
          </motion.p>
          
          <motion.p 
            ref={ref5}
            className="text-gray-400 font-merriweather font-light text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-2"
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={fadeUpVariants}
          >
            <span className="flex items-center justify-center my-2 sm:my-0">
              <img src="https://placehold.co/100x80" alt="Project thumbnail" className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 object-cover rounded-sm" />
            </span>
            and achieve results
          </motion.p>
        </div>
      </div>

      <div ref={cardRef}>
        <CardWorks projects={projectsData} />
      </div>

      {/* Services Section */}
      <div className="min-h-screen w-full px-4 relative z-10 flex flex-col justify-center items-center">
        <div className="w-full max-w-6xl mx-auto">
          <p className="mb-8 text-center">You need it? I do it</p>
          
          <div className="flex flex-col space-y-4 items-center justify-center">
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-7xl font-merriweather font-semibold text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.3 }}
            >
              branding
            </motion.h2>
            
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-7xl font-merriweather font-semibold text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.3 }}
            >
              web design
            </motion.h2>
            
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-7xl font-merriweather font-semibold text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.3 }}
            >
              development
            </motion.h2>
            
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-7xl font-merriweather font-semibold text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.3 }}
            >
              testing
            </motion.h2>
            
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-7xl font-serif italic font-normal text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.3 }}
            >
              marketing
            </motion.h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}