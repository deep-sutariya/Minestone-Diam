import Image from "next/image";
import FadeFragment from "./Animations/FadeFragment";

const Affiliations = () => {
  return (
    <div className=" min-h-[80vh] bg-black flex flex-col px-5 py-10 md:px-10 md:py-20 gap-y-5 md:gap-y-10 justify-center items-center text-offwhite">
      <h1 className=" text-2xl md:text-4xl lg:text-5xl">Affiliations</h1>
      <div className=" flex flex-col items-center gap-y-4 md:gap-y-8 sm:gap-x-6 sm:px-5 mt-9 w-[95%] md:w-4/5">
        <div className=" p-3 md:w-[80%] lg:w-[70%] xl:w-[60%] md:max-h-60 rounded-xl bg-offwhite hover:scale-105 hover:cursor-pointer">
          <Image
            className=" w-full max-h-52 sm:h-60 object-cover opacity-90"
            src="/Affiliation_okavango.png"
            width={500}
            height={500}
            alt={`Affiliation_okavango Image`}
          />
        </div>
        <div className=" p-3 md:w-[80%] lg:w-[70%] xl:w-[60%] md:max-h-60 rounded-xl bg-offwhite hover:scale-105 hover:cursor-pointer">
          <Image
            className=" w-full max-h-52 sm:h-80 opacity-90 "
            src="/Affiliation_gjepc.png"
            width={500}
            height={50}
            alt={`Affiliation_gjepc Image`}
          />
        </div>
      </div>
    </div>
  );
};

export default Affiliations;
