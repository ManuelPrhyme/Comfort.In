import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  centerText?: boolean;
  backgroundColor?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  title,
  subtitle,
  centerText = false,
  backgroundColor = 'bg-white',
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 ${backgroundColor} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <div className={`mb-12 ${centerText ? 'text-center' : ''}`}>
            {title && (
              <motion.h2 
                className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;