import Image from "next/image";

const Loading = () => {
  return (
    <div className=" absolute -z-50 w-full flex justify-center items-center h-[100vh]">
      <Image
        className="animate-pulse duration-75 drop-shadow-xl w-12 h-12 md:w-24 md:h-24"
        src="/Logo.png"
        width={80}
        height={80}
        priority="true"
        alt="logo"
      />
    </div>
  );
};

export default Loading;