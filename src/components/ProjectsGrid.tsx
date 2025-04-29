import ProjectCard from './ProjectCard';
import { dummyProjects } from '../data/dummyProjects';

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {dummyProjects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
}