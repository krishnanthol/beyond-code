import networkImage from '../assets/network-md.png';

export default function HeroSection() {
    return (
      <section className="text-center p-16 bg-[#F1F1F1]">
        <img 
          src={networkImage} 
          alt="Network illustration" 
          className="mx-auto mb-15 animate-pulse" 
        />
        <h2 className="text-4xl font-bold mb-6">Empowering Students. Enabling Departments.</h2>
        <p className="text-gray-600 max-w-2xl text-md mx-auto">BeyondCode connects technical students with non-technical departments to drive innovation and career growth at the University of Maryland.</p>
      </section>
    );
}
