import Image from 'next/image'
import React from 'react'

const AffiliationCard = ({ name, des, src }) => {
    return (
        <div className=" w-[95%] md:w-full mx-auto py-4 px-4 lg:p-4 xl:p-6 bg-offwhite flex flex-col gap-y-2 hover:scale-105 hover:cursor-pointer duration-200">
            <div className='w-full h-20 md:h-24 lg:h-28 xl:h-40'>
                <Image
                    className=" w-full h-20 md:h-24 lg:h-28 xl:h-40"
                    src={src}
                    width={500}
                    height={500}
                    alt={src}
                />
            </div>
            <div className='flex flex-col gap-y-1 xl:gap-y-3'>
                <div className=' font-heading md:text-xl font-bold text-detail'>{name}</div>
                <div className=' text-gray-500 text-xs md:text-sm lg:text-base text-justify'>{des}</div>
            </div>
        </div>
    )
}

export default AffiliationCard