import { useEffect, useRef } from 'react';

const AudioVisualizer = ({ audioRef, isPlaying }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const analyserRef = useRef(null);
    const audioContextRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) return;

        const initializeAudioContext = () => {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
                const source = audioContextRef.current.createMediaElementSource(audioRef.current);
                const analyser = audioContextRef.current.createAnalyser();

                analyser.fftSize = 256;
                source.connect(analyser);
                analyser.connect(audioContextRef.current.destination);
                analyserRef.current = analyser;
            }
        };

        const handlePlay = () => {
            initializeAudioContext();
        };

        audioRef.current.addEventListener('play', handlePlay);

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('play', handlePlay);
            }
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, [audioRef]);

    useEffect(() => {
        if (!isPlaying || !analyserRef.current || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = 250; // Adjusted height

        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);

        const animate = () => {
            animationRef.current = requestAnimationFrame(animate);
            analyserRef.current.getByteFrequencyData(dataArray);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const barWidth = 4;
            const gap = 2;
            const barCount = Math.floor(canvas.width / (barWidth + gap) / 2);

            for (let i = 0; i < barCount; i++) {
                const value = dataArray[i];
                const barHeight = (value / 255) * (canvas.height / 2);

                const xRight = centerX + (i * (barWidth + gap));
                ctx.fillStyle = `rgba(0, 0, 0, ${value / 400})`;
                ctx.fillRect(xRight, canvas.height / 2 - barHeight / 2, barWidth, barHeight);

                const xLeft = centerX - ((i + 1) * (barWidth + gap));
                ctx.fillRect(xLeft, canvas.height / 2 - barHeight / 2, barWidth, barHeight);
            }
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isPlaying]);

    return (
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={250}
            className="w-full opacity-40 -z-10"
        />
    );
};

export default AudioVisualizer;