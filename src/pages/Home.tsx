import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GetInvolvedSection from '../components/GetInvolvedSection';
import BudgetSection from '../components/BudgetSection';
import RolesSection from '../components/RolesSection';
import Navbar from '../components/Navbar';
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