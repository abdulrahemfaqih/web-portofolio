// src/components/common/AnimatedSection.jsx
import { motion } from 'framer-motion';
import { sectionVariants } from '../../config/animations';

export const AnimatedSection = ({ children }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        style={{ willChange: 'opacity, transform' }}
    >
        {children}
    </motion.div>
);