import { GithubLogo, List, X } from "@phosphor-icons/react";
import { useState } from "react";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };


   const handleNavClick = (e, targetId) => {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
         setIsMenuOpen(false); // Close mobile menu after clicking
      }
   };

   return (
      <div className="font-inria container">
         <div className="flex justify-between items-center py-8">
            <a href="#hero"  className="text-3xl md:text-5xl font-bold">
               FAQIH
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-5">
               <a
                  className="relative-hover-effect text-2xl font-medium"
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
               >
                  ABOUT
               </a>
               <a
                  className="relative-hover-effect text-2xl font-medium"
                  href="#experience"
                  onClick={(e) => handleNavClick(e, 'experience')}
               >
                  EXPERIENCE
               </a>
               <a
                  className="relative-hover-effect text-2xl font-medium "
                  href="#projects"
                  onClick={(e) => handleNavClick(e, 'projects')}
               >
                  PROJECT
               </a>
               <a
                  className="relative-hover-effect text-2xl font-medium"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
               >
                  CONTACT
               </a>
            </div>

            <div className="hidden md:flex space-x-2 items-center">
               <a
                  className="relative-hover-effect text-xl font-medium flex items-center space-x-2"
                  href="https://github.com/abdulrahemfaqih"
                  target="_blank"
                  rel="noreferrer"
               >
                  <GithubLogo size={32} />
                  <p>abdulrahemfaqih</p>
               </a>
            </div>

            {/* Hamburger Button */}
            <button className="md:hidden" onClick={toggleMenu}>
               {isMenuOpen ? <X size={32} /> : <List size={32} />}
            </button>
         </div>

         {/* Mobile Menu */}
          <div
        className={`md:hidden flex flex-col space-y-4 pb-4 transition-all duration-300 ease-in-out transform origin-top ${
          isMenuOpen
            ? 'opacity-100 max-h-[500px] scale-y-100'
            : 'opacity-0 max-h-0 scale-y-0'
        }`}
      >
        <a
          className="relative-hover-effect text-2xl font-medium"
          href="#about"
          onClick={(e) => handleNavClick(e, 'about')}
        >
          ABOUT
        </a>
        <a
          className="relative-hover-effect text-2xl font-medium"
          href="#experience"
          onClick={(e) => handleNavClick(e, 'experience')}
        >
          EXPERIENCE
        </a>
        <a
          className="relative-hover-effect text-2xl font-medium"
          href="#projects"
          onClick={(e) => handleNavClick(e, 'projects')}
        >
          PROJECTS
        </a>
        <a
          className="relative-hover-effect text-2xl font-medium"
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          CONTACT
        </a>
        <a
          className="relative-hover-effect text-xl font-medium flex items-center space-x-2"
          href="https://github.com/abdulrahemfaqih"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size={32} />
          <p>abdulrahemfaqih</p>
        </a>
      </div>
      </div>
   );
};

export default Navbar;
