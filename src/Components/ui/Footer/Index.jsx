import { motion } from 'framer-motion';
import FollowCursor from '../../Animations/FollowCursor/FollowCursor';

const Footer = () => {
  return (
    <footer className="min-h-screen flex flex-col overflow-hidden relative z-10">
      <FollowCursor
        offsetX={-1000}
        cardWidth='200px'
        rotationFactor={90}
        enableTilt={true}
        animationConfig={{ mass: 5, tension: 350, friction: 40 }}
        wheelConfig={{ mass: 1, tension: 200, friction: 30 }}
      >
      </FollowCursor>
      {/* First section content */}
      <div className="container mx-auto px-4 flex-grow flex flex-col justify-center items-center">
        <div className="text-center max-w-6xl">
          <motion.h1 
            className="font-merriweather text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[7rem] leading-none font-medium tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Creative.
          </motion.h1>
          <motion.h1 
            className="font-merriweather bg-black text-white p-3 px-6 rounded-lg text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[7rem] leading-none font-medium tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Web Developer
          </motion.h1>
        </div>
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