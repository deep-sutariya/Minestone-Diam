import Image from 'next/image'
import React from 'react'
import TranslateFragment from './Animations/TranslateFragment'
import Link from 'next/link'
import FadeFragment from './Animations/FadeFragment'

const AffiliationCard = ({ name, des, src, x, y, link, classNames }) => {
    return (
        <FadeFragment>
            <div className=" w-[95%] sm:w-[75%] mx-auto py-4 px-1 lg:p-3 xl:p-5 bg-offwhite flex flex-col gap-y-2 hover:scale-105 hover:cursor-pointer duration-200 rounded-xl">
                <Link href={link} className=' hover:cursor-pointer'>
                    <div className='w-full h-24 md:h-24 lg:h-24 xl:h-32'>
                        <Image
                            className={classNames}
                            src={src}
                            width={1500}
                            height={1500}
                            alt={src}
                        />
                    </div>
                    {/* <div className='flex flex-col gap-y-1 xl:gap-y-3'>
                    <div className=' font-heading md:text-xl font-bold text-detail'>{name}</div>
                    <div className=' text-gray-500 text-xs md:text-sm lg:text-base text-justify'>{des}</div>
                </div> */}
                </Link>
            </div>
        </FadeFragment>
    )
}

export default AffiliationCard