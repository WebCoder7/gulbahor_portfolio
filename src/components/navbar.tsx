'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { GiDiamondTrophy } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './container';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { path: '/', label: 'Bosh Sahifa' },
    { path: '/about', label: 'Haqida' },
    { path: '/projects', label: 'Loyihalar' },
    { path: '/contact', label: "Bog'lanish" },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const handleNavigation = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <header className='fixed top-0 w-full z-50 shadow-lg border-b border-opacity-10 border-rose-300 bg-white backdrop-blur-md'>
      <nav className='relative'>
        <Container>
          <div className='flex justify-between items-center h-16 sm:h-20'>
            <div className='flex items-center gap-2 sm:gap-4'>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className='md:hidden p-2 sm:p-3 text-rose-600 hover:bg-rose-50 rounded-full transition-all'
              >
                {menuOpen ? (
                  <FiX className='text-xl sm:text-2xl' />
                ) : (
                  <FiMenu className='text-xl sm:text-2xl' />
                )}
              </button>
              <Link href='/' className='flex items-center gap-1 sm:gap-2 group'>
                <GiDiamondTrophy className='text-rose-600 text-2xl sm:text-3xl' />
                <span className='font-cormorant text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-wide'>
                  Gulbahor <span className='text-rose-500'>Qodirova</span>
                </span>
              </Link>
            </div>

            <div className='hidden md:flex items-center gap-6 lg:gap-10'>
              <ul className='flex gap-5 lg:gap-8 xl:gap-10'>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className='relative text-base lg:text-lg font-medium text-gray-700 hover:text-rose-600 transition-colors
                      before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] 
                      before:bg-rose-500 before:transition-all before:duration-300 hover:before:w-full'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className='h-6 lg:h-8 w-0.5 bg-rose-100 mx-2 lg:mx-4' />

              <a
                href='https://t.me/qodirovagulbahor71'
                target='_blank'
                className='relative p-2 lg:p-3 bg-rose-100 hover:bg-rose-200 text-rose-600 rounded-full 
                transition-all duration-300 group/btn'
              >
                <FaTelegramPlane className='text-lg lg:text-xl' />
                <span
                  className='absolute -right-2 -top-2 bg-rose-500 text-white px-2 py-1 rounded-full 
                  text-xs scale-0 group-hover/btn:scale-100 transition-transform hidden lg:inline-block'
                >
                  Yozish
                </span>
              </a>
            </div>
          </div>

          {/* Mobil menyu */}
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden'
                  onClick={() => setMenuOpen(false)}
                />

                <motion.div
                  initial={{ y: '-100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className='fixed top-16 sm:top-20 left-0 w-full bg-white shadow-xl md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto'
                >
                  <div className='p-4 sm:p-6'>
                    <ul className='flex flex-col gap-1 sm:gap-2'>
                      {navLinks.map((link, index) => (
                        <motion.li
                          key={index}
                          variants={mobileMenuVariants}
                          initial='hidden'
                          animate='visible'
                          exit='exit'
                          transition={{ delay: index * 0.1 }}
                        >
                          <button
                            onClick={() => handleNavigation(link.path)}
                            className='w-full text-left p-3 sm:p-4 text-base sm:text-lg font-medium text-gray-700 
                            hover:bg-rose-50 rounded-xl transition-all flex items-center justify-between'
                          >
                            {link.label}
                            <FiChevronRight className='text-rose-400 text-lg' />
                          </button>
                        </motion.li>
                      ))}
                      <li className='mt-3 sm:mt-4'>
                        <a
                          href='https://t.me/qodirovagulbahor71'
                          className='flex items-center justify-center gap-2 p-3 sm:p-4 bg-rose-500 text-white 
                          rounded-xl hover:bg-rose-600 transition-colors text-sm sm:text-base'
                        >
                          <FaTelegramPlane className='text-lg sm:text-xl' />
                          <span className='font-semibold'>
                            Telegramda Suhbat
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </Container>
      </nav>
    </header>
  );
}
