/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
         },
         container: {
            center: true,
            padding: {
               DEFAULT: "1rem", // Tambahkan DEFAULT padding untuk mobile
               sm: "1rem",
               md: "3rem",
               lg: "5rem",
               xl: "10rem",
            },
         },
      },
      
   },
   plugins: [],
};
