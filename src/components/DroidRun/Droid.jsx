import React from 'react'
import droidHead from '../../assets/img/droidHead.png'
import drodiBody  from '../../assets/img/droidBody.png'
import drodiBodyShadow  from '../../assets/img/droidBodyShadow.png'
import './Droid.css'
export default function Droid() {

  return (
    <div className='droid-block'>
      <div className='droid-head'>
        <img src={droidHead} id='droidHead'/>
      </div>
      <div className="droid-body">
        <img src={drodiBody} id='droidBody'/>
      </div>
      <div className="droidBody-shadow">
        <img src={drodiBodyShadow} id='droidBodyShadow'/>
      </div>
    </div>
  )
}
