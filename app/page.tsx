import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/ui/CompanionCard'
import CompanionsList from '@/components/ui/CompanionsList'
import Cta from '@/components/ui/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1 className='text-2xl underline'>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
        
        id="123"
        name="Neura the Brainy Explorer"
        topic="Neural Network of the Brain"
        subject="Science"
        duration={45}
        color="#ffda6e"
        />
        <CompanionCard
        
        id="456"
        name="Countsy the Number Wizard"
        topic="Derivatives & Integrals"
        subject="Maths"
        duration={30}
        color="#e5f0ff"
        />
        <CompanionCard
        
        id="789"
        name="Verba the Vocabulary Builder"
        topic="language"
        subject="English Literature"
        duration={30}
        color="#BDE7FF"
        />
    
      </section>
      <section className='home-section'>
        <CompanionsList title="Recently Complete Sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <Cta/>
      </section>
   </div>
  )
}

export default Page