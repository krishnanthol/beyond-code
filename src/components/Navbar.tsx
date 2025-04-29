export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-[#262633] to-[#727299] text-white py-4 px-8 shadow-lg w-full">
      <div className="flex justify-between items-center w-full">
        <a href="/" className="text-2xl font-bold">🗺️ Beyond Code</a>
        <div className="space-x-6">
          <a href="/" className="hover:underline">🏠 Home</a>
          <a href="/projects" className="hover:underline"> 📑 Projects</a>
        </div>
      </div>
    </nav>
  );
}