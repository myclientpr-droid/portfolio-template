'use client';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function AnimatedSection({ children, className = '' }) {
  return (
    <motion.section
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.section>
  );
}