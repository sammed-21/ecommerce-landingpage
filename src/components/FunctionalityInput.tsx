import React, { useState } from 'react';

type Props = {
    defaultColor?:string;
    label?:string;
};

const FunctionalityInput = (props: Props) => {
  const [hexColor, setHexColor] = useState<string>(props.defaultColor || '#FF9898');
  
  const handleHexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // You may want to add validation for hex color format here
    setHexColor(value);
  };

  return (
    <div className="flex  items-center">
      {/* Label and Input */}
      <div className="flex w-full flex-col ">
        <label className="mb-2 text-gray-600">{props.label || 'Hex Color'}</label>
        <div className="flex w-full h-full justify-center items-end  gap-x-3 ">

        <input
          type="text"
          value={hexColor}
          onChange={handleHexChange}
          className="border basis-[75%] border-gray-400 min-w-[64px] min-h-[32px] p-1 rounded"
          />
      <div className="min-w-[64px] basis-[25%] min-h-[32px]  h-full bg-opacity-100 border border-gray-400 rounded" style={{ backgroundColor: hexColor }}></div>
          </div>
      </div>

      {/* Color Preview Box */}
    </div>
  );
};

export default FunctionalityInput;
