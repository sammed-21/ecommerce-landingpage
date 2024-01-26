// import React from "react";
// import downarrow from "../assets/ChevronDown.svg";
// import search from "../assets/Search.svg";
// import people from "../assets/account.svg";
// import setting from "../assets/setting.svg";
// type Props = {};
// const navigationLinks = [
//   { title: "Home", url: "#" },
//   { title: "Orders", url: "#" },
//   { title: "Integrations", url: "#", submenu: true },
//   { title: "Tracking Page", url: "#" },
//   { title: "Partner with us", url: "#" },
// ];
// const Navbar = (props: Props) => {
//   return (
//     <nav className="text-sm text-[#4A4A4A] px-[70px] flex items-center justify-between lg:flex-row w-full min-h-[56px] shadow-0  border-[2px] border-black bg-[#FFFFFF]  ">
// <div className="flex lg:flex-row flex-col items-start gap-[32px] ">
//   {navigationLinks.map((link, index) => (
//     <a
//       key={index}
//       href={link.url}
//       className="group  transition text-sm font-semibold leading-[20px] duration-300"
//     >
//       <span className="font-[650] flex items-center justify-center">
//         {link.title}
//         {link.submenu && (
//           <img src={downarrow} className="w-fit ml-2 object-cover" />
//         )}
//       </span>

//       <span className="block max-w-0 bg-[#8051FF] group-hover:max-w-[70%] transition-all duration-500 h-0.5"></span>
//     </a>
//   ))}
// </div>
//   <div className="flex lg:gap-[32px] gap-5">

// <div className="flex border-b-2 justify-start items-center  border-black">
//   <img src={search} className="w-fit mr-2 h-fit object-contain" />
//   <input
//     type="text"
//     placeholder="Search"
//     className="w-[120px] h-auto text-base bg-transparent border-none outline-none"
//     />
// </div>
// <div className="flex items-center justify-center gap-3">
//   <img src={people} className="w-fit h-fit object-cover" alt="image"/>
//   <p className="text-sm font-semibold leading-5 text-[#616161]">Account</p>
// </div>
// <div className="flex items-center justify-center gap-3">
//   <img src={setting} className="w-fit h-fit object-cover" alt="image"/>
//   <p className="text-sm font-semibold leading-5 text-[#616161]">Settings</p>
// </div>

//     </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import downarrow from "../assets/ChevronDown.svg";
import nav from "../assets/navbar.svg";
import search from "../assets/Search.svg";
import people from "../assets/account.svg";
import setting from "../assets/setting.svg";
type Props = {};
const navigationLinks = [
  { title: "Home", url: "#" },
  { title: "Orders", url: "#" },
  { title: "Integrations", url: "#", submenu: true },
  { title: "Tracking Page", url: "#" },
  { title: "Partner with us", url: "#" },
];

const Navbar = (props: Props) => {
  const [show, setShow]= useState(false);
  return (
    <nav className="bg-white flex flex-col gap-1 relative h-[56px] w-full  border-b-[2px] border-black   items-center  ">
      <div className="flex w-full h-full items-center justify-between lg:px-[70px]  px-[40px]">
        <div className="xl:flex flex-row hidden items-start gap-[32px] ">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="group  transition text-sm font-semibold leading-[20px] duration-300"
            >
              <span className="font-[650] flex items-center justify-center">
                {link.title}
                {link.submenu && (
                  <img src={downarrow} className="w-fit ml-1 object-cover" />
                )}
              </span>

              <span className="block max-w-0 bg-[#8051FF] group-hover:max-w-[70%] transition-all duration-500 h-0.5"></span>
            </a>
          ))}
        </div>
        <div className="flex items-center md:order-1 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 "
            aria-controls="navbar-language"
            aria-expanded="false"
            onClick={()=>setShow(prev =>!prev)}
          >
            
            <img src={nav} alt="image" className="w-full h-full object-cover" />
          </button>
        </div>
        <div
          className="items-center justify-between  w-fit  md:w-auto md:order-1"
          id="navbar-language"
        >
          <div className="flex lg:gap-[32px] gap-5">
            <div className="flex border-b-2 justify-start items-center  border-black">
              <img src={search} className="w-fit mr-2 h-fit object-contain" />
              <input
                type="text"
                placeholder="Search"
                className="w-[120px] h-auto text-base bg-transparent border-none outline-none"
              />
            </div>
            <div className="hidden sm:flex items-center justify-center gap-3">
              <img
                src={people}
                className="w-fit h-fit object-cover"
                alt="image"
              />
              <p className="text-sm font-semibold leading-5 text-[#616161]">
                Account
              </p>
            </div>
            <div className=" hidden sm:flex items-center justify-center gap-3">
              <img
                src={setting}
                className="w-fit h-fit object-cover"
                alt="image"
              />
              <p className="text-sm font-semibold leading-5 text-[#616161]">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* {show &&  */}
      {/* //  <div className={`flex flex-col   z-10 translate-transition-all ease-in-out duration-300 delay-150   px-[40px] py-10 w-full h-fit justify-center mx-3 bg-white items-start  gap-[32px] `}> */}
      {show && 
       <div className="flex flex-col xl:hidden absolute top-14 transition-all ease-in-out duration-300 delay-150   px-[40px] py-10 z-40 w-full h-fit justify-center mx-3 bg-white items-start  gap-[32px] ">
       {navigationLinks.map((link, index) => (
         <a
           key={index}
           href={link.url}
           className="group text-left  transition text-sm font-semibold leading-[20px] duration-300"
         >
           <span className="font-[650] flex items-center justify-center">
             {link.title}
             {link.submenu && (
               <img src={downarrow} className="w-fit ml-2 object-cover" />
             )}
           </span>

           <span className="block max-w-0 bg-[#8051FF] group-hover:max-w-[70%] transition-all duration-500 h-0.5"></span>
         </a>
       ))}
       <div className="flex gap-3">

       <div className="hidden cursor-pointer max-sm:flex items-center justify-center gap-3">
              <img
                src={people}
                className="w-fit h-fit object-cover"
                alt="image"
                />
              <p className="text-sm font-semibold leading-5 text-[#616161]">
                Account
              </p>
            </div>
            <div className="hidden  cursor-pointer max-sm:flex items-center justify-center gap-3">
              <img
                src={setting}
                className="w-fit h-fit object-cover"
                alt="image"
                />
              <p className="text-sm font-semibold leading-5 text-[#616161]">
                Settings
              </p>
            </div>
     </div>
     </div>}
    </nav>
  );
};

export default Navbar;
