import Navbar from '../../Components/ui/Navbar';
import CardWorks from '../../Components/ui/CardWorks/Index';
import projectsData from '../../data/projects.json';
import { useInView } from 'react-intersection-observer';
import Footer from '../../Components/ui/Footer/Index';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import BackgroundLines from '../../Components/Backgrounds/Line/Index';

export default function Works() {
  const [cardRef, cardInView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  // Add these state variables for the time display
  const [localTime, setLocalTime] = useState('');
  const [timeZone, setTimeZone] = useState('');

  // Add this useEffect to update the time every second
  useEffect(() => {
    const updateLocalTime = () => {
      const now = new Date();
      
      // Format time as HH:MM
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setLocalTime(`${hours}:${minutes}`);
      
      // Get timezone offset in hours and minutes
      const offset = -now.getTimezoneOffset();
      const offsetHours = Math.floor(Math.abs(offset) / 60);
      const offsetMinutes = Math.abs(offset) % 60;
      const offsetSign = offset >= 0 ? '+' : '-';
      setTimeZone(`GMT (${offsetSign}${offsetHours}:${offsetMinutes.toString().padStart(2, '0')})`);
    };
    
    // Update time immediately
    updateLocalTime();
    
    // Then update every second
    const intervalId = setInterval(updateLocalTime, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className="">
      <Navbar />
      <BackgroundLines />

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
              WORKS
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
                <span className="text-gray-500">Available</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="absolute bottom-6 right-4 lg:right-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col">
              <p className="mb-1 font-merriweather text-sm">Location Local Time</p>
              <div className="flex items-center text-sm gap-2">
                <span className="text-gray-500">{localTime}, {timeZone}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className='pt-20' ref={cardRef}>
        <CardWorks 
          projects={projectsData} 
          isWorksPage={true} 
        />
      </div>
    </div>

    <Footer />
    </>
  );
}