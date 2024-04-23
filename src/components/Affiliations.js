import AffiliationCard from "./AffiliationCard";

const Affiliations = () => {
  return (
    <div className=" w-full bg-black flex flex-col lg:px-5 pt-20 pb-28 md:px-2 md:py-20  md:gap-y-10 justify-center items-center text-offwhite">
      <h1 className=" text-2xl md:text-4xl lg:text-5xl uppercase font-heading">Affiliations</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-3 sm:gap-x-6 px-0 mt-9 w-[95%] md:w-4/5 sc'>
        <AffiliationCard
          x={-100}
          src="/Affiliation_gjepc.png"
          name="GJEPC(Gem & Jewellery Export Promotion Council)"
          des="Explore the vibrant world of gemstones and jewelry with GJEPC, a premier organization driving India's gem and jewelry exports. Discover exquisite craftsmanship, innovative designs, and a rich heritage that shines through every piece."
        />
        <AffiliationCard
          x={100}
          src="/Affiliation_okavango.png"
          name="ODC(Okavango Diamond Company)"
          des=" Delve into the fascinating realm of diamonds with ODC, Botswana's leading diamond trading company. Experience the allure of responsibly sourced diamonds, each reflecting the natural beauty and brilliance of the Okavango region."
        />
      </div>
    </div>
  );
};

export default Affiliations;
