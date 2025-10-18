import ProjectCard from "../components/projects/ProjectCard";

import { projects } from "../constants/projectsData";

const Projects = () => {
    return (
        <main className="flex-grow px-4 py-8 sm:px-6 md:px-10 bg-slate-900 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 sm:gap-5 min-h-screen content-start overflow-auto">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </main>
    );
};

export default Projects;
