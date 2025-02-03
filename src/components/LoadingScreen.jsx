import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingDots = () => {
    return (
        <div className="flex justify-center space-x-2 mt-6">
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className="w-2 h-2 bg-[#5648F8] rounded-full"
                    style={{
                        animation: `bounce 1s infinite ${i * 200}ms`,
                        opacity: 0.7
                    }}
                />
            ))}
            <style>{`
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </div>
    );
};

const LoadingScreen = ({ onLoadingComplete }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (!isLoading && !isExiting) {
            const timer = setTimeout(() => {
                if (onLoadingComplete) onLoadingComplete();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isLoading, isExiting, onLoadingComplete]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => setIsLoading(false), 800);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.8,
                            ease: [0.6, -0.05, 0.01, 0.99]
                        }
                    }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
                >
                    <motion.div
                        animate={{
                            scale: isExiting ? [1, 0.9, 1.1, 0] : 1,
                            opacity: isExiting ? 0 : 1
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.6, -0.05, 0.01, 0.99]
                        }}
                        className="flex flex-col items-center justify-center w-full h-full"
                    >
                        <div className="bg-white rounded-2xl p-4 border-2 border-gray-200 flex flex-col items-center">
                            <motion.svg
                                width="80"
                                height="80"
                                viewBox="0 0 60 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={{
                                    rotate: isExiting ? [0, -10, 10, -360] : 0
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }}
                            >
                                <path
                                    d="M18.1666 9.51563C18.3783 7.24998 20.2395 5.54878 22.5065 5.54879V5.54879C22.8345 5.54879 23.1626 5.58497 23.4849 5.65669L23.6103 5.68458C26.4728 6.32152 28.4505 9.03044 28.1784 11.9418L25.596 39.5799C25.338 42.3409 22.8201 44.2465 20.0872 43.749L15.6214 42.9361C15.3131 42.88 15.0291 43.0949 15 43.4063V43.4063L18.1666 9.51563Z"
                                    fill="#5648F8"
                                />
                                <path
                                    d="M20 9.58726C20 7.35688 21.8081 5.5488 24.0385 5.5488H40.9615C43.1919 5.5488 45 7.35688 45 9.58726V9.58726C45 11.8176 43.1919 13.6257 40.9615 13.6257H24.0385C21.8081 13.6257 20 11.8176 20 9.58726V9.58726Z"
                                    fill="#5648F8"
                                />
                                <path
                                    d="M18 21.1257C18 18.8953 19.8081 17.0872 22.0385 17.0872H36.9615C39.1919 17.0872 41 18.8953 41 21.1257V21.1257C41 23.3561 39.1919 25.1642 36.9615 25.1642H22.0385C19.8081 25.1642 18 23.3561 18 21.1257V21.1257Z"
                                    fill="#5648F8"
                                />
                            </motion.svg>

                        </div>
                        <LoadingDots />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;