import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactCard = ({ type, details }) => {
  return (
    <div
      className={` w-full flex flex-col items-center gap-y-3 md:gap-y-5`}
    >
      <div className=" bg-gray-800 hover:bg-col1 p-2 md:p-3 lg:p-4 text-white rounded-full">
        {type == "Call" ? (
          <FiPhoneCall className=" w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
        ) : type == "Email" ? (
          <HiOutlineMail className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
        ) : (
          <HiOutlineLocationMarker className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
        )}
      </div>
      <div className="flex flex-col font-heading text-center">
        <div className=" text-sm md:text-xl capitalize lg:tracking-wider">
          {type}
        </div>
        <div className=" text-sm md:text-lg font-extrabold lg:tracking-wider">
          {details}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
