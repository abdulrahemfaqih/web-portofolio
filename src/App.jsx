import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';

function App() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setLoading(false);
      }, 1000); // 1 detik

      return () => clearTimeout(timer);
   }, []);

   if (loading) {
      return (
         <div className="flex items-center justify-center min-h-screen">
            <p>Tunggu sebentar...</p>
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
