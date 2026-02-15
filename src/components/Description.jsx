import React from 'react'
import SubDescription from './SubDescription'
import SubLinks from './SubLinks'
function Description(props) {
  return (
    <div className='mx-30 p-2 mt-40 mb-20  w-[80%] flex flex-col justify-start'>
        <div className='flex  items-center gap-4 text-sm font-extralight text-[#0C0E1C] font-[Geist] w-fit mb-4 '>
            <img src="../../public/badge.svg" alt="badge"  /> <p>{props.Badgetext}</p>
        </div>
        <div className='flex justify-between'>
            <h1 className='text-start text-3xl font-[Geist_Mono] font-medium text-shadow-2xs tracking-tight w-8/10 leading-13'>
            {props.Heading}
        </h1>
        <button>
            See it in Action
        </button>
        </div>
        <SubLinks description='Customer Feedback Integration'>
        </SubLinks>
            <SubDescription img='/Canvadescription.webp' logo='/canva.svg' p1='how canva used to unify customer experience ?'></SubDescription>
        

    </div>
  )
}

export default Description