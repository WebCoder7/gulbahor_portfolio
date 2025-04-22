import Container from '@/components/container';
import React from 'react';
import ProfileCard from '../components/ProfileCard';
import ProjectCards from './components/ProjectCards';

function ProjektsPge() {
  return (
    <Container>
      <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8'>
        <ProfileCard />
        <ProjectCards />
      </div>
    </Container>
  );
}

export default ProjektsPge;
