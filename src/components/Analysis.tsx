import React from "react";
import Analysisbutton from "./Analysisbutton";
import bag from "../assets/bag.svg";
import ChartCard from "./ChartCard";
import TrackingPage from "./TrackingPage";
import circle from '../assets/circle.svg'
type Props = {};

const Analysis = (props: Props) => {
  return (
    <div className="w-full  bg-[#FFF7EE] lg:px-[70px]  py-[40px] px-[40px]">
      <div className=" flex flex-col items-start gap-10 justify-start">
        <h1 className="items-center text-2xl font-[700] leading-[32px] tracking-[-0.2px] text-[#4A4A4A]">
          Instant Dive into Your Performance Metrics
        </h1>

        <div className="flex gap-2 justify-start flex-wrap items-start">
          <Analysisbutton
            className="hover:border-[#8051FF] border-[2px] transition-all ease-in-out duration-300"
            text="Lifetime"
          />
          <Analysisbutton
            className="hover:border-[#8051FF] border-[2px] transition-all ease-in-out duration-300"
            text="Last Week"
          />
          <Analysisbutton
            className="hover:border-[#8051FF] border-[2px] transition-all ease-in-out duration-300"
            text="Last Month"
          />
          <Analysisbutton
            className="hover:border-[#8051FF] border-[2px] transition-all ease-in-out duration-300"
            text="Last Year"
          />
          <Analysisbutton
            className="hover:border-[#8051FF] border-[2px] transition-all ease-in-out duration-300"
            text="Customize Time Line"
            image={bag}
          />
        </div>
        <div
        className="grid  grid-cols-5 lg:grid-rows-1 gap-4 w-full h-fit"
        //   className="
        //   relative
        // h-[368px] w-full gap-4 flex lg:flex-row flex-col justify-center items-center "
        >
          <div className="col-span-full md:col-span-3 lg:col-span-2  w-full h-full">

          <ChartCard />
          </div>
          <div className="col-span-full  lg:max-w-full md:col-span-2 lg:col-span-1  w-full bg-[#956F00] rounded-lg pt-4 pl-4 pb-6 pr-11 h-full flex flex-col justify-between relative">
            <div className="">
              <h2 className="text-sm font-[650] leading-5 text-[#FFFFFF]">
                Star Facts about your orders!!!
              </h2>
              <p className="flex  text-[#FFFFFF] font-[450] py-2 flex-col">
                <span className="">
                  There are 8 shipments that have been in out for delivery for
                  more than 3 days.
                </span>
                <br />
                <span className="">
                  There are 5 shipments in exception right now
                </span>
                <br />
                <span className="">
                  The maximum chargebacks are from Miami.
                </span>
              </p>
              <img src={circle} className="w-fit absolute inset-0 top-12 my-auto ml-auto right-0 h-fit object-cover" alt="image"/>
            </div>
            <div className="">
              <Analysisbutton
                className="text-[#303030] bg-[#FFFFFF]"
                text="Check Order page"
              />
            </div>
          </div>

          <div className="w-full col-span-full lg:col-span-2 bg-[#FFFFFF] h-full">
            <TrackingPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
