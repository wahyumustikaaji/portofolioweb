import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from '../../Components/ui/Navbar';
import Magnet from '../../Components/Animations/Magnet/Magnet';
import PixelTransition from '../../Components/Animations/PixelTransition/PixelTransition';
import Footer from '../../Components/ui/Footer/Index';
import projectsData from '../../data/projects.json';

export default function WorkDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const location = useLocation();
  
  // Get the current absolute URL
  const currentUrl = window.location.origin + location.pathname;
  
  // Refs for parallax sections
  const mainImageRef = useRef(null);
  const secondImageRef = useRef(null);
  
  // Get scroll progress for parallax effect
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Find the project with the matching ID
    const foundProject = projectsData.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  useEffect(() => {
    // Pastikan komponen sudah di-render sepenuhnya dan project sudah dimuat
    if (!project) return;
    
    // Tunggu sampai DOM sepenuhnya dimuat
    setTimeout(() => {
      const container = document.querySelector('.group');
      const cursor = document.querySelector('.custom-cursor');
      
      if (!container || !cursor) {
        console.log('Container or cursor element not found');
        return;
      }
      
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
    }, 500); // Tunggu 500ms untuk memastikan DOM sudah dimuat
  }, [project]); // Tambahkan project sebagai dependency

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading project details...</p>
      </div>
    );
  }

  const findNextProject = () => {
    if (!project) return null;
    
    const currentIndex = projectsData.findIndex(p => p.id === project.id);
    if (currentIndex === -1) return null;
    
    // If this is the last project, go to the first one
    const nextIndex = (currentIndex + 1) % projectsData.length;
    console.log("Next project:", projectsData[nextIndex]);
    return projectsData[nextIndex];
  };
  
  const nextProject = findNextProject();
  console.log("Current project:", project.id, "Next project:", nextProject?.id);

  // Get the absolute URL for the thumbnail image
  const thumbnailImageUrl = project.thumbnailImage 
    ? window.location.origin + project.thumbnailImage
    : "";

  return (
    <div 
      key={project.id} 
      className="" 
      style={{ 
        background: project.theme?.useGradient 
          ? `linear-gradient(90deg, ${project.theme.gradientFrom} 0%, ${project.theme.gradientTo} 100%)` 
          : project.theme?.backgroundColor || '#ffffff',
        color: project.theme?.textColor || '#000000'
      }}
    >
      <Helmet>
        <title>{project.title} - MASS.AJI</title>
        <meta property="og:title" content={`${project.title} - MASS.AJI`} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={thumbnailImageUrl} />
        <meta property="og:description" content={project.description} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar theme={project.theme} />
      </motion.div>
      
      <div className="px-4 lg:px-20 pt-52 relative z-10 flex lg:items-center justify-between lg:flex-row flex-col gap-5">
        <motion.h1 
          className="font-merriweather text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[7rem] leading-none tracking-tighter font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {project.title}
        </motion.h1>
        <motion.div 
          className="flex items-center lg:justify-end gap-2 flex-wrap max-w-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {project.categories.map((category, index) => (
            <motion.p 
              key={index} 
              className="px-5 py-2 rounded-full text-sm flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
              style={{
                backgroundColor: project.theme?.categoryBgColor || '#000000',
                color: project.theme?.categoryTextColor || '#ffffff'
              }}
            >
              {category}
            </motion.p>
          ))}
        </motion.div>
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
      
      {/* Main Image with Parallax Effect - h-screen */}
      <div className="mt-14 h-screen w-full overflow-hidden relative" ref={mainImageRef}>
        <ParallaxImage imageUrl={project.mainImage} altText={project.title} />
      </div>

      <div className="px-4 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 
              className="text-lg font-medium"
              style={{
                color: project.theme?.overviewTextColor || '#6E6E73'
              }}
            >
              Overview
            </h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-3xl lg:text-4xl leading-snug">
              {project.description}
            </p>
            <Magnet padding={100} disabled={false} magnetStrength={4}>
              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-merriweather font-medium px-12 py-4 rounded-full mt-12 transition-all duration-300 ease-in-out inline-block"
                style={{
                  backgroundColor: project.theme?.buttonBgColor || '#000000',
                  color: project.theme?.buttonTextColor || '#ffffff'
                }}
              >
                View Work
              </a>
            </Magnet>
          </div>
        </div>
      </div>

      <div>
        {project.video ? (
          <video 
            src={project.video} 
            autoPlay 
            muted
            loop
            playsInline
            className="w-screen object-cover h-screen pointer-events-none"
            preload="auto"
          ></video>
        ) : null}
        
        {/* Second Image with Parallax Effect - h-screen */}
        <div className="h-screen w-full overflow-hidden relative" ref={secondImageRef}>
          <ParallaxImage imageUrl={project.secondImage} altText="image project" />
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center py-20 relative">
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
            {project.bestFeatures.map((feature, index) => (
              <motion.h2 
                key={index}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {feature}
              </motion.h2>
            ))}
          </div>
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
          contents={
            project.projectImages.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Project image ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ))
          }
          gridSize={12}
          pixelColor='#ffffff'
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
      </div>

      <Footer theme={project.theme} nextProject={nextProject} />
    </div>
  );
}

function ParallaxImage({ imageUrl, altText }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  
  return (
    <div ref={ref} className="h-screen w-full overflow-hidden">
      <motion.div
        className="h-screen w-full"
        style={{ 
          y, 
          scale, 
          height: "92%",  
          position: "absolute",
          top: "-10%",   
        }}
      >
        <img 
          src={imageUrl} 
          alt={altText} 
          className="w-full h-full object-cover project-image"
          style={{ 
            objectPosition: "center" 
          }}
        />
      </motion.div>
    </div>
  );
}