import React from "react";

interface IMenuProps {
  menu: string;
}
export default function LunchMenu(menuProps: IMenuProps) {
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <div className="w-full h-14 mb-2 flex justify-center  items-center  rounded-full">
        <div className="flex justify-center items-center text-3xl ">
          {menuProps.menu.slice(0, menuProps.menu.indexOf("("))}
        </div>
      </div>
    </div>
  );
}
