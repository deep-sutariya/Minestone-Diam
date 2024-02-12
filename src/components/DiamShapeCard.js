import Image from 'next/image'

const DiamShapeCard = ({ heading, detail, direction, CubeLogo }) => {
    return (
        <div className={"flex relative items-start rounded-xl my-3 bg-offwhite hover:scale-105 duration-150 w-full drop-shadow-xl " + direction}>
            <Image className=' w-full rounded-xl h-80 opacity-90' src={CubeLogo} width={500} height={500} />
            <div className="z-100 absolute bottom-5 left-5 right-5 flex flex-col gap-y-2 items-start">
                <h1 className="text-3xl font-semibold font-heading text-black">{heading}</h1>
                <h1 className=" text-base tracking-tight font-basic text-detail text-justify">{detail}</h1>
            </div>
        </div>
    )
}

export default DiamShapeCard