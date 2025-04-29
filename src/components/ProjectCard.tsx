type ProjectCardProps = {
    title: string;
    description: string;
    department: string;
  };
  
  export default function ProjectCard({ title, description, department }: ProjectCardProps) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
        <h2 className="text-xl font-semibold text-blue-700">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-4 text-sm text-gray-400">Department: {department}</p>
      </div>
    );
  }
  