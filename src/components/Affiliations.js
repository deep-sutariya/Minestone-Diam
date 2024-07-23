import AffiliationCard from "./AffiliationCard";

const Affiliations = () => {
  return (
    <div className=" w-full bg-[#252525] flex flex-col lg:px-5 pt-10 pb-16 md:px-2 md:py-20  md:gap-y-10 justify-center items-center text-offwhite">
      <h1 className=" text-2xl md:text-4xl lg:text-5xl uppercase font-heading text-[#f0c200] tracking-wider">Affiliations</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-1 sm:gap-x-0 px-1 mt-9 w-[80%] md:w-[90%]'>
        <AffiliationCard
          link="https://gjepc.org/"
          y={-100}
          classNames="w-full h-24 md:h-24 lg:h-24 xl:h-32"
          src="/Affiliation_gjepc.png"
          name="GJEPC(Gem & Jewellery Export Promotion Council)"
          des="Explore the vibrant world of gemstones and jewelry with GJEPC, a premier organization driving India's gem and jewelry exports. Discover exquisite craftsmanship, innovative designs, and a rich heritage that shines through every piece."
        />
        <AffiliationCard
          link="https://www.odc.co.bw/"
          y={-100}
          classNames="w-full h-24 md:h-24 lg:h-24 xl:h-32"
          src="/Affiliation_okavango.png"
          name="ODC(Okavango Diamond Company)"
          des="Delve into the fascinating realm of diamonds with ODC, Botswana's leading diamond trading company. Experience the allure of responsibly sourced diamonds, each reflecting the natural beauty and brilliance of the Okavango region."
        />
        <AffiliationCard
          link="https://bdbindia.org/"
          y={100}
          classNames="w-full h-28 md:h-24 xl:h-28 pb-5 px-6 md:px-4 md:pb-0 md:pt-3"
          src="/Affiliation_BDB.png"
          name="BDB(Bharat Diamond Bourse)"
          des="Delve into the fascinating realm of diamonds with ODC, Botswana's leading diamond trading company. Experience the allure of responsibly sourced diamonds, each reflecting the natural beauty and brilliance of the Okavango region."
        />
      </div>
    </div>
  );
};

export default Affiliations;
