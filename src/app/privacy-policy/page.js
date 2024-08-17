import PoliciesComponent from "@/components/PoliciesComponent"

export const metadata = {
    metadataBase: new URL('https://www.minestonediam.com'),
    title: {
        template: '%s | Minestone Diam',
        default: 'Privacy Policy | Minestone Diam',
    },
    keywords: [
        'Minestone Diam', 'privacy policy', 'data protection',
        'personal information', 'privacy practices', 'diamond industry',
        'trusted diamond partner', 'ethical diamonds', 'Surat diamonds'
    ],
    openGraph: {
        description: 'Read the Privacy Policy of Minestone Diam to understand how we handle your personal information.',
    }
};


const privacy_policy = () => {
    return (
        <div className="relative mt-36">
            <div className=" px-5 pt-10 pb-20 md:pt-12 md:pb-24 md:px-24 lg:px-80 flex flex-col items-center gap-y-16">
                <div>
                    <h1 className="font-heading text-3xl lg:text-5xl">Privacy Policy</h1>
                </div>
                <div className="flex flex-col gap-y-10">
                    <PoliciesComponent heading="Overview" details={[
                        { title: "Minestone Diam, a prominent diamond firm based in Surat, Gujarat, is committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our website and services.", des: "" },
                    ]} />
                    <PoliciesComponent heading="Information We Collect" details={[
                        { title: "Personal Information:", des: "When you visit our site or contact us, we may collect personal information such as your name, email address, and contact details." },
                        { title: "Usage Data:", des: "We collect data on how you use our website, including IP address, browser type, and pages visited, to enhance your experience." },
                        { title: "Cookies:", des: "Our site uses cookies to remember your preferences and improve functionality. You can control cookie settings through your browser." },
                    ]} />
                    <PoliciesComponent heading="How We Use Your Information" details={[
                        { title: "Improving Services:", des: "We use your information to enhance and personalize your experience on our website." },
                        { title: "Communication:", des: "We may contact you with updates, offers, or information relevant to our services, but you can opt out of these communications at any time." },
                    ]} />
                    <PoliciesComponent heading="Data Protection" details={[
                        { title: "Security Measures: ", des: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse." },
                        { title: "Data Retention:", des: "We retain your information only as long as necessary for the purposes outlined in this policy or as required by law." },
                    ]} />
                    <PoliciesComponent heading="Third-Party Links" details={[
                        { title: "Our website may contain links to third-party sites. We are not responsible for their privacy practices. Please review the privacy policies of any third-party sites you visit.", des: "" },
                    ]} />
                    <PoliciesComponent heading="Changes to This Policy" details={[
                        { title: "We may update this Privacy Policy from time to time. Any changes will be posted on our website, and your continued use of the site constitutes acceptance of the updated policy.", des: "" },
                    ]} />
                    <PoliciesComponent heading="Contact Us" details={[
                        { title: "If you have any questions or concerns about this Privacy Policy, please contact us at: minestonediam@gmail.com", des: "" },
                    ]} />
                </div>
            </div>
        </div>
    )
}

export default privacy_policy