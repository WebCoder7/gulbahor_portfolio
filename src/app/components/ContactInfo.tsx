// ContactInfo.tsx
import { FaEnvelope, FaGithub, FaPhone, FaTelegram } from 'react-icons/fa';

const ContactInfo = () => {
  const contacts = [
    {
      icon: <FaEnvelope className='w-5 h-5 sm:w-6 sm:h-6' color='#fff' />,
      title: 'E-pochta',
      link: 'https://mail.ru',
      text: 'e-pochta@gmail.com',
    },
    {
      icon: <FaGithub className='w-5 h-5 sm:w-6 sm:h-6' color='#fff' />, 
      title: 'Github',
      link: 'https://github.com',
      text: 'github.com/gulbahorQodirova',
    },
    {
      icon: <FaTelegram className='w-5 h-5 sm:w-6 sm:h-6' color='#0088cc' />, 
      title: 'Telegram',
      link: 'https://t.me/qodirovagulbahor71',
      text: 't.me/qodirovagulbahor71',
    },
    {
      icon: <FaPhone className='w-5 h-5 sm:w-6 sm:h-6' color='#34D399' />, 
      title: 'Telefon raqam',
      link: 'tel:+998931120922',
      text: '+998 (93) 112 09 22',
    },
  ];

  return (
    <div className='mt-4 space-y-3 sm:space-y-4'>
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          className='flex items-center gap-3 sm:gap-4 bg-gray-800 p-2 sm:p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center'>
            {contact.icon}
          </div>
          <div className='flex-1 min-w-0'>
            <p className='text-white text-sm sm:text-base font-medium truncate'>{contact.title}</p>
            <p className='text-gray-400 text-xs sm:text-sm truncate'>{contact.text}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;