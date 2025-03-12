// ProfileCard.tsx
import ContactInfo from './ContactInfo';

const ProfileCard = () => {
  return (
    <div className='w-full md:w-[300px] flex-shrink-0 bg-[#1e1e1e] p-4 sm:p-6 rounded-xl text-white'>
      <img
        src='./'
        alt='img'
        className='w-full h-[260PX] max-w-[260px] mx-auto border-2 rounded-xl mb-3 sm:mb-4'
      />
      <h2 className='text-lg sm:text-xl font-semibold text-center md:text-left'>
        Gulbahor Qodirova
      </h2>
      <p className='text-xs sm:text-sm text-gray-400 text-center md:text-left'>
        Rus tili fan ustozi
      </p>
      <div className='flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3 justify-center md:justify-start'>
        {['Junior', 'NI bot', 'Odam', 'Dizayner', "O'qituvchi"].map(
          (tag, i) => (
            <span
              key={i}
              className='bg-gray-700 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg text-[10px] sm:text-xs'
            >
              {tag}
            </span>
          )
        )}
      </div>
      <div className='mt-3 sm:mt-4'>
        <ContactInfo />
      </div>
    </div>
  );
};

export default ProfileCard;
