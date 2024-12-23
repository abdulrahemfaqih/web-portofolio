import me from '../assets/images/me.jpg';
import AudioVisualizer from './common/AudioVisualizer';

const Hero = ({ audioRef, isPlaying }) => {
   return (
      <div className="w-full font-inria text-center py-5 md:py-20 relative overflow-hidden" id="hero">
         <div className="container mx-auto">
            <div className="space-y-2">
               <h1 className="text-6xl font-bold">WEB DEVELOPER</h1>
               <h1 className="text-5xl font-medium">STUDENT & TECH ENTHUSIAST</h1>
               <div className="max-w-4xl text-end font-extralight">(2022-present)</div>
            </div>
            <img src={me} className="mt-8 mx-auto rounded-lg w-96 h-80 object-cover relative z-10" />
         </div>
         <div className="absolute inset-0 flex items-center">
            <AudioVisualizer audioRef={audioRef} isPlaying={isPlaying} />
         </div>
      </div>
   );
};

export default Hero;