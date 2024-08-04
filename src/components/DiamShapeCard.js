import Image from 'next/image'

const DiamShapeCard = ({ heading, detail, direction, CubeLogo }) => {
    return (
        <div className={"flex relative items-start my-2 sm:my-3 hover:scale-105 duration-150 min-w-[80%] sm:min-w-[370px] drop-shadow-xl" + direction} alt='img'>
            <div className='h-60 sm:h-80 w-full shade-bg'>
                <Image className='absolute top-0 left-0 -z-50 w-full h-60 sm:h-80 opacity-90 object-cover' src={CubeLogo} width={500} height={500} alt={`${heading} Image`} />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-y-2 items-start pb-5 px-5">
                    <h1 className=" text-xl tracking-wide md:text-3xl font-semibold font-heading text-[#252525]">{heading}</h1>
                    <h1 className=" tracking-tighter font-basic text-xs sm:text-base text-detail text-justify">{detail}</h1>
                </div>
            </div>
        </div>
    )
}

export default DiamShapeCard