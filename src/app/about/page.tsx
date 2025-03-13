import Container from '@/components/container';
import React from 'react';
import ProfileCard from '../components/ProfileCard';
import AboutPageMe from './components/AboutPageMe';

function AboutPage() {
  return (
    <Container>
      <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8'>
        <ProfileCard />
        <AboutPageMe />
      </div>
    </Container>
  );
}

export default AboutPage;
