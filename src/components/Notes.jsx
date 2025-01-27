import React from 'react';

export default function Notes({ title, p }) {
  return (
    <div className='p-[2rem] text-center text-shadow'>
      <h1 className='text-[1.4rem]'>{title}</h1>
      <p className='text-[1.1rem]'>{p}</p>
    </div>
  );
}
