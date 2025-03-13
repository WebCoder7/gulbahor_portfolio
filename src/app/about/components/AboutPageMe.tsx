'use client';

export default function AboutPageMe() {
  return (
    <div className='relative flex-1 bg-gradient-to-br from-pink-100 to-fuchsia-100 p-6 sm:p-8 md:p-12 lg:p-8 rounded-2xl xl:rounded-[2rem] shadow-xl lg:shadow-2xl overflow-hidden'>
      {/* Background effects */}
      <div className='absolute inset-0 bg-fuchsia-200/10 backdrop-blur-lg' />
      <div className='absolute -top-20 -right-20 w-48 h-48 bg-fuchsia-200/30 rounded-full blur-2xl' />
      <div className='absolute -bottom-20 -left-20 w-48 h-48 bg-pink-200/30 rounded-full blur-2xl' />

      {/* Content container */}
      <div className='relative z-10 flex flex-col gap-6 text-gray-700'>
        <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent'>
          Men haqimda
        </h1>

        <div className='space-y-4 max-w-3xl'>
          <p className='text-lg md:text-xl leading-relaxed'>
            👋 Salom! Men Gulbahor Qodirova - veb-dasturlash bo'yicha
            mutaxassis. Frontend texnologiyalarga qiziqaman va yangi loyihalar
            yaratishni yaxshi ko'raman.
          </p>

          <p className='text-lg md:text-xl leading-relaxed'>
            💻 Asosiy texnologiyalarim: React, Next.js, TypeScript, Tailwind
            CSS. Loyihalarimda modern UI/UX dizayn tamoyillariga amal qilishga
            harakat qilaman.
          </p>
        </div>
      </div>
    </div>
  );
}
