import React from 'react'

function Card(props) {
  
 
  return (
    <div   className='flex flex-col text-center' onClick={props.onClick}>
        <img src={props.src} alt={props.alt} className='p-1 h-85 w-90'/>
        <p className='text-sm font-light w-9/10'>{props.text}</p>
    </div>
  )
}

export default Card