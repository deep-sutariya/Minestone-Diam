import Image from 'next/image'
import NumbersDisplay from './NumbersDisplay'

const NumbersSlide = () => {
  return (
    <div className=' px-2 flex flex-col gap-y-8 sm:gap-y-12 lg:gap-y-16 justify-center items-center bg-offwhite py-16 sm:py-24'>
        <div>
            <Image src='/Home_No_Img.png' width={1100} height={1100} alt="Numbers Image"/>
        </div>
        <div className='w-full items-center justify-around flex gap-x-2 sm:gap-x-20 xl:gap-x-24'>
            {/* <NumbersDisplay number="5000+" detail="Stones Listed" />
            <NumbersDisplay number="500+" detail="Active Buyers" />
            <NumbersDisplay number="$1 Million+" detail="Trading done" /> */}
        </div>
    </div>
  )
}

export default NumbersSlide