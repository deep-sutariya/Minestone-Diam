import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {

    const NavData = [
        { name: "About Us", link: "/about" },
        { name: "Our Work", link: "/work" },
        { name: "Why Us?", link: "/whyus" },
        { name: "Contact Us", link: "/contact" }
    ]

    return (
        <nav className="w-full bg-offwhite text-detail flex justify-between items-center py-4 px-20">
            <div className=" drop-shadow-xl">
                <Image className=" drop-shadow-lg" src='/Logo.png' width={110} height={110} />
            </div>
            <ui className="flex gap-x-8">
                {
                    NavData.map((data, ind) => {
                        return <li key={ind} className=" font-bold tracking-widest uppercase font-heading text-lg list-none hover:text-blue delay-150 hover:font-semibold ">
                            <Link href={data.link}>{data.name}</Link>
                        </li>
                    })
                }
            </ui>
        </nav>
    )
}

export default Navbar