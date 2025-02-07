// src/config/animations.js
export const pageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], staggerChildren: 0.1 }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

export const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], staggerChildren: 0.2 }
    }
};