"use client";

import MessageCard from "@/components/MessageCard";
import useForm from "@/utils/useForm";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errmsg, setErrMsg] = useState("");

  const [messages, setMessages] = useState([]);

  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const fetchMessage = async () => {
    try {
      setLoading(true)
      const data = await axios.get("/api/message");
      if (data?.status === 200) {
        setMessages(data?.data);
      }
      setLoading(false)
    } catch (e) {
      console.log("Error fetching messages", e);
    }
  }

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem("login"));
    console.log("-->", state);
    setLogin(state);
    fetchMessage();
  }, [])

  const submitForm = () => {
    if (values.email.trim() == "admin@minestone.diam" && values.password.trim() == "Minestone@Diam") {
      setLogin(true);
      localStorage.setItem("login", JSON.stringify("true"));
      setErrMsg("");
      handleChange({ target: { name: "email", value: "" } });
      handleChange({ target: { name: "password", value: "" } });
      alert("Login Success!");
    } else {
      setErrMsg("Wrong Input");
    }
  }

  return (
    <div className=" flex justify-center items-center min-h-screen">
      {
        login ?
          <div className=" flex flex-col gap-y-8 md:gap-y-10 lg:gap-y-20 justify-center items-center mt-32 mb-10 md:mt-44 md:mb-20 w-full">
            {
              loading ?
                <div className=" absolute -z-50 w-full flex justify-center items-center h-[100vh]">
                  <Image
                    className="animate-pulse duration-75 drop-shadow-xl w-12 h-12 md:w-24 md:h-24"
                    src="/Logo.png"
                    width={80}
                    height={80}
                    priority="true"
                    alt="logo"
                  />
                </div>
                :
                <>
                  <div className=" font-heading text-xl lg:text-4xl border-b-2 border-gray-400">Message</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-8 px-3 md:px-10 w-full">
                    {
                      messages.length > 0 && messages.map((val, index) => {
                        return <MessageCard key={index} name={val?.name} email={val?.email} company={val?.company} message={val?.message} id={val?._id} fetchMessage={fetchMessage} />
                      })
                    }
                  </div>
                </>
            }
          </div>
          :
          <div className=" bg-slate-200 mt-32 flex flex-col gap-y-4 md:gap-y-8 shadow-xl rounded-xl px-6 py-6 md:px-16 md:py-12 w-full md:w-1/2 mx-5">
            <div className=" font-bold text-xl md:text-3xl mb-4 md:mb-0">Login</div>
            <div className=" flex flex-col gap-y-4 sm:gap-y-8">
              <div className="flex flex-col gap-y-2 font-heading w-full">
                <h1 className=" font-bold tracking-wider text-base lg:text-lg">
                  Email<span className="text-red-500">*</span>
                </h1>
                <input
                  required
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className=" outline-none border border-zinc-400 py-2 px-4 sm:py-3 sm:px-5 rounded-lg text-base lg:text-lg"
                />
              </div>

              <div className="flex flex-col gap-y-2 font-heading">
                <h1 className=" font-bold tracking-wider text-base lg:text-lg">
                  Password<span className="text-red-500">*</span>
                </h1>
                <input
                  required
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className=" outline-none border border-zinc-400 py-2 px-4 sm:py-3 sm:px-5 rounded-lg text-base lg:text-lg"
                />
              </div>
            </div>

            <div className=" text-red-800 tracking-wider font-bold font-heading">{errmsg}</div>
            <div
              onClick={submitForm}
              className=" py-2 px-4 md:py-3 md:px-5 sm:px-7 tracking-wide sm:font-semibold text-white cursor-pointer rounded-full bg-col2 text-center hover:bg-col1"
            >
              Login
            </div>

          </div>
      }
    </div>
  );
};

export default Page;
