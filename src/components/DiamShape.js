import Image from 'next/image'
import DiamShapeCard from './DiamShapeCard'
import AnimatedBackground from './Animations/AnimatedBackground'

const DiamShape = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-10 pb-24 bg-white relative z-20'>
      <div className=' w-full h-1/2 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-72'>
        <Image className="noDrag" src='/Shapes.svg' width={1200} height={500} alt='img' onContextMenu={(e) => e.preventDefault()}/>
      </div>
      <div className=' px-5 sm:px-10 md:px-20 lg:px-40 xl:px-72 flex flex-col gap-y-6 sm:gap-4 md:gap-8 text-lg font-basic py-6'>
        <h1 className='text-2xl sm:text-3xl lg:text-5xl font-heading'>Why should one join Minestone Diam?</h1>
        {/* <p className=' text-xs sm:text-lg text-detail text-justify'>The quintessential Lab-grown Diamond Trading platform.</p> */}
        {/* <p className=' text-xs sm:text-lg text-detail text-justify'>Constantly evolving to meet the market needs & adding new features to the platform, Milestone Diam has quickly established itself as a market leader in the Lab-grown diamond trade sphere.</p> */}
      </div>

      {/* <div className='grid grid-cols-7 sm:grid-cols-5 gap-x-3 md:gap-x-6 mt-5 w-full'> */}
      <div className=' flex overflow-x-scroll gap-x-3 sm:gap-x-6 sm:px-5 mt-9 w-[95%] md:w-4/5 sc'>
        <DiamShapeCard
          heading="Trust and Security"
          detail="Buy high-quality diamonds with excellent cut and polish. Benefit from stringent quality control within a secure environment, ensuring robust security backed by industry authorities."
          direction=""
          CubeLogo="/features_1_1.jpg"
        />
        <DiamShapeCard
          heading="Effortless Buying"
          detail="Enjoy a seamless wholesale diamond buying experience that offers a variety of flexible payment methods tailored for your convenience."
          direction=""
          CubeLogo="/features_2_1.jpg"
        />
        <DiamShapeCard
          heading="Global Access"
          detail="Explore our extensive network that spans various countries, providing you access to a vast selection of different diamond mines and varieties meeting all your diverse requirements."
          direction=""
          CubeLogo="/features_3_1.jpg"
        />
        <DiamShapeCard
          heading="Diamond Emporium"
          detail="Experience quick and easy purchases with integrated shipping and invoicing designed to streamline buying process and ensure a smooth and efficient transaction every time."
          direction=""
          CubeLogo="/features_4_1.jpg"
        />
      </div>

    </div>
  )
}

export default DiamShape