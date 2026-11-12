import './Skills.css'

function Skills() {
    const skills = [
  {
    name: "HTML",
    description: "Building web page structure"
  },
  {
    name: "CSS",
    description: "Designing beautiful websites"
  },
  {
    name: "JavaScript",
    description: "Adding interactive features "
  },
  {
    name: "React",
    description: "Building modern user interfaces"
  }
]
  return (
    <section className="skills" id="skills">

      <h2>My Skills</h2>
      <h2>  طبعا سويت ملف اسمة-Skills.jsx</h2>
      <h2> وانوب Skills.css</h2>
      <h2> ولعبت نفسي كل شوية مسوي ملف jsx وارجع اسوي css  بس هذن المهم الجوة هنة السكلز مالاتي </h2>

      
<div className="skills-list">
  {skills.map((skill) => (
    <div className="skill-card" key={skill.name}>
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
    </div>
  ))}
</div>

    </section>
  )
}

export default Skills