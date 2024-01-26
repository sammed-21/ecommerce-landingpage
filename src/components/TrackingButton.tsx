import React from 'react'
import TrackingPage from './TrackingPage';
import bags from '../assets/bags.svg'
import { twMerge } from 'tailwind-merge';
interface TrackingPageProps {
    title?:string;
    tracking?:string;
    image?:string ;
    className?:string;
    
}

const TrackingButton:React.FC<TrackingPageProps> = ({className,title,tracking,image}) => {
  return (
    <div className={twMerge('p-4 flex text-[#4A4A4A] flex-col gap-2 w-full h-fit  rounded-lg bg-white',className ) }>
        <div className="text-[12px] fong-[550] leading-4 font-normal">
            {title || 'Order'}
        </div>
        <div className="text-[36px] flex w-full h-fit justify-between   font-[700] leading-12 tracking-[-0.54px]">
            {tracking || '80'}
            {image && <img src={image || bags} alt="image" className='w-fit h-fit mr-5 object-cover'/>}

        </div>
    </div>
  )
}

export default TrackingButton