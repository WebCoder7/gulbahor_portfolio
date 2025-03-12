import React from 'react';

export default function AboutMe() {
  return (
    <div className='flex-1 flex items-center justify-center min-h-[50vh] md:min-h-[60vh] bg-[#121212] p-4 sm:p-6 lg:p-8 rounded-xl text-white'>
      <div className='text-center max-w-2xl lg:max-w-3xl'>
        <h1 className='mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300'>
          Assalomu alaykum, Men
          <span className='text-green-700'> Qodirova Gulbahor</span>man
        </h1>
        <p className='mt-3 sm:mt-4 text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed'>
          Veb dasturchi va dizayner sifatida natijaga yo&apos;naltirilgan
          ishchi. Veb-saytlar va veb-ilovalarni yaratish va boshqarish orqali
          umumiy mahsulot muvaffaqiyatiga erishish maqsadimdir.
        </p>
        <button className=' mt-4 group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300 duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-12 sm:h-14 md:h-16 w-48 sm:w-56 md:w-64 border text-left p-2 sm:p-3 text-gray-50 text-sm sm:text-base font-bold rounded-lg overflow-hidden before:absolute before:w-8 sm:before:w-10 md:before:w-12 before:h-8 sm:before:h-10 md:before:h-12 before:right-0.5 sm:before:right-1 before:top-0.5 sm:before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-16 sm:after:w-18 md:after:w-20 after:h-16 sm:after:h-18 md:after:h-20 after:right-4 sm:after:right-6 md:after:right-8 after:top-2 sm:after:top-3 after:bg-cyan-600 after:rounded-full after:blur'>
          Loyihalar
        </button>
      </div>
    </div>
  );
}
