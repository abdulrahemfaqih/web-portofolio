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
import LoadingScreen from './components/LoadingScreen';

const pageVariants = {
   initial: {
      opacity: 0,
      y: 20,
      scale: 0.98
   },
   animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
         duration: 0.8,
         ease: [0.6, -0.05, 0.01, 0.99],
         staggerChildren: 0.1
      }
   },
   exit: {
      opacity: 0,
      y: -20,
      transition: {
         duration: 0.4
      }
   }
};

const sectionVariants = {
   hidden: {
      opacity: 0,
      y: 50
   },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.8,
         ease: [0.6, -0.05, 0.01, 0.99],
         staggerChildren: 0.2
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
         style={{ willChange: 'opacity, transform' }}
      >
         {children}
      </motion.div>
   );
};

function App() {
   const [loading, setLoading] = useState(true);
   const [contentReady, setContentReady] = useState(false);
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
                  const delay = Math.max(1500 - elapsed, 0);
                  setTimeout(resolve, delay);
               })
            ]);

         } catch (error) {
            console.error('Failed to load resources:', error);
         } finally {
            setLoading(false);
            // Add a slight delay before showing content
            setTimeout(() => setContentReady(true), 100);
         }
      };

      preloadResources();
   }, []);

   if (loading) {
      return <LoadingScreen onLoadingComplete={() => setLoading(false)} />;
   }

   return (
      <Router>
         <AnimatePresence mode="wait">
            <motion.div
               initial="initial"
               animate={contentReady ? "animate" : "initial"}
               exit="exit"
               variants={pageVariants}
            >
               <Helmet>
                  {/* ... your helmet content ... */}
               </Helmet>
               <div className="overflow-hidden">
                  <audio ref={audioRef} style={{ display: 'none' }} />
                  <Toaster position="top-center" reverseOrder={false} />
                  <motion.div
                     initial={{ y: -100, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: 0.2, duration: 0.6 }}
                  >
                     <Navbar />
                  </motion.div>
                  <Routes>
                     <Route path="/" element={
                        <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ duration: 0.8 }}
                        >
                           <AnimatedSection>
                              <Hero audioRef={audioRef} isPlaying={isPlaying} />
                           </AnimatedSection>
                           <About />
                           <Experience />
                           <Projects />
                           <Articles />
                           <Contact />
                        </motion.div>
                     } />
                     <Route path="/articles" element={<Articles />} />
                     <Route path="/article/:flag" element={<ArticleDetail />} />
                     <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer />
                  <MusicPlayer setIsPlaying={setIsPlaying} audioRef={audioRef} />
               </div>
               <Analytics />
            </motion.div>
         </AnimatePresence>
      </Router>
   );
}

export default App;