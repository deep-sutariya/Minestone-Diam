import Image from "next/image";
import TranslateFragment from "./Animations/TranslateFragment";

const AboutusComponents = ({
  bgCol,
  heading,
  details,
  fontCol = "text-black",
  pos = "",
  x = "",
  src,
  whyUsCard
}) => {
  const xpos = Number(x);
  
  return (
    <div
      className={`${bgCol}`}
    >
      <TranslateFragment x={xpos}>
        <div className={`w-full pl-10 pr-5 md:pl-32 md:pr-20 ${whyUsCard=="true" ? "py-10" : "py-10 md:py-16 lg:py-20"} lg:px-32 flex justify-center items-center gap-x-4 lg:gap-x-5 ${pos}`}>
          <div className=" min-h-full w-[40%] md:w-full ">
            <Image
              className="w-[full] mx-auto h-24 md:h-40 lg:h-80 object-fill opacity-90"
              src={src}
              width={500}
              height={500}
              alt={`${heading} Image`}
            />
          </div>
          <div className={`w-full flex flex-col gap-y-2 lg:gap-y-6 ${fontCol}`}>
            <h1 className="font-heading text-lg md:text-2xl lg:text-4xl font-semibold tracking-wider">
              {heading}
            </h1>
            <p className=" tracking-tighter md:tracking-tight text-left font-basic text-xs lg:text-lg">{details}</p>
          </div>
        </div>
      </TranslateFragment>
    </div>
  );
};

export default AboutusComponents;
