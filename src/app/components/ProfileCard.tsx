'use client';
import ContactInfo from './ContactInfo';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ProfileCard = () => {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shadow = useMotionTemplate`${mouseX}px ${mouseY}px 40px -10px rgba(244, 114, 182, 0.2)`;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className='relative w-full max-w-[95vw] mx-auto sm:max-w-[400px] md:w-[400px] flex-shrink-0 bg-gradient-to-br from-pink-50/95 to-fuchsia-50/95 p-4 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-lg sm:shadow-2xl shadow-fuchsia-100/50 border-2 border-white/20 overflow-hidden backdrop-blur-sm md:backdrop-blur-xl'
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
    >
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,#fff0f980_0%,transparent_60%)] animate-pulse-slow' />

      {isMounted && (
        <div className='absolute inset-0 animate-particle-float'>
          {[
            ...Array(
              typeof window !== 'undefined' && window.innerWidth < 640 ? 12 : 30
            ),
          ].map((_, i) => (
            <div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-fuchsia-400/50 to-pink-400/50 rounded-full blur-[1px]'
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `particle-float ${
                  6 + (i % 3)
                }s cubic-bezier(0.4,0,0.6,1) infinite both`,
                transform: `scale(${0.5 + Math.random()})`,
              }}
            />
          ))}
        </div>
      )}

      <div className='relative z-10'>
        <motion.div
          whileHover={{ rotate: 5, scale: 1.05 }}
          className='group relative w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 mx-auto mb-4 sm:mb-6 md:mb-8'
          style={{ boxShadow: shadow }}
        >
          <div className='absolute inset-0 bg-gradient-to-br from-fuchsia-400/30 to-pink-400/30 rounded-full blur-xl md:blur-2xl group-hover:blur-2xl md:group-hover:blur-3xl transition-all duration-300' />
          <div className='absolute inset-0 border-4 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity' />
          <Image
            src='/v1491734-1021232995.jpg'
            alt='Gulbahor Qodirova'
            width={200}
            height={200}
            className='w-full h-full object-cover rounded-full shadow-lg md:shadow-2xl transition-transform duration-300 group-hover:scale-105'
            priority
          />
        </motion.div>

        <motion.h2 className='text-xl xs:text-2xl sm:text-3xl md:text-3xl font-bold text-center mb-1 sm:mb-2 px-2'>
          Gulbahor Qodirova
        </motion.h2>

        <motion.p
          className='text-sm xs:text-base sm:text-lg md:text-lg text-center text-pink-700 font-medium mb-3 xs:mb-4 sm:mb-6 px-2'
          whileHover={{ y: -2 }}
        >
          <span className='inline-block bg-white/90 px-3 py-1 xs:px-4 xs:py-1.5 sm:px-4 sm:py-2 rounded-full border-2 border-pink-100/50 shadow-sm hover:shadow-md transition-all'>
            🌸 Rus tili fan ustasi
          </span>
        </motion.p>

        <div className='flex flex-wrap justify-center gap-2 xs:gap-3 mb-4 xs:mb-6 sm:mb-8 md:mb-10 px-2'>
          {['Dizayn', 'Taʼlim', 'Texnologiya', "Ko'nikmalar", 'Ijod'].map(
            (tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  background: 'linear-gradient(45deg, #fce7f3, #fbcfe8)',
                }}
                className='px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 bg-white/95 backdrop-blur-sm text-pink-700 text-[0.7rem] xs:text-xs sm:text-sm font-semibold rounded-full shadow-md sm:shadow-lg border-2 border-pink-100/50 transition-all cursor-pointer whitespace-nowrap'
              >
                #{tag}
              </motion.span>
            )
          )}
        </div>

        <ContactInfo />
      </div>

      <style jsx global>{`
        @keyframes particle-float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.8;
          }
          25% {
            transform: translate(-10px, -15px) rotate(-45deg);
            opacity: 1;
          }
          50% {
            transform: translate(10px, 5px) rotate(45deg);
            opacity: 0.6;
          }
          75% {
            transform: translate(-5px, 10px) rotate(-30deg);
            opacity: 1;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.1;
          }
        }

        @media (max-width: 767px) {
          .animate-particle-float {
            animation-duration: 25s;
          }

          .profile-card-overflow-fix {
            overflow: visible !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ProfileCard;
