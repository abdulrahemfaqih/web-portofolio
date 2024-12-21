import { GithubLogo, LinkedinLogo, EnvelopeSimple, Copyright } from "@phosphor-icons/react";

const Footer = () => {
   return (
      <footer className="container py-8 font-inria">
         <div className="flex flex-col items-center gap-4">
            {/* Social Links */}
            <div className="flex gap-6">
               <a
                  href="https://github.com/abdulrahemfaqih"
                  className="hover:text-gray-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <GithubLogo size={24} />
               </a>
               <a
                  href="https://www.linkedin.com/in/abdul-rahem-faqih-ab98072b6/"
                  className="hover:text-gray-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <LinkedinLogo size={24} />
               </a>
               <a
                  href="mailto:faqih3935@gmail.com"
                  className="hover:text-gray-600 transition-colors"
               >
                  <EnvelopeSimple size={24} />
               </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
               <Copyright size={16} />
               <p>{new Date().getFullYear()} Faqih. All rights reserved.</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;