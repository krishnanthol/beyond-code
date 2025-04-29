import volunteer from "../assets/volunteer.png";
import faculty from "../assets/faculty.png";
import student from "../assets/student.png";

export default function GetInvolvedSection() {
  return (
    <section className="p-15">
      <h2 className="text-center text-3xl font-semibold mb-4 ml-5">Get Involved</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
        <div className="p-4">
          <img src={student} alt="Students Icon" className="mx-auto mb-4 w-16 h-16" />
          <h3 className="text-center text-xl font-semibold mb-2">Students</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Students apply to work on technical projects in non-technical departments.</li>
            <li>They gain real-world experience, build confidence, and unlock new career paths.</li>
            <li>Each project allows for hands-on work either independently or in small teams.</li>
          </ul>
        </div>
        <div className="p-4">
          <img src={volunteer} alt="Volunteers Icon" className="mx-auto mb-4 w-16 h-16" />
          <h3 className="text-center text-xl font-semibold mb-2">Committee Members</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>CS students and department reps evaluate proposals and select interns.</li>
            <li>They serve as the bridge between departments and technical talent.</li>
            <li>They manage logistics, planning, outreach, and student support.</li>
          </ul>
        </div>
        <div className="p-4">
          <img src={faculty} alt="Faculty Icon" className="mx-auto mb-4 w-16 h-16" />
          <h3 className="text-center text-xl font-semibold mb-2">Faculty</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>The Technical Faculty Advisor ensures feasibility and academic alignment.</li>
            <li>Faculty help identify relevant projects within their departments.</li>
            <li>They may also promote approved projects to students in their courses.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
