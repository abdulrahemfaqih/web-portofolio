const Experience = () => {
   const experiences = [
      {
         role: "Asisten Praktikum",
         company: "Program Studi Teknik Informatika, Universitas Trunojoyo Madura",
         period: "2023 - sekarang",
         description: "Membantu dosen untuk memberikan materi praktikum pada matakuliah Algoritma dan Dasar pemrograman, Dasar Pemrograman Web, Struktur Data dan Pengambangan Aplikasi Web"
      },
      {
         role: "Admin Laboratorium Teknik Informatika",
         company: "progam Studi teknik Informatika, Universitas Trunojoyo Madura",
         period: "2023 - sekarang",
         description: "Mengelola dan merawat perangkat keras dan perangkat lunak yang ada di laboratorium, serta membantu mahasiswa dalam penggunaan perangkat keras dan perangkat lunak yang ada di laboratorium"
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