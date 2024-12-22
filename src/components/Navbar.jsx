import { GithubLogo, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [isContactSection, setIsContactSection] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const contactSection = document.querySelector('#contact');
         if (contactSection) {
            const rect = contactSection.getBoundingClientRect();
            setIsContactSection(rect.top <= 0 && rect.bottom >= 0);
         }
         if (window.scrollY > 0) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      handleScroll();

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const handleNavClick = (e, targetId) => {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
         setIsMenuOpen(false);
      }
   };

   return (
      <>
         {/* Spacer div to push content down */}
         <div className="h-28"></div>

         {/* Navbar */}
         <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isContactSection
            ? 'bg-black/80 backdrop-blur-sm border-b border-gray-700'
            : isScrolled
               ? 'bg-white/80 backdrop-blur-sm border-b shadow-sm'
               : 'bg-white/80 backdrop-blur-sm border-b shadow-sm'
            }`}>
            <div className="font-inria container">
               <div className="flex justify-between items-center py-6 md:py-8">
                  <a href="#hero" className={`text-3xl md:text-5xl font-bold ${isContactSection ? 'text-white' : 'text-black'
                     }`}>
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
                        className="relative-hover-effect text-2xl font-medium"
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

                  {/* Hamburger Menu */}
                  <button className={`md:hidden ${isContactSection ? 'text-white' : 'text-black'
                     }`} onClick={toggleMenu}>
                     {isMenuOpen ? <X size={32} /> : <List size={32} />}
                  </button>
               </div>

               {/* Mobile Menu */}
               <div className={`md:hidden flex flex-col space-y-4  ${isContactSection ? 'text-white' : 'text-black'
                  } transition-all duration-300 ease-in-out transform origin-top ${isMenuOpen ? 'opacity-100 max-h-[500px] scale-y-100 pb-6' : 'opacity-0 max-h-0 scale-y-0'
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
         </div>
      </>
   );
};

export default Navbar;