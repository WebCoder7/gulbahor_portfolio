// MainPage.tsx
import ProfileCard from './components/ProfileCard';
import AboutMe from './components/AboutMe';
import Container from '@/components/container';

export default function MainPage() {
  return (
    <Container>
      <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 shadow-lg'>
        <ProfileCard />
        <AboutMe />
      </div>
    </Container>
  );
}
