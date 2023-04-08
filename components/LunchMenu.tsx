import React from "react";

interface IMenuProps {
  menu: string;
}
export default function LunchMenu(menuProps: IMenuProps) {
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <div className="w-2/3 bg-red-400 rounded-xl">
        <div className="flex justify-center items-center ">
          {menuProps.menu}
        </div>
      </div>
    </div>
  );
}
