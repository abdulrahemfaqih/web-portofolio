/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {

      extend: {
         gridTemplateColumns: {
            '52': 'repeat(52, minmax(0, 1fr))',
         },
         fontFamily: {
            // Perbaiki nama class yang digunakan
            inria: ["Inria Serif", "serif"], // Gunakan 'bree' sebagai nama class
         },
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
               md: "2rem",
               lg: "3rem",
               xl: "4rem",
            },
         },
      },

   },
   plugins: [],
};
