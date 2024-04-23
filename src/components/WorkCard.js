const WorkCard = ({heading,details,grdpos}) => {
  return (
    <div className={`${grdpos} from-slate-100 to-slate-400 hover:from-slate-400 hover:to-slate-200 drop-shadow-lg px-3 py-4 sm:p-4 md:p-8 flex gap-y-3 md:gap-y-5 flex-col hover:scale-105 duration-150 h-full`}>
      <div className=" font-heading font-semibold text-base md:text-2xl">
        <h1>{heading}</h1>
      </div>
      <div className=" font-basic text-xs md:text-lg md:text-left">
        <p>
          {details}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
