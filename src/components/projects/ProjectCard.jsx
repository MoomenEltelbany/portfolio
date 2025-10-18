import { Link } from "react-router-dom";

function ProjectCard({ project }) {
    const {
        title,
        description,
        technologies,
        githubUrl,
        liveUrl,
        image,
        published,
    } = project;

    return (
        <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            {image && (
                <div className="h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {published ? (
                    <div className="flex gap-3 mt-4">
                        {githubUrl && (
                            <Link
                                to={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-center py-2 px-4 rounded-md transition-colors duration-200 text-sm"
                            >
                                GitHub
                            </Link>
                        )}
                        {liveUrl && (
                            <Link
                                to={liveUrl}
                                target="_blank"
                                // rel="noopener noreferrer"
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-md transition-colors duration-200 text-sm"
                            >
                                Live Demo
                            </Link>
                        )}
                    </div>
                ) : (
                    <p className="text-slate-300 bg-slate-900 text-center py-2 px-4 rounded-xl">
                        In progress...
                    </p>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
