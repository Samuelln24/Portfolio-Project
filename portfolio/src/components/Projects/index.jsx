import Project from "../Project"

export default function Projects({projects}) {
    return <section id="projects">
    <h1>Mes Projets</h1>
    <div className="projects">
        {projects.map((project) => {
            return <Project key={project} project={project} />
        })}
    </div>
</section>
}