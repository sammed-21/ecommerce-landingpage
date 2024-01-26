import React from "react";
import FunctionalityInput from "./FunctionalityInput";
import { Button } from "@shopify/polaris";

type Props = {};

const FunctionalityColorCard = (props: Props) => {
  return (
    <div className="flex  h-fit border-2 border-gray-300 rounded-lg  w-full flex-col gap-6 p-4 self-stretch items-start">
      <div className="flex flex-col w-full h-full gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-[650] leading-5 text-[#4A4A4A]">
            Elevate Your Brand Aesthetics with Custom Tracking Page Styles
          </h2>
          <p className="flex flex-col items-start text-[13px] gap-6 self-stretch text-[#4A4A4A]">
            Immerse your customers in a branded experience by personalizing the
            colors on your tracking page.
          </p>
        </div>
        <div className="w-full h-full flex flex-col gap-4 ">
          <FunctionalityInput defaultColor="#FF9898" label="Accent Color" />
          <FunctionalityInput defaultColor="#571010" label="Text Color" />
          <FunctionalityInput defaultColor="#FFEAEA" label="Background Color" />
        </div>
      </div>
       
      <div className="inline-flex gap-2">
        <button className="py-1 px-3 border-2 border-gray-200 rounded-lg text-[#303030] bg-[#FFFFFF]">
                Preview
        </button>

      <div className="text-white bg-[#303030] rounded-lg">
        
        <Button variant="primary">
        Apply Colors
        </Button>
      </div>
      </div>
      
    </div>
  );
};

export default FunctionalityColorCard;
