import WeatherComponent from "./Weather";

export default function MainInfo() {
  return (
    <>
      <div className="grid w-full h-full p-6 grid-cols-3 gap-3">
        {/* <div className="columns-2 hover:columns-3"> */}
        <WeatherComponent />
        <div className="bg-slate-500">01</div>
        <div className="bg-orange-100">02</div>
        <div className="bg-orange-200">03</div>
        <div className="bg-orange-300">04</div>
        <div className="bg-orange-400">05</div>
      </div>
    </>
  );
}
