import AboutPage from "@/components/AboutPage";

export const metadata = {
  metadataBase: new URL('https://www.minestonediam.com'),
  title: {
    template: '%s',
    default: 'About Us | Minestone Diam',
  },
  keywords: [
    'Minestone Diam', 'diamond heritage', 'ethical diamond practices', 
    'diamond industry', 'diamond history', 'sustainable diamonds',
    'diamond trade', 'Surat diamonds', 'trusted diamond partner'
  ],
  openGraph:{
    title: "about",
    description: 'Discover the heritage and ethical practices of Minestone Diam in the diamond industry.',
    url: 'https://www.minestonediam.com/about',
  }
};


const Page = () => {
  return (
    <AboutPage />
  );
};

export default Page;
