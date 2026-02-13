import React, { useEffect } from 'react'
import { useState } from 'react'
function Hero() {
    const [hover,setHover] =useState(false);
    const [pos,setPosition] = useState({x:0,y:0})


  return (
<div className="
  absolute w-full m-0 
  h-390
  bg-fixed
  bg-[linear-gradient(to_bottom,white,rgb(220,227,211),rgb(242,240,237)_70%)]
">

    <p className="
  w-fit px-2 py-1 mt-20 ml-30 uppercase 
  font-[Geist_Mono] font-normal text-xs antialiased
  border border-white rounded-lg
  bg-[linear-gradient(to_right,rgba(255,255,255,0.7),#e8ede1_30%,rgba(255,255,255,0.7)_80%)]
  backdrop-blur-sm 

">
  Introducing Enterpret 2.0
</p>
 <h1 className='text-6xl font-[Montserrat]  ml-30 my-10 antialiased tracking-tight font-stretch-condensed leading-18' >
        Customer feedback is everywhere. 
        <br />Customer intelligence is here.
    </h1>
    <p className='text-xs font-light ml-30 w-165 leading-6'>Enterpret is the leading customer intelligence platform that unifies all your feedback with AI that understands your business,
         turning noise into intelligence that drives growth</p>
    <div className='flex items-center ml-30 mt-10 gap-15 text-[13px] font-extralight tracking-tight '>

        <button className='flex gapx-2 py-1 items-center text-white bg-[#393F4E] px-2 py-1.5 rounded-sm'>Book a demo 
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6464 6.64645C11.8417 6.84171 11.8417 7.15829 11.6464 7.35355L7.17678 11.8232C7.07915 11.9209 6.92085 11.9209 6.82322 11.8232L6.44841 11.4484C6.35078 11.3508 6.35078 11.1925 6.44841 11.0949L10.0282 7.51509H2.25C2.11193 7.51509 2 7.40316 2 7.26509V6.73491C2 6.59684 2.11193 6.48491 2.25 6.48491H10.0282L6.44841 2.90515C6.35078 2.80752 6.35078 2.64922 6.44841 2.55159L6.82322 2.17678C6.92085 2.07915 7.07915 2.07915 7.17678 2.17678L11.6464 6.64645Z" fill="currentColor"></path>
    </svg>
    </button>
    <div className='flex gapx-2 py-1 items-center text-black px-2 py-1.5 rounded-sm bg-[rgb(220,227,211)] z-1'
    
    onMouseEnter={()=> {setHover(true);}}
    onMouseLeave={()=> {setHover(false);}}
    onMouseMove={(e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;
        setPosition({x,y});
    }}
    >
        {



           hover && (
 <div
  className="absolute w-10 h-10 bg-[rgba(220,227,211,0.7)] rounded-full pointer-events-none"
  style={{
    left: pos.x + "px",
    top: pos.y + "px",
    ...(hover
      ? {
          boxShadow: `inset 0 0 20px rgba(0,0,0,0.2),
                      inset ${pos.x}px ${pos.y}px 30px rgba(0,0,0,0.15)`
        }
      : {})
  }}
/>

)




        } <p>See it in Action</p><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6464 6.64645C11.8417 6.84171 11.8417 7.15829 11.6464 7.35355L7.17678 11.8232C7.07915 11.9209 6.92085 11.9209 6.82322 11.8232L6.44841 11.4484C6.35078 11.3508 6.35078 11.1925 6.44841 11.0949L10.0282 7.51509H2.25C2.11193 7.51509 2 7.40316 2 7.26509V6.73491C2 6.59684 2.11193 6.48491 2.25 6.48491H10.0282L6.44841 2.90515C6.35078 2.80752 6.35078 2.64922 6.44841 2.55159L6.82322 2.17678C6.92085 2.07915 7.07915 2.07915 7.17678 2.17678L11.6464 6.64645Z" fill="currentColor"></path>
    </svg></div>
    



        

    </div>

        <div className='flex justify-center p-15 '>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/brTWaZCvTq4?si=QoOQGQKiMPDGdwga" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen 
        className='h-150 w-270 mx-10 my-0.5'
        ></iframe>
        </div>
        <p className='ml-30 mb-2 font-extralight text-xs text-neutral-400 flex items-center p-2'> The Fastest-Growing Companies Use Enterpret</p>

        <div className='grid grid-cols-5 gap-0.5 mx-10 ml-30 '>
            <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/canva.svg" alt="" className='h-20 invert-50 w-25 logo'/>
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white hover:invert-0">
                <img src="../../public/strava.svg" alt="" className='h-20 invert-50 w-25 logo'/>
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/perplexity.svg" alt="" className='h-20 invert-50 w-25 logo'/>
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/notion.svg" alt="" className='h-20 invert-50 w-25 logo'/>
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/hinge.svg" alt="" className='h-20 invert-50 w-25 logo'/>
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/fanatics.svg" alt="" className='h-20 invert-50  w-25 logo'/>
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/nextdoor.svg" alt="" className='h-20 invert-50 w-25 logo'/>
            </div>
             <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/bitvavo.svg" alt="" className='h-20 invert-50  w-25 logo'/>
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/atlassian.svg" alt="" className='h-20 invert-50 w-25 logo'/>
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/ancestry.svg" alt="" className='h-20 invert-50 w-25 logo'/>
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/webflow.svg" alt="" className='h-20 invert-50 w-25 logo'/>
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/quizlet.svg" alt="" className='h-20 invert-50 w-25 logo'/>
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/monday.svg" alt="" className='h-20 invert-50 w-25 logo'/>
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white ">
                <img src="../../public/western.svg" alt="" className='h-20 invert-50 w-25 logo'/>
            </div>
        
            <div className="flex justify-center items-center px-2 py-1 bg-white">
                <img src="../../public/farmer.svg" alt="" className='h-10  w-15 '/>
            </div>
        </div>

    </div>
  )
}

export default Hero