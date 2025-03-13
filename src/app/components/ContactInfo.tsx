'use client';
import { FaEnvelope, FaGithub, FaPhone, FaTelegram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaHandSparkles } from 'react-icons/fa6';
import { useState } from 'react'; 

const ContactInfo = () => {
  const [showCopied, setShowCopied] = useState(false); 

  const contacts = [
    {
      icon: <FaEnvelope className='w-6 h-6' />,
      title: 'Elektron pochta',
      link: 'mailto:gulbahor@example.com',
      text: 'gulbahor@example.com',
      color: 'bg-gradient-to-br from-fuchsia-500 to-pink-500',
      sparkle: 'text-fuchsia-400',
    },
    {
      icon: <FaGithub className='w-6 h-6' />,
      title: 'GitHub profil',
      link: 'https://github.com',
      text: '@gulbahorQodirova',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-500',
      sparkle: 'text-purple-400',
    },
    {
      icon: <FaTelegram className='w-6 h-6' />,
      title: 'Telegram',
      link: 'https://t.me/qodirovagulbahor71',
      text: '@qodirovagulbahor71',
      color: 'bg-gradient-to-br from-sky-500 to-cyan-500',
      sparkle: 'text-sky-400',
    },
    {
      icon: <FaPhone className='w-6 h-6' />,
      title: 'Telefon raqam',
      link: 'tel:+998931120922',
      text: '+998 93 112 09 22',
      color: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      sparkle: 'text-emerald-400',
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
          e.preventDefault();
          navigator.clipboard.writeText('+998931120922');
          setShowCopied(true);
          setTimeout(() => setShowCopied(false), 2000);
        }
      },
    },
  ];

  return (
    <div className='space-y-5 relative z-20'>
      {showCopied && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className='fixed bottom-4 right-4 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg shadow-lg font-medium'
        >
          📱 Raqam nusxalandi!
        </motion.div>
      )}

      {contacts.map((contact, index) => (
        <motion.a
          key={index}
          href={contact.link}
          onClick={contact.onClick} 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='group relative flex items-center gap-4 p-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-white/50'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl' />
          <div className={`${contact.color} p-3 rounded-xl shadow-lg z-10`}>
            {contact.icon}
          </div>
          <div className='flex-1 z-10'>
            <p className='text-lg font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent'>
              {contact.title}
            </p>
            <p className='text-sm text-gray-600 font-medium'>{contact.text}</p>
          </div>
          <FaHandSparkles
            className={`absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 ${contact.sparkle} transition-opacity duration-300`}
          />
        </motion.a>
      ))}
    </div>
  );
};

export default ContactInfo;
