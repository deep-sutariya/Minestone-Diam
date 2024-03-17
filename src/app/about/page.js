import DiamShape from "@/components/DiamShape"

const page = () => {
  return (
    <div>
      <div className="h-screen w-full relative">
        <div className="h-full -z-50 absolute top-0 left-0">
          <video className="h-screen w-screen object-cover" autoPlay muted loop>
            <source src="/about_top_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col gap-y-6 pt-[60vh] sm:pt-72 text-white w-full sm:w-1/2 pl-6 sm:pl-24">
          <div className="flex flex-col justify-start items-start gap-y-1 font-heading tracking-wider text-3xl md:text-6xl">
            <h1>About Us</h1>
          </div>
          <p className=" w-10/12 sm:w-4/5 font-basic text-sm md:text-xl text-left">Minestone Diam is a well-established diamond partnership firm in Surat, Gujarat, India, with a presence in BDB Mumbai. We boast over three decades of experience in the diamond industry, officially registering as a firm in 2016. Our success is built on a solid foundation of heritage, ethics, and a commitment to providing exceptional value to our clients.</p>
        </div>
      </div>

      <DiamShape />

    </div>
  )
}

export default page