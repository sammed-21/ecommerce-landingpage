

import { Doughnut } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import Analysisbutton from "./Analysisbutton";

ChartJS.register(ArcElement, Tooltip, Legend);

interface MyDoughnutChartProps {
  // Adjust the type based on your actual data structure
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      hoverOffset: number;
    }[];
  };
}

const ChartCard: React.FC = () => {
  const options: ChartOptions<"doughnut"> = {
    
    responsive: true,

   
    plugins: {
      legend: {
        position: "bottom",
        fullSize:true,
        maxHeight: 2000,
        labels: {
          useBorderRadius: true,
          borderRadius: 10, // Set border-radius for legend labels
        }, // You can use 'top', 'bottom', 'left', 'right', or customize as needed
        align: "start",
        display: true,
      },
    },
  };
  const data = {
    labels: [
      "Exception",
      "Intransit",
      "Pending",
      "Delivered",
      "Out for delivery",
    ],
    datasets: [
      {
        label: "",
        data: [300, 50, 100, 40, 30],
        backgroundColor: [
          "#5E4200",
          "#5E4200",
          "#956F00",
          "#E5A500",
          "#FFDDB6",
        ],

        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className=" border-[2px] border-[#E3E3E3] bg-white p-3 rounded-lg w-full relative h-full">
      <div className="flex h-auto w-full flex-col justify-center  gap-6 items-stretch">
        <div className="flex justify-between items-start flex-1">
          <h3 className="text-sm font-[650] leading-5 text-[#4A4A4A]">
            Shipment Updates
          </h3>
          <div className="text-sm font-[450] text-[#4A4A4A] leading-5">
            Total Orders: 394
          </div>
        </div>
        <div className="flex no-scrollbar snap-x overflow-y-hidden gap-3">
          <Analysisbutton
            text="Delivered"
            className="hover:bg-[#FFF1E3] bg-[#F1F1F1] hover:border-[#E3E3E3] transition-all ease-in-out duration-300 border-[2px]"
          />
          <Analysisbutton
            text="Out for delivery"
            className="hover:bg-[#FFF1E3] whitespace-nowrap w-full bg-[#F1F1F1] hover:border-[#E3E3E3] transition-all ease-in-out duration-300 border-[2px]"
          />
          <Analysisbutton
            text="Intransit"
            className="hover:bg-[#FFF1E3] bg-[#F1F1F1] hover:border-[#E3E3E3] transition-all ease-in-out duration-300 border-[2px]"
          />
          <Analysisbutton
            text="Pending"
            className="hover:bg-[#FFF1E3] bg-[#F1F1F1] hover:border-[#E3E3E3] transition-all ease-in-out duration-300 border-[2px]"
          />
          <Analysisbutton
            text="Expenditure"
            className="hover:bg-[#FFF1E3] bg-[#F1F1F1] hover:border-[#E3E3E3] transition-all ease-in-out duration-300 border-[2px]"
          />
        </div>
        <div
          style={{
            width: "450px",
         
            height: "250px",
            gap: "30px",
            display: "flex",
            justifyContent:'center',
            alignItems: 'center',
            flexDirection: "column",
          }}
          className=" max-w-full overflow-hidden flex flex-col items-start justify-start gap-3 "
        >
          <Doughnut data={data} className="w-full " options={options} />
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
