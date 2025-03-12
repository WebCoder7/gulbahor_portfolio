// AboutMe.tsx
'use client';
import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { FaMagic, FaRegStar } from 'react-icons/fa';

export default function AboutMe() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1], [-15, 15]);
  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(244,114,182,0.15), transparent 80%)`;
  return (
    <div 
      className="relative flex-1 flex items-center justify-center min-h-[70vh] overflow-hidden"
      onMouseMove={(e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - left) / width);
        mouseY.set((e.clientY - top) / height);
      }}
    >
      {/* Animated background */}
      <div className='absolute inset-0  animate-gradient-rotate bg-[conic-gradient(from_90deg_at_50%_50%,#f472b6_0%,#f9a8d4_50%,#f472b6_100%)] opacity-10' />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='relative z-10 text-center max-w-4xl space-y-8'
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className='inline-flex items-center gap-3 bg-white/90 px-8 py-3 rounded-full border-2 border-pink-100 shadow-lg'
        >
          <FaMagic className='text-fuchsia-600 animate-spin-slow' />
          <span className='text-lg font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent'>
            Yangi loyihalar yutuqlari
          </span>
        </motion.div>

        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
          <span className='bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent'>
            Salom, Men Gulbahor
          </span>
        </h1>

        <p className='text-xl sm:text-2xl text-pink-800/90 leading-relaxed max-w-3xl mx-auto font-medium'>
          Veb-dizayn va taʼlim sohasida{' '}
          <span className='text-fuchsia-600 font-bold'>10+ yillik tajriba</span>{' '}
          bilan yorqin va innovatsion yechimlar yaratishga ixtisoslashganman.
          Har bir loyihamda
          <span className='text-pink-600'> goʻzallik</span> va{' '}
          <span className='text-fuchsia-600'>funktsionallik</span> uygʻunligini
          ta'minlayman.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all font-bold text-xl'
        >
          <span>Loyihalarimni Ko'rish</span>
          <svg
            className='w-6 h-6 animate-bounce group-hover:animate-spin'
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

        {/* Floating elements */}
        <div className='absolute -top-20 -right-20 w-72 h-72 bg-fuchsia-200/30 rounded-full blur-3xl' />
        <div className='absolute -bottom-20 -left-20 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl' />
      </motion.div>
    </div>
  );
}
