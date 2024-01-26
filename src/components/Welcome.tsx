import React from 'react'
import WelcomeCard from './WelcomeCard'
import alert from '../assets/alerttriangle.svg'
import WelcomeCardTwoButton from './WelcomeCardTwoButton'
type Props = {}

const Welcome = (props: Props) => {
  return (
    <div className='w-full lg:px-[70px]  px-[40px] h-full relative flex flex-col my-10  gap-[32px] justify-start items-start'>
      <h1 className='text-2xl font-bold leading-8 tracking-[-0.02em] text-[#4A4A4A] '>Welcome, John Mathew!!</h1>
<div className="flex flex-wrap gap-4 w-full flex-row ">
  <WelcomeCard className=' max-md:min-w-full'/>
  <WelcomeCard image={alert} title='Customize Customer Notification' description='Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers' buttontitle='Configure Notification' className='bg-[#FFF8DB] max-md:min-w-full' />
  <WelcomeCardTwoButton image={alert} title='Customize Customer Notification' description='Include the Link to Your Store Navigation Menu.' buttontitle='Go To Navigation Menu' className='bg-[#EAF4FF] max-md:min-w-full' />
 
</div>
    </div>
  )
}

export default Welcome