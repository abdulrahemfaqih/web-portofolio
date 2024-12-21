import me from '../assets/me.jpg'


const Hero = () => {
   return (
      <div className="container font-inria text-center py-20" id='hero'>
         <div className='space-y-2'>
            <h1 className='text-6xl font-bold'>WEB DEVELOPER</h1>
            <h1 className='text-5xl font-medium'>STUDENT & TECH ENTHUSIAST</h1>
            <div className='max-w-4xl text-end font-extralight'>(2022-present)</div>
         </div>
         <img src={me}  className="mt-8 mx-auto rounded-lg w-96 h-80 object-cover grayscale" />
      </div>
   );
};

export default Hero;
