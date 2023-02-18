import { IGetDustResult } from "@/modules/typeDefinition";

import SideBar from "./SideBar";
export default function MainInfo({ response }: IGetDustResult) {
  return (
    <>
      <div className="grid w-full h-full px-8 py-8 grid-cols-[1fr_3fr] grid-rows-1 bg-gradient-to-r from-mojito-l to-mojito-r">
        {/* <div className="columns-2 hover:columns-3"> */}
        <div className="rounded-bl-2xl rounded-tl-2xl ">
          <SideBar title={`서원초등학교`} />
        </div>
        <div className="bg-[#F3E8F5] rounded-br-2xl rounded-tr-2xl"></div>
      </div>
    </>
  );
}
