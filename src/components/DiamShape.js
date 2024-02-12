import Image from 'next/image'
import DiamShapeCard from './DiamShapeCard'

const DiamShape = () => {
  return (
    <div className='flex flex-col justify-center items-center py-24 px-72 bg-white'>
      <div className=' w-full h-1/2'>
        <Image src='/Shapes.svg' width={1200} height={500} />
      </div>
      <div className=' flex flex-col gap-8 text-lg font-basic pt-6 px-16'>
        <h1 className='text-5xl font-heading'>Why should one join Milestone Diam?</h1>
        <p>The quintessential Lab-grown Diamond Trading platform.</p>
        <p>Constantly evolving to meet the market needs & adding new features to the platform, Milestone Diam has quickly established itself as a market leader in the Lab-grown diamond trade sphere.</p>
      </div>

      <div className='grid grid-cols-5 gap-x-6 mt-5 w-full'>
        <DiamShapeCard
          heading="Reliable."
          detail="Trusted & verified sellers. Certified products. Strict quality control. Secure network for trading. Data Protection. Backed by established organizations."
          direction="mr-auto col-span-3"
          CubeLogo="/features_1.jpg"
        />
        <DiamShapeCard
          heading="Simplified Solution."
          detail="Convenient buy-back facility. User friendly dashboard. Flexible payment options. 24 hour customer support."
          direction="ml-auto col-span-2"
          CubeLogo="/features_4.jpg"
        />
        <DiamShapeCard
          heading="Go global."
          detail="Large network. Wide connectivity with across 20 plus countries. Over 15000 plus products."
          direction="mr-auto col-span-2"
          CubeLogo="/features_3.jpg"
        />
        <DiamShapeCard
          heading="One Stop Shop."
          detail="Convenience for both buyers & sellers. Quick buying & selling. Ease of doing business. Integrated shipping & invoicing. Fast-tracked business growth."
          direction="ml-auto col-span-3"
          CubeLogo="/features_2.jpg"
        />
      </div>

    </div>
  )
}

export default DiamShape