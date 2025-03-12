import Container from '@/components/container';
import React from 'react';
import ProfileCard from '../components/ProfileCard';

function AboutPage() {
  return (
    <Container>
      <h1 className='font-bold text-4xl'>AboutPage</h1>
      <ProfileCard />
    </Container>
  );
}

export default AboutPage;
