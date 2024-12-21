import {
  Code,
  Database,
  Gear,
  Layout
} from "@phosphor-icons/react";
import cvFile from '../assets/cv/abdulrahemfaqih-cv.pdf';

const About = () => {
   const skills = {
      languages: [
         { name: "JavaScript", icon: "js" },
         { name: "Java", icon: "ts" },
         { name: "Python", icon: "python" },
         { name: "PHP", icon: "php" },
      ],
      frontend: [
         { name: "React", icon: "react" },
         { name: "Tailwind", icon: "tailwind" },
         { name: "Bootstrap", icon: "bootstrap" },
      ],
      backend: [
         { name: "Express", icon: "express" },
         { name: "Laravel", icon: "laravel" },
         { name: "Flask", icon: "flask" },
      ],
      database: [
         { name: "MySQL", icon: "mysql" },
      ]
   };

   return (
      <div className="container font-inria" id="about">
         <h1 className="relative-hover-effect text-4xl font-bold mb-5">ABOUT ME</h1>

         {/* About Description */}
         <div className="max-w-3xl mb-5">
            <p className="text-lg leading-relaxed text-gray-800">
               Saya adalah seorang Web Developer dengan fokus pada pengembangan aplikasi modern dan responsif.
               Dengan pengalaman dalam full-stack development, saya senang mengeksplorasi teknologi baru dan
               menciptakan solusi yang efisien untuk berbagai kebutuhan digital. Saat ini saya sedang menempuh
               pendidikan di bidang Informatika dan aktif mengembangkan berbagai project personal maupun kolaboratif.
            </p>
         </div>
         <div className="mb-16">
          <a
               href={cvFile}
               target="_blank"
            className="text-xs inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Download CV
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>


         {/* Skills Section */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Programming Languages */}
            <div className="skill-group">
               <div className="flex items-center gap-2 mb-4">
                  <Code size={24} weight="bold" />
                  <h2 className="text-2xl font-semibold  uppercase">Programming Languages</h2>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  {skills.languages.map((skill) => (
                     <div key={skill.name} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-lg">{skill.name}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Frontend */}
            <div className="skill-group">
               <div className="flex items-center gap-2 mb-4">
                  <Layout size={24} weight="bold" />
                  <h2 className="text-2xl font-semibold uppercase">Frontend</h2>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  {skills.frontend.map((skill) => (
                     <div key={skill.name} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-lg">{skill.name}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Backend */}
            <div className="skill-group">
               <div className="flex items-center gap-2 mb-4">
                  <Gear size={24} weight="bold" />
                  <h2 className="text-2xl font-semibold uppercase">Backend</h2>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  {skills.backend.map((skill) => (
                     <div key={skill.name} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-lg">{skill.name}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Database */}
            <div className="skill-group">
               <div className="flex items-center gap-2 mb-4">
                  <Database size={24} weight="bold" />
                  <h2 className="text-2xl font-semibold uppercase">Database</h2>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  {skills.database.map((skill) => (
                     <div key={skill.name} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-lg">{skill.name}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
};

export default About;