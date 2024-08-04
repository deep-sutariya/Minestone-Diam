import PoliciesComponent from "@/components/PoliciesComponent"

const codeofconduct = () => {
    return (
        <div className="relative mt-36">
            <div className=" px-5 pt-10 pb-20 md:pt-12 md:pb-24 md:px-24 lg:px-80 flex flex-col items-center gap-y-16">
                <div>
                    <h1 className="font-heading text-3xl lg:text-5xl">Code of Conduct</h1>
                </div>
                <div className="flex flex-col gap-y-10">
                    <PoliciesComponent heading="Introduction" details={[
                        {title:"At Minestone Diam, we are dedicated to maintaining the highest standards of integrity, professionalism, and ethical behavior. Our Code of Conduct outlines the principles and behaviors expected from all employees, partners, and associates.", des:""},
                        ]} />
                    <PoliciesComponent heading="Integrity and Transparency" details={[
                        {title:"Honest Communication:", des:"Always provide truthful and accurate information in all dealings with clients and partners."},
                        {title:"Clear Transactions:", des:"Ensure that all business transactions are conducted transparently and in accordance with legal standards."},
                        ]} />
                    <PoliciesComponent heading="Respect and Professionalism" details={[
                        {title:"Client Relations:", des:"Treat all clients and partners with respect and courtesy, valuing their needs and opinions."},
                        {title:"Work Environment:", des:"Maintain a professional and respectful atmosphere within the workplace and during all business interactions."},
                        ]} />
                    <PoliciesComponent heading="Commitment to Quality" details={[
                        {title:"High Standards:", des:"Adhere to the highest standards of quality in all products and services offered."},
                        {title:"Continuous Improvement:", des:"Regularly evaluate and enhance practices to ensure ongoing excellence and client satisfaction."},
                        ]} />
                    <PoliciesComponent heading="Ethical Practices" details={[
                        {title:"Responsible Sourcing:", des:"Source materials responsibly, ensuring they meet ethical and environmental standards."},
                        {title:"Compliance:", des:"Follow all applicable laws and regulations related to the diamond trade and business operations."},
                        ]} />
                    <PoliciesComponent heading="Confidentiality and Data Protection" details={[
                        {title:"Protecting Information:", des:"Safeguard all sensitive and personal information obtained from clients and partners."},
                        {title:"Data Use:", des:"Use client and partner data only for its intended purpose and ensure it is stored securely."},
                        ]} />
                </div>
            </div>
        </div>
    )
}

export default codeofconduct