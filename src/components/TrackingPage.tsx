import React from 'react'
import TrackingButton from './TrackingButton'
import bags from '../assets/bags.svg'
import eye from '../assets/eye.svg'
type Props = {}

const TrackingPage = (props: Props) => {
  return (
    <div className='px-4 border-[2px] border-[#E3E3E3] pt-4 pb-[32px] flex flex-col rounded-lg gap-6 w-full h-full'>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#4A4A4A] text-sm font-[650] leading-5">Tracking Page Views Vs Orders</h3>
        <p className="text-[13px] font-[450] leading-5 text-[#4A4A4A]">Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
      </div>
      <div className="flex flex-col gap-5">
        <TrackingButton title='Order' tracking='80' image={bags} className='bg-[#FFEBD5]'/>
        <TrackingButton title='Tracking Page Views' tracking='44' className='bg-[#FFC879]' image={eye} />
      </div>
    </div>
  )
}

export default TrackingPage