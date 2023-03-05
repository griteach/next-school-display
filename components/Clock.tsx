import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full bg-white  rounded-3xl shadow-xl p-3">
      <div className="w-full h-full flex justify-center items-center  bg-red-400">
        <span>{time.toLocaleTimeString()}</span>
      </div>
    </div>
  );
}
