import React from 'react'

function SubDescription(props) {
  return (
    <div className='flex w-full h-fit '>
        <div className='flex flex-col w-45/100 border-[0.5px] border-neutral-300'>
            <div className='flex flex-col gap-3 h-[80%] text-start p-2 justify-center '>
                <h2 className='text-3xl font-[Arial] font-medium tracking-tight mx-5'>
                    Connect every customer voice in one place
                </h2>
                <p className='text-[#0C0E1C] font-extralight leading-5 text-xs w-8/10 -tracking-wide font-[Geist_Mono] mx-5'>

Feedback lives everywhere, making context hard to track.
Unify feedback across 50+ sources into one real-time view.
                </p>

            </div>
            <div className='flex h-[20%]'>
                <div className='border-t-[0.5px] w-2/3 border-neutral-300 flex items-center text-center justify-center' >
                <p className=' p-1 capitalize font-[Geist] text-sm font-medium'>
                    {props.p1}
                </p>
                <p>
                    {props.p2}
                </p>
                </div>
                <div className=' border-t-[0.5px] border-l-[0.5px] w-1/3 border-neutral-300 flex items-center justify-center'>
                
                <img src={props.logo} alt="" className=' h-15 w-30 invert-30' />

                </div>
            </div>
        </div>
        <div
        className='w-55/100 border-[0.5px] border-neutral-300'
        ><img src={props.img} alt="" className='' /></div>
    </div>
  )
}

export default SubDescription