import React from 'react'
import myskill from '../data/skills.json'

const Skill = () => {
  return (
    <section className="container" id="skill">
      {myskill['my-skills'].map((par) => {
        return(
          <span className='skill-tag'>{par}</span>
        )
      })}
    </section>
  )
}

export default Skill