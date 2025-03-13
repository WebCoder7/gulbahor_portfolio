'use client';
import { motion } from 'framer-motion';
import { FaMagic } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <div className='relative flex-1 flex items-center justify-center bg-gradient-to-br from-pink-100 to-fuchsia-100 p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl md:rounded-2xl xl:rounded-[2rem] shadow-lg md:shadow-2xl overflow-hidden'>
      <div className='absolute inset-0 animate-gradient-rotate bg-[conic-gradient(from_90deg_at_50%_50%,#f472b6_0%,#f9a8d4_50%,#f472b6_100%)] opacity-10' />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='relative z-10 text-center max-w-4xl space-y-4 md:space-y-6 lg:space-y-8'
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className='inline-flex items-center gap-2 sm:gap-3 bg-white/90 px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full border-2 border-pink-100 shadow-md md:shadow-lg'
        >
          <FaMagic className='text-fuchsia-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 animate-spin-slow' />
          <span className='text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent'>
            Yangi loyihalar yutuqlari
          </span>
        </motion.div>

        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug sm:leading-tight'>
          <span className='bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent'>
            Salom, Men Gulbahor
          </span>
        </h1>

        <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-pink-800/90 leading-relaxed max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto font-medium'>
          Veb-dizayn va taʼlim sohasida{' '}
          <span className='text-fuchsia-600 font-bold'>10+ yillik tajriba</span>
          bilan yorqin va innovatsion yechimlar yaratishga ixtisoslashganman.
          Har bir loyihamda
          <span className='text-pink-600'> gozallik</span> va
          <span className='text-fuchsia-600'>funktsionallik</span> uygunligini
          taminlayman.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='group inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl md:shadow-xl md:hover:shadow-2xl transition-all font-semibold text-sm sm:text-base md:text-lg lg:text-xl'
        >
          <span>Loyihalarimni Korish</span>
          <svg
            className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 animate-bounce group-hover:animate-spin'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 5l7 7-7 7M5 5l7 7-7 7'
            />
          </svg>
        </motion.button>

        <div className='absolute -top-10 -right-10 sm:-top-16 sm:-right-16 md:-top-20 md:-right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-fuchsia-200/30 rounded-full blur-xl md:blur-2xl' />
        <div className='absolute -bottom-10 -left-10 sm:-bottom-16 sm:-left-16 md:-bottom-20 md:-left-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-pink-200/30 rounded-full blur-xl md:blur-2xl' />
      </motion.div>
    </div>
  );
}
