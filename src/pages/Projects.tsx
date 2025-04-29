import { useState } from 'react';
import { dummyProjects } from '../data/dummyProjects';

interface ProjectOverlayProps {
  project: {
    title: string;
    description: string;
    department: string;
    details?: string;
    skills?: string[];
    courses?: { code: string; name: string }[];
  };
  onClose: () => void;
}

const ProjectOverlay = ({ project, onClose }: ProjectOverlayProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-[#262633]">{project.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-700 hover:text-black text-2xl cursor-pointer"
          >
            &times;
          </button>
        </div>
        <p className="text-sm text-[#4B4B6D] font-medium mb-4">{project.department}</p>
        <p className="mb-4 text-gray-800">{project.description}</p>
        <div className="border-t border-[#9999BB] pt-4">
          <h4 className="font-semibold mb-2 text-[#262633]">Project Details</h4>
          <p className="text-gray-800">
            {project.details || "This innovative project connects students with departmental needs, creating real-world experience while solving practical problems. Students will work in teams under faculty guidance to develop solutions that make a lasting impact on campus operations."}
          </p>
          
          {/* Skills section */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-[#262633]">Skills & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.skills && project.skills.length > 0 ? (
                project.skills.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-[#BBD0FF] text-[#262633] rounded-full text-xs">
                    {skill}
                  </span>
                ))
              ) : (
                <>
                  <span className="px-2 py-1 bg-[#BBD0FF] text-[#262633] rounded-full text-xs">Research</span>
                  <span className="px-2 py-1 bg-[#BBD0FF] text-[#262633] rounded-full text-xs">Data Analysis</span>
                  <span className="px-2 py-1 bg-[#BBD0FF] text-[#262633] rounded-full text-xs">Teamwork</span>
                  <span className="px-2 py-1 bg-[#BBD0FF] text-[#262633] rounded-full text-xs">Communication</span>
                </>
              )}
            </div>
          </div>
          
          {/* Related courses section - now displayed as tags */}
          {project.courses && project.courses.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-[#262633]">Related Courses</h4>
              <div className="flex flex-wrap gap-2">
                {project.courses.map((course, index) => (
                  <a 
                    key={index}
                    className="px-2 py-1 bg-[#E8E8FF] text-[#4B4B6D] rounded-full text-xs hover:bg-[#D0D0FF] transition-colors flex items-center gap-1"
                  >
                    <span className="font-bold">{course.code}</span>
                    <span className="hidden sm:inline">• {course.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof dummyProjects[0] | null>(null);

  const openProjectDetails = (project: typeof dummyProjects[0]) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="p-8 bg-white py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 ">Explore Our Projects</h2>
        <p className="text-center mb-10">Click on any project to learn more about the opportunities available</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyProjects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => openProjectDetails(project)}
              className="bg-[#F8F8FF] rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="h-3 bg-[#5D5D7A]"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#262633]">{project.title}</h3>
                <p className="text-sm text-[#4B4B6D] font-medium mb-4">{project.department}</p>
                <p className="text-gray-700 line-clamp-3">{project.description}</p>
                
                {/* Technology preview */}
                <div className="mt-3 mb-2 flex flex-wrap gap-1">
                  {project.skills && project.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-1.5 py-0.5 bg-[#BBD0FF] text-[#262633] rounded text-xs">
                      {skill}
                    </span>
                  ))}
                  {project.skills && project.skills.length > 3 && (
                    <span className="px-1.5 py-0.5 bg-[#E8E8FF] text-[#5D5D7A] rounded text-xs">
                      +{project.skills.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Course preview as tags */}
                {project.courses && project.courses.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.courses.slice(0, 2).map((course, courseIndex) => (
                      <span key={courseIndex} className="px-1.5 py-0.5 bg-[#E8E8FF] text-[#4B4B6D] rounded text-xs">
                        {course.code}
                      </span>
                    ))}
                    {project.courses.length > 2 && (
                      <span className="px-1.5 py-0.5 bg-[#E8E8FF] text-[#5D5D7A] rounded text-xs">
                        +{project.courses.length - 2} more
                      </span>
                    )}
                  </div>
                )}
                
                <div className="mt-4 text-[#4B4B6D] font-semibold text-sm">
                  Click to learn more →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectOverlay project={selectedProject} onClose={closeProjectDetails} />
      )}
    </section>
  );
}