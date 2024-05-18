"use client";

import { EmailValidator, RequierdValidation } from "@/utils/FormValidation";
import useForm from "@/utils/useForm";
import { useEffect, useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [error, setError] = useState();

  const clearForm = () => {
    values.name = "";
    values.email = "";
    values.company = "";
    values.message = "";
  };

  const showErroBg = (code = 0) => {
    Object.keys(values).filter((val) => {
      if (values[val] == "" || (code == 1 && val == "email")) {
        document.getElementsByName(val)[0].style.background = "#FFE0E0";
      } else {
        document.getElementsByName(val)[0].style.background = "#FFFFFF";
      }
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const { msg, val } = RequierdValidation(values);
    if (val == -1) {
      showErroBg();
      setError(msg);
    } else if (EmailValidator(values.email)) {

      try {
        const data = await axios.post("/api/message", values);
        if (data?.status === 200) {
          alert(data?.data)
          setError("");
          showErroBg(0);
          clearForm();
        }

      } catch (e) {
        console.log("Error Sending Message", e);
      }

    } else {
      showErroBg(1);
      setError("Email is not valid!");
    }
  };

  return (
    <div className=" flex flex-col gap-y-4 sm:gap-y-8">
      <div className=" grid grid-col-1 sm:grid-cols-3 gap-x-5 gap-y-4 sm:gap-y-8">
        <div className="flex flex-col gap-y-2 font-heading">
          <h1 className=" font-bold tracking-wider text-base lg:text-lg">
            Full Name<span className="text-red-500">*</span>
          </h1>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            className=" outline-none border border-zinc-400 py-2 px-4 sm:py-3 sm:px-5 rounded-lg text-base lg:text-lg"
          />
        </div>

        <div className="flex flex-col gap-y-2 font-heading">
          <h1 className=" font-bold tracking-wider text-base lg:text-lg">
            Email<span className="text-red-500">*</span>
          </h1>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            className=" outline-none border border-zinc-400 py-2 px-4 sm:py-3 sm:px-5 rounded-lg text-base lg:text-lg"
          />
        </div>

        <div className="flex flex-col gap-y-2 font-heading">
          <h1 className=" font-bold tracking-wider text-base lg:text-lg">
            Company Name<span className="text-red-500">*</span>
          </h1>
          <input
            name="company"
            value={values.company}
            onChange={handleChange}
            className=" outline-none border  border-zinc-400 py-2 px-4 sm:py-3 sm:px-5 rounded-lg text-base lg:text-lg"
          />
        </div>

        <div className="flex flex-col gap-y-2 font-heading sm:col-span-3">
          <h1 className=" font-bold tracking-wider text-base lg:text-lg">
            Message<span className="text-red-500">*</span>
          </h1>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows="5"
            className=" resize-none outline-none border  border-zinc-400 py-2 px-4 sm:py-3 sm:px-5 rounded-lg text-base lg:text-lg"
          />
          <h1 className=" h-4 mt-2 font-bold tracking-wider text-base lg:text-lg">
            <span className="text-red-500">{error}</span>
          </h1>
        </div>
      </div>

      <div
        onClick={submitForm}
        className="py-2 px-5 sm:px-7 tracking-wide sm:font-semibold text-white cursor-pointer rounded-full bg-[#252525] w-fit hover:bg-col1 hover:font-bold"
      >
        Send us
      </div>
    </div>
  );
};

export default ContactForm;
