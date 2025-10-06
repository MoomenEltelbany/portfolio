import hotelImage from "../assets/images/wild-oasis.jpg";
import worldWiseImage from "../assets/images/world-wise.png";
import pizzaImage from "../assets/images/pizza-app.png";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "The Wild Oasis",
            image: hotelImage,
            description:
                "A full-stack web application built with React and Supabase",
            technologies: [
                "React",
                "Supabase",
                "Styled Component",
                "React Router",
                "React Query",
            ],
            githubUrl: "https://github.com/MoomenEltelbany/the-wild-oasis",
            liveUrl: "#",
        },
        {
            id: 2,
            title: "Fast React Pizza",
            image: pizzaImage,
            description: "A website for ordering delicious pizza",
            technologies: ["React", "RTK", "Rect Router", "Tailwind CSS"],
            githubUrl: "https://github.com/MoomenEltelbany/fast-react-pizza",
            liveUrl: "https://github.com/MoomenEltelbany/fast-react-pizza",
        },
        {
            id: 3,
            image: worldWiseImage,
            title: "World Wise",
            description:
                "A modern web application to keep track of all amazing places you visited",
            technologies: ["React", "React Router", "CSS Modules"],
            githubUrl: "https://github.com/MoomenEltelbany/world-wise",
            liveUrl: "#",
        },
    ];

    return (
        <main className="flex-grow px-4 py-8 sm:px-6 md:px-10 bg-slate-900 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 sm:gap-5 min-h-screen content-start">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </main>
    );
};

export default Projects;
