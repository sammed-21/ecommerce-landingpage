import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "@shopify/polaris";
interface WelcomeCardProps {
  title?: string;
  className?: string;
  image?:string;
  description?: string;
  buttontitle?: string;
}

const WelcomeCardTwoButton: FC<WelcomeCardProps> = ({
  buttontitle,
  title,
  image,
  className,
  description,
}) => {
  return (
    <div
      className={twMerge(
        " w-full rounded-lg max-w-[332px]  border-[2px] border-[#E3E3E3] flex pt-4 px-4 pb-6 items-start self-stretch  flex-col gap-[32px] min-h-[168px]",
        className
      )}
    >
      <div className="flex gap-2 flex-col justify-start items-start text-start w-full h-full">
        <h2 className="text-[#4A4A4A] flex gap-1 text-sm font-[650] leading-5 ">
            {image && 
<img src={image} alt="image" className="w-fit h-fit object-cover"/>
            }
          {title || "Order Sync Successful!"}
        </h2>
        <p className="text-[13px] font-[450] leading-5 text-[#4A4A4A] ">
          {description ||
            "Your order details from the last 30 days have been successfully synced. Check them out now!"}
        </p>
      </div>
      <div className="flex max-sm:flex-wrap gap-2">
        <button className="py-1 px-3 border-2 border-gray-200 rounded-lg text-[#303030] bg-[#FFFFFF]">
                Copy Link
        </button>

      <div className="text-white bg-[#303030] rounded-lg">
        
        <Button variant="primary">
          {buttontitle || "Explore your orders"}
        </Button>
      </div>
      </div>
    </div>
  );
};

export default WelcomeCardTwoButton;
