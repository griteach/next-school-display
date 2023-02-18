import Image from "next/image";

export interface ITitleComponentProps {
  title: string;
}

export default function TitleComponent({ title }: ITitleComponentProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h6 className="text-2xl">{title}</h6>
    </div>
  );
}
