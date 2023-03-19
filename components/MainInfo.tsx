import { IGetDustResult } from "@/modules/typeDefinition";
import MainBar from "./MainBar";

import SideBar from "./SideBar";
export default function MainInfo({ response }: IGetDustResult) {
  return (
    <>
      <div className="grid w-full h-full p-8 grid-cols-[1fr_3fr] grid-rows-1 bg-blue-500   gap-3">
        <div className=" rounded-2xl">
          <SideBar title={`서원초등학교`} />
        </div>
        <div className="bg-cyan-50 rounded-2xl">
          <MainBar />
        </div>
      </div>
    </>
  );
}
