import projects from "@/data/projects.json";

{/* 
    This part of the project will be helpful for future features!!!! 
    Use JSON as data holder -> can write to the data to change it dynamically on the website. Essentially a simple API
    */}
    
const ProjectCards = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 justify-center">
            {/* pulls project.json objects and sorts as an array  */}
            {projects.map((project) => (
                <div key={project.id} className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-sm">
                <figure className="w-full h-48">
                    <img className="w-full h-full object-cover rounded-box" src={project.image} alt={project.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {project.title}
                    {project.tag && project.tag !== null && (
                        <div className="badge badge-secondary">
                                    {project.tag}
                                </div>
                    )}
                    </h2>
                    <p>{project.description}</p>
                    <div className="card-actions justify-end">
                    {project.badges.map((badge, badgeIndex) => (
                        <div key={badgeIndex} className="badge badge-outline">{badge}</div>
                    ))}
                    </div>
                </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCards;