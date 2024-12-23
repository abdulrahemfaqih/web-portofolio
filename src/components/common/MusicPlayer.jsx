import { useState, useEffect, useRef } from "react";
import { Disc, CaretDown } from "@phosphor-icons/react";
import { toast } from "react-hot-toast";

const songs = [
   { id: 1, title: "DJ Track 1", path: "/audio/dj1.mp3" },
   { id: 2, title: "DJ Track 2", path: "/audio/dj2.mp3" },
   { id: 3, title: "DJ Track 3", path: "/audio/dj3.m4a" },
];

const MusicPlayer = ({ setIsPlaying, audioRef }) => {
   const [isScrolling, setIsScrolling] = useState(false);
   const [showSongList, setShowSongList] = useState(false);
   const [currentSong, setCurrentSong] = useState(songs[0]);
   const [localIsPlaying, setLocalIsPlaying] = useState(false);
   const scrollTimeout = useRef(null);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolling(true);
         if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
         }
         scrollTimeout.current = setTimeout(() => {
            setIsScrolling(false);
         }, 300);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
         if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
         }
      };
   }, []);

   useEffect(() => {
      if (!audioRef.current) return;

      const handleEnded = () => {
         audioRef.current.currentTime = 0;
         audioRef.current.play();
      };

      audioRef.current.addEventListener("ended", handleEnded);

      return () => {
         if (audioRef.current) {
            audioRef.current.removeEventListener("ended", handleEnded);
         }
      };
   }, [audioRef]);

   useEffect(() => {
      if (!audioRef.current) return;

      audioRef.current.src = currentSong.path;

      if (localIsPlaying) {
         audioRef.current.play().catch(error => {
            console.error('Failed to play audio:', error);
         });
      }
   }, [currentSong]);

   const handleToggleMusic = async () => {
      if (!audioRef.current) return;

      try {
         if (localIsPlaying) {
            audioRef.current.pause();
            setLocalIsPlaying(false);
            setIsPlaying(false);
            toast.success("Music stopped", {
               icon: "🎵",
               position: "bottom-left",
            });
         } else {
            await audioRef.current.play();
            setLocalIsPlaying(true);
            setIsPlaying(true);
            toast.success(`Playing: ${currentSong.title}`, {
               icon: "🎧",
               position: "bottom-left",
            });
         }
      } catch (error) {
         console.error('Failed to toggle audio:', error);
         toast.error("Failed to play audio. Please try again.");
      }
   };

   const handleSongSelect = (song) => {
      setCurrentSong(song);
      setShowSongList(false);
      toast.success(`Changed to: ${song.title}`, {
         icon: "🎵",
         position: "bottom-left",
      });
   };

   return (
      <div
         className="fixed bottom-6 right-6 flex flex-col items-end gap-1 z-50"
         style={{
            opacity: isScrolling ? 0.3 : 1,
            transition: "opacity 0.3s ease",
         }}
      >
         {showSongList && (
            <div className="mb-1 w-40 md:w-48 bg-white rounded-lg shadow-lg border border-gray-200">
               <div className="p-1">
                  <div className="flex flex-col gap-0.5">
                     {songs.map((song) => (
                        <button
                           key={song.id}
                           onClick={() => handleSongSelect(song)}
                           className={`w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors duration-200
                              ${currentSong.id === song.id
                                 ? 'bg-blue-100 text-blue-600'
                                 : 'hover:bg-gray-100'
                              }`}
                        >
                           {song.title}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
         )}
         <div className="flex flex-col items-center w-[44px]">
            <button
               onClick={() => setShowSongList(!showSongList)}
               className="bg-white border-2 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-[44px] h-[44px] flex items-center justify-center"
               title="Select Song"
            >
               <CaretDown
                  size={24}
                  className={`text-gray-600 transition-transform duration-300 ${showSongList ? "rotate-180" : ""}`}
                  weight="fill"
               />
            </button>
            <button
               onClick={handleToggleMusic}
               className="bg-white border-2 p-2 mt-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-[44px] h-[44px] flex items-center justify-center"
               title={localIsPlaying ? "Stop Music" : "Play Music"}
            >
               <Disc
                  size={28}
                  className={
                     localIsPlaying
                        ? "text-blue-600 animate-spin"
                        : "text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
                  }
                  weight="fill"
               />
            </button>
         </div>
      </div>
   );
};

export default MusicPlayer;