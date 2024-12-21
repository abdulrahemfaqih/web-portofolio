import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import me from './assets/images/me.jpg';
import sekolah from './assets/images/sekolah.png';
import sidik from './assets/images/sidik.png';
import tambol from './assets/images/tambol.svg';

function App() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const startTime = Date.now();

      const preloadResources = async () => {
         try {
            const imageUrls = [
               me,
               sekolah,
               sidik,
               tambol,
            ];

            // Preload all images
            const imagePromises = imageUrls.map(url => {
               return new Promise((resolve, reject) => {
                  const img = new Image();
                  img.src = url;
                  img.onload = resolve;
                  img.onerror = reject;
               });
            });

            // Wait for all resources and minimum time
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
               <p className="text-lg font-medium">
                  Tunggu sebentar
               </p>
            </div>
         </div>
      );
   }

   return (
      <div>
         <Toaster position="top-center" reverseOrder={false} />
         <Navbar />
         <Hero />
         <About />
         <Experience />
         <Projects />
         <Contact />
         <Footer />
      </div>
   );
}

export default App;