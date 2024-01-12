import React from 'react'
import profilePic from '../images/profile.jpg'
import skills from '../data/mySkill.json'

const ProfileCard = () => {
  return (
    <section 
      style={{
        display: 'flex',
        flexFlow: "column",
        alignItems: "center"
      }}
    >
      <div 
      className='profile-img'
      style={{
        backgroundImage: `url(${profilePic})`
      }}
      />
      <h1>Jonnathan Edbert Halim</h1>
      <h4>Senior Developer, Indonesia</h4>

      <div>
        <h1>SKILLS</h1>
        {skills.skill_list.map((par) => {
        return (
          <span className='skill-tag'>{par}</span>
        )
        })}
      </div>
    </section>
  )
}

export default ProfileCard