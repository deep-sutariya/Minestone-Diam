import Image from "next/image";

const WorkCard = ({ heading, details, grdpos, bgImg }) => {
  return (
    <div className={`${grdpos} relative from-slate-100 to-slate-300 hover:from-slate-300 hover:to-slate-100 drop-shadow-lg flex gap-y-3 md:gap-y-5 flex-col hover:scale-105 duration-150 h-full shadow-lg rounded-lg`}>
      <div className='h-40 sm:h-72 w-full shade-bg-work'>
        <Image className='noDrag absolute top-0 left-0 -z-50 w-full h-40 sm:h-72 opacity-90 object-cover' src={bgImg} width={800} height={800} alt={`${heading} Image`} onContextMenu={(e) => e.preventDefault()} />
        <div className=" absolute bottom-0 px-5 z-50">
          <div className=" font-heading font-semibold text-base md:text-2xl">
            <h1 className=" z-50 w-fit text-[#252525]">{heading}</h1>
          </div>
          <div className=" font-basic text-xs md:text-lg md:text-left my-2">
            <p className="text-detail z-50 w-fit">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
