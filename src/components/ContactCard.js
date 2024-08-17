import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactCard = ({ type, details }) => {
  return (
    <div
      className={` w-full flex flex-col items-center gap-y-3 md:gap-y-5`}
    >
      <div className="">
        {type == "Call" ? (
          <Link href="tel:+919328349312">
            <div className=" bg-gray-800 hover:bg-col1 p-2 md:p-3 lg:p-4 text-white rounded-full cursor-pointer">
              <FiPhoneCall className=" w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            </div>
          </Link>
        ) : type == "Email" ? (
          <Link href="mailto:info@minestonediam.com">
            <div className=" bg-gray-800 hover:bg-col1 p-2 md:p-3 lg:p-4 text-white rounded-full cursor-pointer">
              <HiOutlineMail className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            </div>
          </Link>
        ) : type == "HQ" ? (
          <Link href="https://maps.app.goo.gl/d1spSiZtBQwQDfQM7">
            <div className=" bg-gray-800 hover:bg-col1 p-2 md:p-3 lg:p-4 text-white rounded-full cursor-pointer">
              <HiOutlineLocationMarker className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            </div>
          </Link>
        ) : (
          <Link href="https://maps.app.goo.gl/WphrhTNSKqrP1m4c6">
            <div className=" bg-gray-800 hover:bg-col1 p-2 md:p-3 lg:p-4 text-white rounded-full cursor-pointer">
              <HiOutlineLocationMarker className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            </div>
          </Link>
        )}
      </div>
      <div className="flex flex-col font-heading text-center">
        <div className=" text-sm md:text-xl capitalize lg:tracking-wider">
          {type}
        </div>
        <div className=" text-sm md:text-lg font-extrabold lg:tracking-wider">
          {
            (type == "Email" || type == "Call") ?
              <Link href={`${type == "Email" ? "mailto:info@minestonediam.com" : type == "Call" ? "tel:+919328349312" : ""} `}>
                {details}
              </Link>
              :
              `${details}`
          }
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
