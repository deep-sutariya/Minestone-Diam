import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: {
    template: '%s | Minestone Diam',
    default: 'Contact Us | Minestone Diam',
  },
  penGraph: {
    title: "contact",
    url: 'https://www.minestonediam.com/contact',
    description: 'Get in touch with Minestone Diam for inquiries about our products and services.',
  },
  keywords: [
    'Minestone Diam', 'contact Minestone', 'diamond inquiries', 
    'diamond services', 'Surat diamonds', 'diamond industry',
    'trusted diamond partner', 'diamond sourcing', 'ethical diamonds'
  ],
  metadataBase: new URL('https://www.minestonediam.com'),
};


const page = () => {
  return (
    <ContactPage />
  );
};

export default page;
