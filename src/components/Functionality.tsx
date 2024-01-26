import React from "react";
import FunctionalityColorCard from "./FunctionalityColorCard";
import WelcomeCard from "./WelcomeCard";
import FunctionalityIntegration from "./FunctionalityIntegration";
import FunctionalityHtml from "./FunctionalityHtml";

type Props = {};

const Functionality = (props: Props) => {
  return (
    <div className="py-16 flex flex-col bg-white lg:px-[70px]  px-[40px] gap-[32px] justify-center items-center w-full h-full">
      <div className="flex items-start text-start justify-start w-full ">
        <h1 className="font-[700] text-[#4A4A4A] leading-8 text-[24px] text-center tracking-[-0.2px]">
          Discover the Heart of Our Functionality
        </h1>
      </div>
      <div className="w-full  h-fit   grid grid-cols-10  gap-4">
        <div className=" w-full h-full row-span-full col-span-full md:col-span-5 xl:col-span-3 relative">
          <FunctionalityColorCard />
        </div>
        <div className="w-full h-full flex-col col-span-full md:col-span-5 xl:col-span-4 flex gap-4 ">
          <div className=" w-full  h-full    row-span-1 col-span-4">
            <WelcomeCard
              className="min-w-full "
              title="Exclusive Onboarding Support for High-Volume Brands"
              description="Unlock personalized guidance! Book a one-on-one 
onboarding call to streamline your experience."
            />
          </div>
          <div className=" min-w-full  row-span-1  col-span-4 ">
            <FunctionalityIntegration
              title="Explore Our Integrated Ecosystem
            "
              description="Discover a variety of popular integrations tailored for your convenience. "
              className="min-w-full"
            />
          </div>
        </div>
        <div className="min-w-full col-span-full xl:col-span-3 min-h-full   relative">
          <FunctionalityHtml />
        </div>
      </div>
    </div>
  );
};

export default Functionality;
