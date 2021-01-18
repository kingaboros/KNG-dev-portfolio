import React from "react"
import Title from "./Title"
import skills from "../constants/skills"
import services from "../constants/services"
const Skills = () => {
  return (
    <section className="section bg-grey">
      <Title title="skills" />
      <div className="section-center services-center">
        {skills.map(skills => {
          const { id, icon, title } = skills
          return (
            <article key={id} className="service">
              <div className="underline"></div>
              <h4>{title}</h4>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
