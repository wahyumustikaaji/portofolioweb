import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import Home from './pages/Homes/Index';
import About from './pages/Abouts/Index';
import Works from './pages/Works/Index';
import WorkDetails from './pages/WorkDetails/Index';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/work/:id" element={<WorkDetails />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
