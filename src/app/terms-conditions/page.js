import PoliciesComponent from "@/components/PoliciesComponent"

const termsandconditions = () => {
    return (
        <div className="relative mt-36">
            <div className=" px-5 pt-10 pb-20 md:pt-12 md:pb-24 md:px-24 lg:px-80 flex flex-col items-center gap-y-16">
                <div>
                    <h1 className="font-heading text-3xl lg:text-5xl">Terms & Conditions</h1>
                </div>
                <div className="flex flex-col gap-y-10">
                    <PoliciesComponent heading="1. General Terms" details={[
                        {title:"Welcome to www.minestonediam.vercel.app (referred to as the 'Site'). This Site is owned and operated by Minestone Diam ('we', 'us', 'our'). By accessing or using this Site and our services ('Services'), you agree to comply with and be bound by these Terms and Conditions ('Terms').", des:""},
                        {title:"Please read these Terms carefully. If you do not agree with any part of these Terms, you should not use this Site or our Services. By using the Site, you confirm that you have the legal authority to enter into this agreement and to use our Services as outlined.", des:""},
                        {title:"We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site after such changes indicates your acceptance of the new Terms.", des:""},
                        ]} />
                    <PoliciesComponent heading="2. Website Usage" details={[
                        {title:"To use this Site, you must be at least 18 years old. By accessing or using the Site, you confirm that you meet this age requirement. Minestone Diam grants you a limited, non-exclusive, non-transferable, and revocable license to use the Site in accordance with these Terms.", des:""},
                        {title:"You agree to use the Site and Services for lawful purposes only. You are solely responsible for compliance with any applicable local laws.", des:""},
                        ]} />
                </div>
            </div>
        </div>
    )
}

export default termsandconditions