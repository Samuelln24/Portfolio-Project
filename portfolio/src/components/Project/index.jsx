export default function Project(props) {
    const {project} = props
    return <article>
        <img src={project.image} alt={project.name} className="project-image" />
        <h2>{project.name}</h2>
        <p>{project.description}</p>
    </article>
}