'use client';

import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

export const transitionSpring = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

export const transitionSmooth = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: custom * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  y = 25,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export { motion };
