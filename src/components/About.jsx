import {
  Code,
  Database,
  Gear,
  Layout
} from "@phosphor-icons/react";

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
         <div className="max-w-3xl mb-10">
            <p className="text-lg leading-relaxed text-gray-800">
               Saya adalah seorang Web Developer dengan fokus pada pengembangan aplikasi modern dan responsif.
               Dengan pengalaman dalam full-stack development, saya senang mengeksplorasi teknologi baru dan
               menciptakan solusi yang efisien untuk berbagai kebutuhan digital. Saat ini saya sedang menempuh
               pendidikan di bidang Informatika dan aktif mengembangkan berbagai project personal maupun kolaboratif.
            </p>
         </div>

         {/* Skills Section */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Programming Languages */}
            <div className="skill-group">
               <div className="flex items-center gap-2 mb-4">
                  <Code size={24} weight="bold" />
                  <h2 className="text-2xl font-semibold">Programming Languages</h2>
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
                  <h2 className="text-2xl font-semibold">Frontend</h2>
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
                  <h2 className="text-2xl font-semibold">Backend</h2>
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
                  <h2 className="text-2xl font-semibold">Database</h2>
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