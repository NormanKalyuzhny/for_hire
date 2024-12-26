import React from 'react'
import './DimensionCube.css'

export const DimensionCube = () => {
  return (
    <div className="cubeBGcolor">
      <div className="bg-circle"></div>
      <div className='cube'>
        <div className="front side"></div>
        <div className="back side"></div>
        <div className="left side"></div>
        <div className="right side"></div>
        <div className="top side"></div>
        <div className="bottom side"></div>
      </div>
    </div>
  )
}
