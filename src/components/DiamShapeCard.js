import Image from 'next/image'

const DiamShapeCard = ({ heading, detail, direction, CubeLogo }) => {
    return (
        <div className={"flex relative items-start my-2 sm:my-3 bg-offwhite hover:scale-105 duration-150 min-w-[80%] sm:min-w-[350px] drop-shadow-xl " + direction} alt='img'>
            <Image className=' w-full h-60 sm:h-80 opacity-90' src={CubeLogo} width={500} height={500} alt={`${heading} Image`}/>
            <div className="z-100 absolute bottom-5 left-5 right-5 flex flex-col gap-y-2 items-start">
                <h1 className=" text-xl tracking-wide md:text-3xl font-semibold font-heading text-black">{heading}</h1>
                <h1 className=" tracking-tighter font-basic text-xs sm:text-base text-detail text-justify">{detail}</h1>
            </div>
        </div>
    )
}

export default DiamShapeCard