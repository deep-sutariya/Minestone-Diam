import WorkPage from "@/components/WorkPage";

export const metadata = {
  metadataBase: new URL('https://www.minestonediam.com'),
  title: {
    template: '%s | Minestone Diam',
    default: 'Why Choose Us | Minestone Diam',
  },
  keywords: [
    'Minestone Diam', 'why choose Minestone', 'diamond quality',
    'ethical diamonds', 'sustainable practices', 'diamond craftsmanship',
    'trusted diamond partner', 'diamond sourcing', 'diamond trade'
  ],
  openGraph: {
    title: "work",
    url: 'https://www.minestonediam.com/work',
    description: 'Understand why Minestone Diam stands out in the diamond industry with our commitment to quality and ethics.',
  }
};


const page = () => {
  return (
    <WorkPage />
  );
};

export default page;
