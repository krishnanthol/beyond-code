import connectImage from "../assets/SDI productions E+ Getty Images 2.webp";

export default function AboutSection() {
  return (
    <section className="p-20 mx-auto max-w-6xl">
      <h2 className="text-3xl font-semibold mb-4 ml-5">About BeyondCode</h2>
      <div className="flex items-start justify-between px-5">
        <div className="flex-1 mr-8">
          <p className="text-gray-700 mb-4">
            BeyondCode addresses the skill gaps overlooked by campus career development programs by connecting students with paid or unpaid internships within non-technical departments.
          </p>
          <p className="text-gray-700 mb-4">
            By bridging the gap, BeyondCode fosters equitable opportunities for students and enhances the technological capabilities of non-technical departments across campus.
          </p>
        </div>
        <div>
          <img
            src={connectImage}
            alt="About BeyondCode"
            className="object-cover rounded-lg w-[450px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
