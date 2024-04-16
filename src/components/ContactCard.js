import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactCard = ({ type, details }) => {
  return (
    <div
      className={` w-full flex flex-col items-center gap-y-3 md:gap-y-5`}
    >
      <div className=" bg-gray-800 p-3 md:p-4 lg:p-6 text-white rounded-full">
        {type == "Call" ? (
          <FiPhoneCall className=" w-6 h-6 md:w-10 md:h-10 lg:w-16 lg:h-16" />
        ) : type == "Email" ? (
          <HiOutlineMail className="w-6 h-6 md:w-10 md:h-10 lg:w-16 lg:h-16" />
        ) : (
          <HiOutlineLocationMarker className="w-6 h-6 md:w-10 md:h-10 lg:w-16 lg:h-16" />
        )}
      </div>
      <div className="flex flex-col font-heading text-center">
        <div className=" text-xs lg:text-xl capitalize lg:tracking-wider">
          {type}
        </div>
        <div className=" text-base lg:text-2xl font-extrabold lg:tracking-wider">
          {details}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
