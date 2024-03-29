import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "@shopify/polaris";
import img1 from "../assets/image 10.png";
import img2 from "../assets/image 11.png";
import img3 from "../assets/image 3.png";
import img4 from "../assets/image 9.png";
import img5 from "../assets/image 4.png";
interface FunctionalityIntegrationProps {
  title?: string;
  className?: string;
  image?: string;
  description?: string;
  buttontitle?: string;
}

const FunctionalityIntegration: FC<FunctionalityIntegrationProps> = ({
  buttontitle,
  title,
  image,
  className,
  description,
}) => {
  return (
    <div
      className={twMerge(
        " w-full rounded-lg max-w-[332px]   border-[2px] border-[#E3E3E3] flex pt-4 px-4 pb-6 items-start self-stretch  flex-col gap-6 min-h-[168px]",
        className
      )}
    >
      <div className="flex gap-2 flex-col justify-start items-start text-start w-full h-full">
        <h2 className="text-[#4A4A4A] flex gap-1 text-sm font-[650] leading-5 ">
          {image && (
            <img src={image} alt="image" className="w-fit object-cover" />
          )}
          {title || "Order Sync Successful!"}
        </h2>
        <p className="text-[13px] font-[450] leading-5 text-[#4A4A4A] ">
          {description ||
            "Your order details from the last 30 days have been successfully synced. Check them out now!"}
        </p>
      </div>
      <div className="text-white flex flex-col items-start justify-center gap-[32px]  rounded-lg">
        <div className="flex flex-wrap gap-6 justify-start items-start">
          <img src={img1} alt="image" className="w-fit object-cover" />
          <img src={img2} alt="image" className="w-fit object-cover" />
          <img src={img3} alt="image" className="w-fit object-cover" />
          <img src={img4} alt="image" className="w-fit object-cover" />
          <img src={img5} alt="image" className="w-fit object-cover" />
        </div>
        <div className=" w-fit bg-[#303030] rounded-lg">
          <Button variant="primary">
            {buttontitle || "Explore your orders"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FunctionalityIntegration;
