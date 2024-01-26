import { Button } from "@shopify/polaris";
import React from "react";

type Props = {};

const FunctionalityHtml = (props: Props) => {
  return (
    <div className="p-4 flex    border-[2px] border-[#E3E3E3] justify-between   rounded-lg flex-col items-stretch self-stretch gap-y-[32px]  min-w-full">
      <div className="flex md:max-w-[310px] flex-col  gap-2">
        <h2 className="text-sm font-[650] leading-5 text-[#4A4A4A]">
          Seamlessly Integrate Custom HTML Elements{" "}
        </h2>
        <p className="flex h-20 flex-col whitespace-pre-line items-start font-[450] leading-5 text-[13px] gap-6 self-stretch text-[#4A4A4A]">
          Unleash creativity with our Custom HTML feature. Add links, custom
          messages, or any HTML content to elevate the tracking page experience
          for your customers.
        </p>
      </div>
      <div className="flex flex-col w-full gap-1 ">
        <h2 className="text-[#303030] text-[13px] font-[450] leading-5">
          HTML Link
        </h2>
        <div className="flex h-[128px] py-[6px] px-3 flex-col items-start self-stretch rounded-lg border-2 border-[#8A8A8A]"></div>
      </div>
      <div className="inline-flex gap-2">
        <button className="py-1 px-3 border-2 border-gray-200 rounded-lg text-[#303030] bg-[#FFFFFF]">
          Preview
        </button>

        <div className="text-white bg-[#303030] rounded-lg">
          <Button variant="primary">Apply changes</Button>
        </div>
      </div>
    </div>
  );
};

export default FunctionalityHtml;
