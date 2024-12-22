import { useState, useRef } from 'react';
import { Disc } from "@phosphor-icons/react";
import { toast } from 'react-hot-toast';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('/audio/MASHUP-WATASHINO.mp3'));

    const handleToggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
            toast.success('Music stopped', {
                icon: '🎵',
                position: 'bottom-right',
            });
        } else {
            audioRef.current.play();
            toast.success('Playing DJ Music', {
                icon: '🎧',
                position: 'bottom-right',
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 right-6">
            <button
                onClick={handleToggleMusic}
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
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