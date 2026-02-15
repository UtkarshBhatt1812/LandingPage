import React, { Children } from 'react'

function SubLinks(props) {
  return (
   
   <>
    <div className=''>
        {props.description}
    </div>
    {console.log(Children)}
   </>
  )
}

export default SubLinks