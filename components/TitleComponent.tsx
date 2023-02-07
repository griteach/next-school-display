import Image from "next/image";
import logoPic from "../pages/img/logo.png";
export interface ITitleComponentProps {
  title: string;
}

export default function TitleComponent({ title }: ITitleComponentProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image src={logoPic} width={120} alt="logo" />
      {/* <h6 className="text-lg text-white">{title}</h6> */}
    </div>
  );
}
