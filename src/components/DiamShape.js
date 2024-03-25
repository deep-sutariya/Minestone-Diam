import Image from 'next/image'
import DiamShapeCard from './DiamShapeCard'

const DiamShape = () => {
  return (
    <div className='flex flex-col justify-center items-center py-24 bg-white relative'>
      <div className=' w-full h-1/2 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-72'>
        <Image src='/Shapes.svg' width={1200} height={500} alt='img' />
      </div>
      <div className=' px-5 sm:px-10 md:px-20 lg:px-40 xl:px-72 flex flex-col gap-3 sm:gap-4 md:gap-8 text-lg font-basic pt-6'>
        <h1 className='text-3xl lg:text-5xl font-heading'>Why should one join Milestone Diam?</h1>
        <p className=' text-sm sm:text-lg text-detail text-justify'>The quintessential Lab-grown Diamond Trading platform.</p>
        <p className=' text-sm sm:text-lg text-detail text-justify'>Constantly evolving to meet the market needs & adding new features to the platform, Milestone Diam has quickly established itself as a market leader in the Lab-grown diamond trade sphere.</p>
      </div>

      {/* <div className='grid grid-cols-7 sm:grid-cols-5 gap-x-3 md:gap-x-6 mt-5 w-full'> */}
      <div className=' flex overflow-x-scroll gap-x-6 px-5 mt-9 w-4/5 sc'>
        <DiamShapeCard
          heading="Reliable."
          detail="Trusted & verified sellers. Certified products. Strict quality control. Secure network for trading. Data Protection. Backed by established organizations."
          direction=""
          CubeLogo="/features_1.jpg"
        />
        <DiamShapeCard
          heading="Simplified Solution."
          detail="Convenient buy-back facility. User friendly dashboard. Flexible payment options. 24 hour customer support."
          direction=""
          CubeLogo="/features_4.jpg"
        />
        <DiamShapeCard
          heading="Go Global."
          detail="Large network. Wide connectivity with across 20 plus countries. Over 15000 plus products."
          direction=""
          CubeLogo="/features_3.jpg"
        />
        <DiamShapeCard
          heading="One Stop Shop."
          detail="Convenience for both buyers & sellers. Quick buying & selling. Ease of doing business. Integrated shipping & invoicing. Fast-tracked business growth."
          direction=""
          CubeLogo="/features_2.jpg"
        />
      </div>

    </div>
  )
}

export default DiamShape