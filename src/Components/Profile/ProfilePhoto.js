import React from 'react'
// importing Profile picture
import Profilepic from './Profilepic.jpg';

const ProfilePhoto = () => {
  return (
    <div>
      <img src={Profilepic}  alt="Profilepic" width='20%' />
    </div>
  )
}

export default ProfilePhoto
