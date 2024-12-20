const Experience = () => {
   const experiences = [
      {
         role: "Frontend Developer",
         company: "Tech Company",
         period: "2022 - Present",
         description: "Developed responsive web applications using React.js and Tailwind CSS"
      },
      {
         role: "Web Developer Intern",
         company: "Digital Agency",
         period: "2021 - 2022",
         description: "Assisted in building and maintaining client websites"
      }
   ];

   return (
      <div className="container py-20">
         <h1 className="relative-hover-effect text-4xl font-bold mb-10">
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