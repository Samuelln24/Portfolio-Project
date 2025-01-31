import Project from "../Project";

export default function Projects({
    projects,
    setCurrentPage,
    setSelectedProjectId,
}) {
    return (
        <section id="projects">
            <h1>Mes Projets</h1>
            <div className="projects">
                {projects.map((project) => {
                    return (
                        <Project
                            key={project}
                            project={project}
                            setCurrentPage={setCurrentPage}
                            setSelectedProjectId={setSelectedProjectId}
                        />
                    );
                })}
            </div>
        </section>
    );
}