import { GithubLogo, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [isContactSection, setIsContactSection] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   const isHomePage = location.pathname === '/';

   useEffect(() => {
      const handleScroll = () => {
         if (isHomePage) {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
               const rect = contactSection.getBoundingClientRect();
               setIsContactSection(rect.top <= 100 && rect.bottom >= 0);
            }
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
   }, [isHomePage]);

   const handleNavClick = (e, targetId) => {
      e.preventDefault();
      if (isHomePage) {
         // Jika di homepage, scroll ke section
         const element = document.getElementById(targetId);
         if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
         }
      } else {
         // Jika di halaman lain, navigasi ke homepage dulu kemudian scroll
         navigate('/', { state: { scrollTo: targetId } });
      }
      setIsMenuOpen(false);
   };

   useEffect(() => {
      // Handle scrolling after navigation to homepage
      if (isHomePage && location.state?.scrollTo) {
         const element = document.getElementById(location.state.scrollTo);
         if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
         }
         // Clear the state after scrolling
         navigate('/', { replace: true, state: {} });
      }
   }, [isHomePage, location.state, navigate]);

   const renderMenuItem = (type, to, text) => {
      if (type === 'section') {
         return (
            <a
               className={`text-2xl font-medium ${isContactSection && isHomePage ? 'relative-hover-effect-white' : 'relative-hover-effect'}`}
               href={`#${to}`}
               onClick={(e) => handleNavClick(e, to)}
            >
               {text}
            </a>
         );
      } else {
         return (
            <Link
               to={to}
               className={`text-2xl font-medium ${isContactSection && isHomePage ? 'relative-hover-effect-white' : 'relative-hover-effect'}`}
               onClick={() => setIsMenuOpen(false)}
            >
               {text}
            </Link>
         );
      }
   };

   return (
      <>
         <div className="h-28"></div>
         <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isContactSection && isHomePage
               ? 'bg-black/80 backdrop-blur-sm border-b border-gray-700 text-white'
               : isScrolled
                  ? 'bg-white/80 backdrop-blur-sm border-b shadow-sm'
                  : 'bg-white/80 backdrop-blur-sm border-b'
            }`}>
            <div className="font-inria container">
               <div className="flex justify-between items-center py-6 md:py-8">
                  <Link
                     to="/"
                     className={`text-3xl md:text-5xl font-bold ${isContactSection && isHomePage ? 'text-white' : 'text-black'
                        }`}
                  >
                     FAQIH
                  </Link>

                  {/* Desktop Menu */}
                  <div className="hidden lg:flex space-x-7">
                     {renderMenuItem('section', 'about', 'ABOUT')}
                     {renderMenuItem('section', 'experience', 'EXPERIENCE')}
                     {renderMenuItem('section', 'projects', 'PROJECT')}
                     {renderMenuItem('section', 'blog', 'BLOG')}
                     {renderMenuItem('section', 'contact', 'CONTACT')}
                  </div>

                  {/* GitHub Link */}
                  <div className="hidden lg:flex space-x-2 items-center">
                     <a
                        className={`text-xl font-medium flex items-center space-x-2 ${isContactSection && isHomePage ? 'relative-hover-effect-white' : 'relative-hover-effect'
                           }`}
                        href="https://github.com/abdulrahemfaqih"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <GithubLogo size={32} />
                        <p>abdulrahemfaqih</p>
                     </a>
                  </div>

                  {/* Hamburger Menu */}
                  <button
                     className={`lg:hidden ${isContactSection && isHomePage ? 'text-white' : 'text-black'}`}
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                     {isMenuOpen ? <X size={32} /> : <List size={32} />}
                  </button>
               </div>

               {/* Mobile Menu */}
               <div
                  className={`lg:hidden flex flex-col space-y-4 ${isContactSection && isHomePage ? 'text-white' : 'text-black'
                     }
                  transition-all duration-300 ease-in-out transform origin-top
                  ${isMenuOpen ? 'opacity-100 max-h-[500px] scale-y-100 pb-6' : 'opacity-0 max-h-0 scale-y-0'}`}
               >
                  {renderMenuItem('section', 'about', 'ABOUT')}
                  {renderMenuItem('section', 'experience', 'EXPERIENCE')}
                  {renderMenuItem('section', 'projects', 'PROJECTS')}
                  {renderMenuItem('section', 'blog', 'BLOG')}
                  {renderMenuItem('section', 'contact', 'CONTACT')}

                  <a
                     className={`text-xl font-medium flex items-center space-x-2 ${isContactSection && isHomePage ? 'relative-hover-effect-white' : 'relative-hover-effect'
                        }`}
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