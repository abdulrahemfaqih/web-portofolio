import experiences from "../data/ExperienceData";

const Experience = () => {
   return (
      <div className="container py-20" id="experience">
         <h1 className="relative-effect text-4xl font-bold mb-10">
            EXPERIENCE
         </h1>
         <div className="max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
               <div key={index} className="mb-8 border-l-2 border-gray-300 pl-4">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <div className="text-gray-600 mb-2">
                     <span>{exp.company}</span>
                     <span className="mx-2">•</span>
                     <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-700">{exp.description}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Experience;