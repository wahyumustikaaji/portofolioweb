import Navbar from '../../Components/ui/Navbar';
import Footer from '../../Components/ui/Footer/Index';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import BackgroundLines from '../../Components/Backgrounds/Line/Index';
import TiltedCard from '../../Components/Components/TiltedCard/TiltedCard'

// Import JSON data
import journeyData from '../../data/myjourney.json';
import experienceData from '../../data/experience.json';
import clientsData from '../../data/clients.json';

export default function About() {
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
        <div className="container mx-auto flex-grow flex flex-col justify-center items-center">
          <div className="text-center max-w-6xl">
            <motion.h1 
              className="font-merriweather text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] leading-none tracking-tighter font-semibold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              ABOUT
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
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
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
    </div>

    <div className='about py-20 px-4 lg:px-20 relative z-10'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Sticky content */}
          <div className="lg:w-1/2 lg:sticky lg:top-20 lg:self-start lg:h-[calc(100vh-8rem)] lg:flex lg:flex-col lg:justify-between">
          <div className='max-w-[500px] w-full lg:w-auto'>
          <TiltedCard
          imageSrc="/Images/profile.jpg"
          altText="Wahyu Aji - Web Developer"
          captionText="Wahyu Aji - Web Developer"
          containerHeight="300px"
          containerWidth="100%"
          imageHeight="300px"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text text-sm mt-5 ml-10">
              Wahyu Aji - Web Developer
            </p>
          }
        />
          </div>
            <div>
              <div className="max-w-lg">
                <p className="text-3xl mb-5 mt-3">
                  Hello, I'm Wahyu Mustika Aji from Indonesia.
                </p>
                <p className="text-gray-700 mb-4">
                I have gained extensive experience working with various clients and well-known brands. Over time, I have continuously developed my skills to create more opportunities for collaboration with new partners.
                </p>
                <p className="text-gray-700">
                To enhance my expertise and expand my professional scope, I have focused on front-end development, which is now my primary area of expertise. By mastering HTML, CSS, and JavaScript, I can build interactive web interfaces and collaborate effectively with development teams.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Scrollable timeline */}
          <div className="lg:w-1/2 mt-12 lg:mt-[100vh]">
            <motion.h2 
              className="text-5xl font-bold mb-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              MY JOURNEY
            </motion.h2>
            <div className="space-y-16">
              {/* Map through journey items */}
              {journeyData.journeyItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 * index, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-32 flex-shrink-0">
                    <p className="text-gray-500">{item.period}</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-gray-300">
                    <motion.div 
                      className="absolute left-[-4.5px] top-0 w-2 h-2 rounded-full bg-black"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 0.2 + (0.2 * index) }}
                    />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{item.company}</p>
                    {item.responsibilities ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {item.responsibilities.map((responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Experience section */}
            <motion.div 
              className="mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h2 
                className="text-5xl font-bold mb-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                EXPERIENCE
              </motion.h2>
              
              {/* Map through experience items */}
              <div className="space-y-8">
                {experienceData.experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 + (0.1 * index), ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 10 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Clients section */}
            <motion.div 
              className="mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h2 
                className="text-5xl font-bold mb-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                CLIENTS
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8">
                {/* Map through client letters */}
                {Object.entries(clientsData.clientsByLetter).map(([letter, clients], index) => (
                  <div key={letter}>
                    <motion.p 
                      className="text-gray-300 italic font-serif"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      {letter}
                    </motion.p>
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 0.2 + (0.1 * index) }}
                    >
                      {clients.map((client, i) => (
                        <p key={i}>{client}</p>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>

    <Footer />    
    </>
  );
}
