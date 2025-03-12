// ProfileCard.tsx
'use client';
import ContactInfo from './ContactInfo';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ProfileCard = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className='relative w-full md:w-[400px] flex-shrink-0 bg-gradient-to-br from-pink-50 to-fuchsia-50 p-8 rounded-[2rem] shadow-2xl shadow-fuchsia-100/50 border-2 border-white/20 overflow-hidden'
    >
      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,#fff0f980_0%,transparent_60%)]' />

      {/* Floating particles - faqat client tomonda */}
      {isMounted && (
        <div
          className='absolute inset-0 animate-float'
          suppressHydrationWarning
        >
          {[...Array(20)].map((_, i) => {
            const randomTop = Math.random() * 100;
            const randomLeft = Math.random() * 100;
            return (
              <div
                key={i}
                className='absolute w-1 h-1 bg-fuchsia-300/50 rounded-full'
                style={{
                  top: `${randomTop}%`,
                  left: `${randomLeft}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            );
          })}
        </div>
      )}

      <div className='relative z-10'>
        <motion.div
          whileHover={{ rotate: 5, scale: 1.05 }}
          className='group relative w-56 h-56 mx-auto mb-8'
        >
          <div className='absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-pink-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity' />
          <img
            src='/'
            alt=''
            className='w-full h-full object-cover rounded-full border-4 border-white/80 shadow-2xl transition-transform duration-300'
          />
        </motion.div>

        <h2 className='text-3xl font-bold text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-2'>
          Gulbahor Qodirova
        </h2>
        <p className='text-lg text-center text-pink-700 font-medium mb-6'>
          <span className='bg-white/80 px-4 py-2 rounded-full border-2 border-pink-100 shadow-sm'>
            🌸 Rus tili fan ustasi
          </span>
        </p>

        <div className='flex flex-wrap justify-center gap-3 mb-10'>
          {['Dizayn', 'Taʼlim', 'Texnologiya', "Ko'nikmalar", 'Ijod'].map(
            (tag, i) => (
              <motion.span
                key={i}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                  transition: {
                    type: 'spring',
                    stiffness: 200,
                    damping: 10,
                  },
                }}
                className='px-4 py-2 bg-white/90 backdrop-blur-sm text-pink-700 text-sm font-semibold rounded-full shadow-lg border-2 border-pink-100/50 hover:border-pink-300 transition-colors duration-200'
              >
                #{tag}
              </motion.span>
            )
          )}
        </div>

        <ContactInfo />
      </div>
    </motion.div>
  );
};

export default ProfileCard;
