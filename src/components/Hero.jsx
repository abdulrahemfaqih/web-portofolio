import { memo } from 'react';
import me from '../assets/images/me.jpg';
import AudioVisualizer from './common/AudioVisualizer';
import { motion } from 'framer-motion';

const Hero = ({ audioRef, isPlaying }) => {
   return (
      <div className="w-full font-inria text-center py-5 md:py-20 relative overflow-hidden" id="hero">
         <div className="container mx-auto">
            <div className="space-y-2">
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-6xl font-bold"
               >
                  WEB DEVELOPER
               </motion.h1>
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-5xl font-medium"
               >
                  STUDENT & TECH ENTHUSIAST
               </motion.h1>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="max-w-4xl text-end font-extralight"
               >
                  (2022-present)
               </motion.div>
            </div>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.8 }}
               style={{ willChange: 'transform' }} // Optimasi rendering
            >
               <img
                  src={me}
                  className="mt-8 mx-auto rounded-lg w-96 h-80 object-cover relative z-10 cursor-grab"
                  draggable="false" // Mencegah drag default browser
               />
            </motion.div>
         </div>
         <div className="absolute inset-0 flex items-center">
            <AudioVisualizer audioRef={audioRef} isPlaying={isPlaying} />
         </div>
      </div>
   );
};

export default memo(Hero); // Mengurangi re-render yang tidak perlu