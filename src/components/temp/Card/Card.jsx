import React, { useState, useEffect } from 'react'
import './Card.css'

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [inputIntValue, setInputIntValue] = useState(0)
  const [rndValue, setRndValue] = useState(0);
  const [flipCounter, setFlipCounter] = useState(0)
  const [criticalFailure, setCriticalFailure] = useState(0)
  const [criticalSuccess, setCriticalSuccess] = useState(0)
  const minValue = 1;
  const maxValue = inputIntValue || 20;

    useEffect(()=>{
      const sanitizedValue = inputValue.replace(/[^0-9]/g, '');
      setInputValue(sanitizedValue);
      setInputIntValue(sanitizedValue ? parseInt(sanitizedValue) : 0);
    },[inputValue])
  
    useEffect(()=>{
      isFlipped ? handleRngValueGen(maxValue):null;
    },[isFlipped])
    
    function handleRngValueGen(max) {
      const randomValue = Math.floor(Math.random() * (max - minValue + 1) + minValue);
      setRndValue(randomValue);
      setFlipCounter(flipCounter + 1)
      randomValue === 1 ? setCriticalFailure(criticalFailure + 1): 0;
      randomValue === maxValue ? setCriticalSuccess(criticalSuccess + 1): 0;
    }
    
  return (
    <div className='card-content'> 
      <div className="top-contrainer">
        <input 
          type="text" 
          id='input' 
          maxLength='3'
          value={inputValue}
          placeholder='d20?'
          onChange={e => setInputValue(e.target.value)}
        />
        <div id="flipCounter">{flipCounter}</div>
        <div id="critSuccess">{criticalSuccess}</div>
        <div id="critFailure">{criticalFailure}</div>
      </div>
      <div 
        className={isFlipped ? 'card-container flipped' : 'card-container'} 
        id='card-container' 
        onClick={() => setIsFlipped(prev => !prev)} 
      >
        <div className='card-front-side'>
          <div className="front-side-text">
            <h2> Do you feel lucky?</h2>
          </div>
        </div>
        <div className='card-back-side'>
          <div className="rnd-value-output">{rndValue}</div>
        </div>
      </div>
    </div>
  )
}