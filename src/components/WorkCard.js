import Image from "next/image";

const WorkCard = ({ heading, details, grdpos, bgImg }) => {
  return (
    <div className={`${grdpos} relative from-slate-100 to-slate-300 hover:from-slate-300 hover:to-slate-100 drop-shadow-lg flex gap-y-3 md:gap-y-5 flex-col hover:scale-105 duration-150 h-full shadow-lg rounded-lg`}>
      <Image className=' -z-50 w-full h-40 sm:h-72 opacity-90 object-cover' src={bgImg} width={800} height={800} alt={`${heading} Image`} />
      <div className=" absolute text-white bottom-0 px-5 z-50">
        <div className=" font-heading font-semibold text-base md:text-2xl">
          <h1 className=" bg-transparent backdrop-blur-[1px] z-50 w-fit">{heading}</h1>
        </div>
        <div className=" font-basic text-xs md:text-lg md:text-left my-2">
          <p className=" bg-transparent backdrop-blur-[1px] z-50 w-fit">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
