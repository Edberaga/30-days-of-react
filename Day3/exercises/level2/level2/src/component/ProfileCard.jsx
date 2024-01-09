import React from 'react'
import profilePic from '../images/profile.jpg'
import skillData from '../data/mySkill.json'

const ProfileCard = () => {
  return (
    <section>
        <div>
            <img src={profilePic} alt='profile-picture'/>
        </div>
        <h1>Jonnathan Edbert Halim</h1>
        <h4>Senior Developer, Indonesia</h4>

        <div>
            <h1>SKILLS</h1>
            {skillData.map((par) => {
                <span>{par}</span>
            })}
        </div>
    </section>
  )
}

export default ProfileCard