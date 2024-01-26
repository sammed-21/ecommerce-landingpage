import React ,{FC} from 'react'
import { twMerge } from 'tailwind-merge';
interface AnalysisButtonProps {
    text?:string;
    className?:string;
    image?:string;
}
const Analysisbutton: FC<AnalysisButtonProps> = ({image,text,className})=>{

 
  return (
    <button className={twMerge("py-2 px-3 whitespace-nowrap  flex-wrap flex gap-2  rounded-lg text-[#303030] bg-[#FFFFFF]",className)}>
        {text || "Lifetime"}
 {image && <img src={image} alt="image" className='w-fit h-fit object-cover'/>}
</button>
  )
}

export default Analysisbutton