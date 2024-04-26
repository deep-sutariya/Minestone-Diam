import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactCard = ({ type, details }) => {
  return (
    <div
      className={` w-full flex flex-col items-center gap-y-3 md:gap-y-5`}
    >
      <div className=" bg-gray-800 p-2 md:p-3 lg:p-4 text-white rounded-full">
        {type == "Call" ? (
          <FiPhoneCall className=" w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12" />
        ) : type == "Email" ? (
          <HiOutlineMail className="w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12" />
        ) : (
          <HiOutlineLocationMarker className="w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12" />
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
