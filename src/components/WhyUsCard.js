const WhyUsCard = ({ bg, heading, details, grd }) => {
  return (
    <div
      className={` relative ${grd} from-col1 to-brown hover:from-brown hover:to-col1 drop-shadow-lg hover:scale-105 duration-150 min-h-full w-full rounded-lg`}
    >
      <h1 className="absolute -top-8 left-0 select-none font-main tracking-widest text-[80px] opacity-5 uppercase ">
        {/* {bg} */}
      </h1>

      <div className="px-3 py-4 sm:p-4 md:p-8 flex justify-between gap-y-2 md:gap-y-5 flex-col ">
        <div className=" font-heading font-semibold text-base md:text-2xl tracking-wider">
          <h1>{heading}</h1>
        </div>
        <div className=" font-basic text-xs md:text-lg md:text-left">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsCard;
