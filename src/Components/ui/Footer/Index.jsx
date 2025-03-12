import { motion } from 'framer-motion';
import TextPressure from '../../TextAnimations/TextPressure/TextPressure';
import { useLocation, Link } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  
  // Determine button text and link based on current path
  const getButtonConfig = () => {
    const path = location.pathname;
    
    if (path === '/' || path.includes('/homes')) {
      return { text: 'WORKS', link: '/works' };
    } else if (path.includes('/works')) {
      return { text: 'ABOUT', link: '/about' };
    } else if (path.includes('/about')) {
      return { text: 'HOME', link: '/' };
    } else {
      return { text: 'HOME', link: '/' };
    }
  };
  
  const buttonConfig = getButtonConfig();
  
  return (
    <footer className="min-h-screen flex flex-col overflow-hidden relative z-10">
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
            className="font-merriweather text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] leading-none tracking-tighter font-semibold relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500"
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
      <div className="w-full px-4 sm:px-6 lg:px-20 py-6 border-t border-gray-200 bg-black">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-white order-1">
            WAHYU MASS.AJI — 2025
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 order-3 md:order-2 w-full md:w-auto mt-4 md:mt-0">
            <a 
              href="mailto:wahyuma123@gmail.com" 
              className="text-xs md:text-sm uppercase text-white hover:text-gray-400 transition-colors"
            >
              EMAIL
            </a>
            <span className="text-xs md:text-sm text-white">/</span>
            <a 
              href="https://twitter.com/wahyumustikaaji" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs md:text-sm uppercase text-white hover:text-gray-400 transition-colors"
            >
              TWITTER
            </a>
            <span className="text-xs md:text-sm text-white">/</span>
            <a 
              href="https://instagram.com/wahyumustikaaji_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs md:text-sm uppercase text-white hover:text-gray-400 transition-colors"
            >
              INSTAGRAM
            </a>
            <span className="text-xs md:text-sm text-white">/</span>
            <a 
              href="https://www.linkedin.com/in/wahyumustikaaji/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs md:text-sm uppercase text-white hover:text-gray-400 transition-colors"
            >
              LINKEDIN
            </a>
          </div>
          
          <p className="text-sm text-white order-2 md:order-3">
            DESIGNED BY <span className="text-gray-400">WAHYU AJI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;