import React from 'react'
import './ProfileCard.css'

export default function ProfileCard() {
  return (
    <div className="card">
        <div className="frame"></div>
        <img className='profile-image' src="https://placehold.jp/2c2e3f/ffffff/150x150.png" alt="profile image" />
        <div className="profile-info">
            <h2 className='profile-name'>Norman Kalyuzhny</h2>
            <ul className='profile-skills'>
                <li>JS Front End Developer</li>
            </ul>
            <p className='profile-note'>designed with css</p>
        </div>
        <div className="dark-stripes">
          <div className="stripes1"></div>
          <div className="stripes2"></div>
          <div className="stripes3"></div>
          <div className="stripes4"></div>
        </div>
    </div>
  )
}
