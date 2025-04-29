import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GetInvolvedSection from '../components/GetInvolvedSection';
import RolesSection from '../components/RolesSection';
import TimelineSection from '../components/TimelineSection'; // Import the new component

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <GetInvolvedSection />
      <RolesSection />
      
    </>
  );
}