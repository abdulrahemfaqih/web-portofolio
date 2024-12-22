import { useState, useRef, useEffect } from 'react';
import { Disc } from "@phosphor-icons/react";
import { toast } from 'react-hot-toast';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const audioRef = useRef(new Audio('/audio/MASHUP-WATASHINO.mp3'));
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);

            // Clear the previous timeout
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // Set a new timeout to detect when scrolling stops
            scrollTimeout.current = setTimeout(() => {
                setIsScrolling(false);
            }, 300); // Adjust this value to control how quickly opacity returns to normal
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, []);

    const handleToggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
            toast.success('Music stopped', {
                icon: '🎵',
                position: 'bottom-left',
            });
        } else {
            audioRef.current.play();
            toast.success('Playing DJ Music', {
                icon: '🎧',
                position: 'bottom-left',
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div
            className="fixed bottom-6 right-6"
            style={{
                opacity: isScrolling ? 0.3 : 1,
                transition: 'opacity 0.3s ease'
            }}
        >
            <button
                onClick={handleToggleMusic}
                className="bg-white border-2 0 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                title={isPlaying ? 'Stop Music' : 'Play Music'}
            >
                {isPlaying ? (
                    <Disc
                        size={32}
                        className="text-blue-600 animate-spin"
                        weight="fill"
                    />
                ) : (
                    <Disc
                        size={32}
                        className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
                        weight="fill"
                    />
                )}
            </button>
        </div>
    );
};

export default MusicPlayer;