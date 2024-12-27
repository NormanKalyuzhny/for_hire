import React, { useState } from 'react';
import './CV.css';

let tagArray = []

export default function CV(props) {
  const [inputValue, setInputValue] = useState('') //trackin input value
  const [tagArray, setTagArray] = useState([])

  const handleInputValue = () => {
    const tempArray = inputValue.split(' ')
  .map(tag => tag.replace(/^[.,\s]+|[.,\s]+$/g, ''))
  .filter(tag => tag !== '');
    setTagArray(prevTag=>[...prevTag,...tempArray])
    setInputValue('')
  }

  const handleTagDeletion = (index) => {
    setTagArray(prevTags => prevTags.filter((_, i) => i !== index));
  }

  return(
    <div className='tag-container'>
      <div className='tagInput-row'>
        <input 
          type="text"
          placeholder='Enter tags'
          value={inputValue}
          onChange = {(e)=>setInputValue(e.target.value)}
        />
        <button 
          onClick={handleInputValue}
          className='tagAddBtn'>
            Add
        </button>
      </div>
      <div className='tagItem-row'>
        {tagArray.map((i, index)=>{
          return (
            <li key={index}>
              {i}
              <button
                onClick={() => handleTagDeletion(index)}
                className='tagDeleteBtn'>
                  X
              </button>
            </li>
          )
        })}
      </div>
    </div>
  )
}

