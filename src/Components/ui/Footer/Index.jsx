import { motion } from 'framer-motion';
import TextPressure from '../../TextAnimations/TextPressure/TextPressure';
import { useLocation, Link } from 'react-router-dom';

const Footer = ({ theme = null, nextProject = null }) => {
  const location = useLocation();
  
  console.log("Footer received nextProject:", nextProject);
  
  // Determine button text and link based on current path
  const getButtonConfig = () => {
    const path = location.pathname;
    console.log("Current path:", path);
    
    // If we have nextProject data and we're on a project page, use that
    if (nextProject && path.includes('/work/')) {
      console.log("Using next project navigation:", nextProject.title);
      return { 
        text: nextProject.title.toUpperCase(), 
        link: `/work/${nextProject.id}` 
      };
    }
    
    // Default navigation logic
    if (path === '/' || path.includes('/homes')) {
      return { text: 'WORKS', link: '/works' };
    } else if (path.includes('/works') && !path.includes('/works/')) {
      return { text: 'ABOUT', link: '/about' };
    } else if (path.includes('/about')) {
      return { text: 'HOME', link: '/' };
    } else {
      return { text: 'HOME', link: '/' };
    }
  };
  
  const buttonConfig = getButtonConfig();
  
  return (
    <footer className="h-[70vh] lg:h-screen flex flex-col overflow-hidden relative z-10">
      <div className="container mx-auto px-4 lg:space-x-16 space-y-8 flex-grow flex lg:flex-row flex-col justify-center items-center">
        <motion.p 
          className='font-medium text-gray-500'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.1, color: "#000000" }}
        >
          Go Ahead
        </motion.p>
        
        <Link 
          to={buttonConfig.link}
          className=""
        >
          <motion.h1 
            style={{ 
              color: theme?.textColor || 'inherit',
              '--underline-color': theme?.textColor || '#000000'
            }}
            className={`font-merriweather leading-none tracking-tighter font-semibold relative after:bg-[var(--underline-color)] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 ${
              location.pathname.includes('/work/') 
                ? 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem]' // Ukuran lebih kecil untuk halaman work details
                : 'text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem]' // Ukuran default
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {buttonConfig.text}
          </motion.h1>
        </Link>
        
        <motion.p 
          className='font-medium text-gray-500'
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.1, color: "#000000" }}
        >
          Next Page
        </motion.p>
      </div>
      
      {/* Footer bottom section */}
      <div className="w-full px-4 sm:px-6 lg:px-20 py-6 bg-black">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-white order-1">
            WAHYU MASS.AJI — 2025
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 order-3 md:order-2 w-full md:w-auto lg:mt-4 lg:mb-0 mb-2">
            <a 
              href="mailto:wahyuma123@gmail.com" 
              className="text-xs md:text-sm uppercase text-white hover:text-[#6E6E73] transition-colors"
            >
              EMAIL
            </a>
            <span className="text-xs md:text-sm text-white">/</span>
            <a 
              href="https://instagram.com/wahyumustikaaji_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs md:text-sm uppercase text-white hover:text-[#6E6E73] transition-colors"
            >
              INSTAGRAM
            </a>
            <span className="text-xs md:text-sm text-white">/</span>
            <a 
              href="https://www.linkedin.com/in/wahyumustikaaji/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs md:text-sm uppercase text-white hover:text-[#6E6E73] transition-colors"
            >
              LINKEDIN
            </a>
          </div>
          
          <p className="text-sm text-white order-2 md:order-3 lg:block hidden">
            DESIGNED BY <span className="text-[#6E6E73]">WAHYU AJI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;