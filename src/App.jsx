import { useState, useEffect, useRef } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Articles from './components/Articles';
import ArticleDetail from './components/ArticleDetail';
import MusicPlayer from './components/common/MusicPlayer';
import me from './assets/images/me.jpg';
import sekolah from './assets/images/sekolah.png';
import sidik from './assets/images/sidik.png';
import tambol from './assets/images/tambol.svg';
import rencana from './assets/images/rencana.png';
import studi1 from './assets/images/studi1.png';
import kasir from './assets/images/kasir.png';
import sister from './assets/images/sister.png';
import puskesmas from './assets/images/puskesmas.png';
import kanker_payudara from './assets/images/kanker_payudara.png';
import { Helmet } from 'react-helmet';
import NotFound from './components/NotFound';

const sectionVariants = {
   hidden: {
      opacity: 0,
      y: 50
   },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.6,
         ease: "easeOut",
         staggerChildren: 0.2 // Animasi bertahap untuk anak-anak elemen
      }
   }
};

const AnimatedSection = ({ children }) => {
   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.2 }}
         variants={sectionVariants}
         style={{ willChange: 'opacity, transform' }} // Optimasi rendering
      >
         {children}
      </motion.div>
   );
};

function App() {
   const [loading, setLoading] = useState(true);
   const [isPlaying, setIsPlaying] = useState(false);
   const audioRef = useRef(new Audio());

   useEffect(() => {
      const startTime = Date.now();

      const preloadResources = async () => {
         try {
            const imageUrls = [
               me, sekolah, sidik, tambol, kanker_payudara,
               rencana, studi1, kasir, sister, puskesmas
            ];

            const imagePromises = imageUrls.map(url => {
               return new Promise((resolve, reject) => {
                  const img = new Image();
                  img.src = url;
                  img.onload = resolve;
                  img.onerror = reject;
               });
            });

            await Promise.all([
               Promise.all(imagePromises),
               new Promise(resolve => {
                  const elapsed = Date.now() - startTime;
                  const delay = Math.max(1000 - elapsed, 0);
                  setTimeout(resolve, delay);
               })
            ]);

         } catch (error) {
            console.error('Failed to load resources:', error);
         } finally {
            setLoading(false);
         }
      };

      preloadResources();
   }, []);

   if (loading) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
               <div className="mb-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black mx-auto"></div>
               </div>
               <p className="text-lg font-medium">Tunggu sebentar</p>
            </div>
         </div>
      );
   }

   return (
      <Router>
         <Helmet>
            <meta name="description" content="Portfolio Abdul Rahem Faqih - Fullstack Developer specializing in Laravel and React" />
            <meta name="keywords" content="Abdul Rahem Faqih, Frontend Developer, React Developer, Laravel Developer, Backend Developer" />
            <meta property="og:title" content="Abdul Rahem Faqih | Portfolio" />
            <meta property="og:description" content="Fullstack Developer specializing in Laravel and React" />
         </Helmet>
         <div>
            <audio ref={audioRef} style={{ display: 'none' }} />
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar />
            <Routes>
               <Route path="/" element={
                  <>
                     <AnimatedSection>
                        <Hero audioRef={audioRef} isPlaying={isPlaying} />
                     </AnimatedSection>
                     <About />
                     <Experience />
                     <Projects />
                     <Articles/>
                     <Contact />
                  </>
               } />
               <Route path="/articles" element={<Articles />} />
               <Route path="/article/:flag" element={<ArticleDetail />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <MusicPlayer setIsPlaying={setIsPlaying} audioRef={audioRef} />
         </div>
         <Analytics />
      </Router>
   );
}

export default App;