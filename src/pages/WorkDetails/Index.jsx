import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from '../../Components/ui/Navbar';
import Magnet from '../../Components/Animations/Magnet/Magnet';
import PixelTransition from '../../Components/Animations/PixelTransition/PixelTransition';
import Footer from '../../Components/ui/Footer/Index';

export default function WorkDetails() {
  useEffect(() => {
    const container = document.querySelector('.group');
    const cursor = document.querySelector('.custom-cursor');
    
    if (!container || !cursor) return;
    
    const onMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.classList.remove('hidden');
    };
    
    const onMouseEnter = () => {
      cursor.classList.remove('hidden');
    };
    
    const onMouseLeave = () => {
      cursor.classList.add('hidden');
    };
    
    const onClick = () => {
      cursor.classList.add('scale-90');
      setTimeout(() => {
        cursor.classList.remove('scale-90');
      }, 150);
    };
    
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('click', onClick);
    
    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className="">
      <Navbar />
      
      <div className="px-4 lg:px-20 pt-60 relative z-10 flex items-center justify-between">
        <h1 className="font-merriweather text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[7rem] leading-none tracking-tighter font-semibold">Aeternum</h1>
        <div className="flex items-center justify-end gap-2 flex-wrap">
          <p className="bg-black text-white px-5 py-2 rounded-full text-sm flex justify-center items-center">WEB3</p>
          <p className="bg-black text-white px-5 py-2 rounded-full text-sm flex justify-center items-center">Blockchain</p>
          <p className="bg-black text-white px-5 py-2 rounded-full text-sm flex justify-center items-center">JWT</p>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 lg:px-20 mt-14">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => {
              document.querySelector('.project-image').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            <Magnet padding={100} disabled={false} magnetStrength={4}>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
                <span>Scroll to Explore</span>
              </div>
            </Magnet>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span className="">Share:</span>
          <a href="#" className="hover:text-gray-600 transition-colors">FB</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Tx</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Pin</a>
        </div>
      </div>
      
      <div className="mt-14">
        <img className="h-screen w-full object-cover project-image" src="https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg" alt="image project" />
      </div>

      <div className="px-4 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="text-lg text-[#6E6E73] font-medium">Overview</h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-3xl lg:text-4xl leading-snug">
              Redesigning the digital presence of one of the photography world's most iconic brands, 
              we crafted a mobile-first, user-centered experience for Canon. By blending skill-building resources, 
              community engagement for pros and amateurs alike, and captivating storytelling, 
              we reimagined the platform to inspire photographers at every level.
            </p>
            <Magnet padding={100} disabled={false} magnetStrength={4}>
              <button className="bg-black text-white font-merriweather font-medium px-12 py-4 rounded-full mt-12 hover:bg-gray-800 transition-all duration-300 ease-in-out">View Work</button>
            </Magnet>
          </div>
        </div>
      </div>

      <div className="">
        <img className="h-screen w-full object-cover project-image" src="https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg" alt="image project" />
      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-20 relative">
        <div className="container mx-auto px-4 lg:px-20 text-center">
          <motion.p 
            className="text-lg text-gray-500 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Best Features
          </motion.p>
          
          <div className="space-y-4">
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              transition={{ duration: 0.7 }}
            >
              Responsive
            </motion.h2>
            
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Dynamic
            </motion.h2>
            
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Interactive
            </motion.h2>
            
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Creative
            </motion.h2>
            
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Minimalist
            </motion.h2>
          </div>
          
          <motion.div 
            className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="w-6 h-6 md:w-10 md:h-10 border border-gray-300 rounded-full"></div>
          </motion.div>
        </div>
      </div>

      <div className="h-screen w-full relative group cursor-pointer" 
        style={{ 
          cursor: 'none',
        }}>
        <div className="custom-cursor hidden group-hover:flex absolute pointer-events-none z-50 items-center justify-center bg-black text-white rounded-full h-12 w-12 md:h-20 md:w-20 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out">
          <span className="text-xs md:text-sm font-medium">Click Me</span>
        </div>
        
        <PixelTransition
          firstContent={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111"
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
            </div>
          }
          gridSize={12}
          pixelColor='#ffffff'
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
      </div>

      <Footer/>
    </div>
  );
}