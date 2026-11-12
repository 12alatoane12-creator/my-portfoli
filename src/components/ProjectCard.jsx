
function ProjectCard({
  title,
  description,
  technologies = [],
  image,
  link
}) {
  return (
    <div className="project-card">

      {image && (
        <img
          src={image}
          alt={title}
          className="project-image"
        />
      )}

      <h3>{title}</h3>

      <p>{description}</p>

      <p className="project-tech">
        {technologies.join(' • ')}
      </p>

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      ) : (
        <p>Demo coming soon</p>
      )}

    </div>
  )
}

export default ProjectCard
