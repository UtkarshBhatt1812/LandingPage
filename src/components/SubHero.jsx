import React from 'react'
import Card from './Card'
import Description from './Description';





function SubHero() {
  return (
    <div className='flex flex-col text-center mt-20 items-center'>
        <h2 className='text-5xl font-[Arial] tracking-tight font-medium p-2 w-1/2 leading-13'>
            Turn feedback overload into clarity and action
        </h2>
        <p className='font-[Geist] text-sm pt-2 pb-4 text-[#0C0E1C] font-light'>Unify feedback with business context. Understand insights from data. Act and close the loop with customers.</p>
        <div className='flex ml-30 mr-30 gap-4 p-2'>
        <Card src ='../../public/Unify.png' text='Unify feedback with your business context to prioritize what truly matters' alt='Unify'/>
        <Card src ='../../public/Understand.png' text='Understand insights by transforming raw feedback into actionable data' alt='Understand'/>
        <Card src ='../../public/Act.png' text='Act on insights and close the loop with AI Agents and automated workflows' alt='Act'/>
        </div>

        <Description Badgetext='Unify' Heading='Unify feedback with your business context to prioritize what truly matters' 
        
        sublinks={


['Customer feedback integration',
'Adaptive Taxonomy',
'CUSTOMER KNOWLEDGE GRAPH',
'Data Enrichment']


}
        
        />

        
        

    </div>
  )
}

export default SubHero