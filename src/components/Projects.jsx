
import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
  const projects = [
    {
      title: 'My Portfolio',
      description: 'My personal portfolio built with React.',
      technologies: ['React', 'CSS', 'JavaScript'],
      image: '/images/kk2.jpg',
      link: 'https://kaido-1.vercel.app/#kaido-ads'
    },
    {
      title: 'CyberGuard',
      description: 'A URL security analyzer project.',
      technologies: ['Python', 'Flask', 'HTML', 'CSS'],
      image: '/images/kk3.jpg',
      link: 'https://kaido-1.vercel.app/#kaido-ads'
    },
    {
      title: 'Cybersecurity Awareness',
      description: ' حطيت فقط روابط تجريبية مو نفس العنوان المكتوب.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/kk.png',
      link: 'https://kaido-1.vercel.app/#kaido-ads'
    }
  ]

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
