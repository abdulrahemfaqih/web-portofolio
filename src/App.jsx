// src/App.jsx
import { useState, useRef } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { useResourceLoader } from './hooks/useResourceLoader';
import { pageVariants } from './config/animations';
import { SeoHelmet } from './config/metadata';
import { AppRoutes } from './routes';
import { imageUrls } from './config/images';
import Navbar from "./components/Navbar";
import LoadingScreen from './components/LoadingScreen';
import MusicPlayer from './components/common/MusicPlayer';

function App() {
   const [isPlaying, setIsPlaying] = useState(false);
   const audioRef = useRef(new Audio());
   const { loading, setLoading, contentReady } = useResourceLoader(imageUrls);  

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
               <SeoHelmet />
               <MusicPlayer setIsPlaying={setIsPlaying} audioRef={audioRef} />
               <div className="overflow-hidden">
                  <Toaster position="top-center" reverseOrder={false} />
                  <Navbar />
                  <AppRoutes audioRef={audioRef} isPlaying={isPlaying} />
                  <Analytics />
                  <SpeedInsights />
               </div>
            </motion.div>
         </AnimatePresence>
      </Router>
   );
}

export default App;