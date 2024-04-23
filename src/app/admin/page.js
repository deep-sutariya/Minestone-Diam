"use client";

import MessageCard from "@/components/MessageCard";
import useForm from "@/utils/useForm";
import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {
  const [login, setLogin] = useState(false);

  const [errmsg, setErrMsg] = useState("");

  const [messages, setMessages] = useState([]);

  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const fetchMessage = async () => {
    try {
      const data = await axios.get("/api/message");
      if (data?.status === 200) {
        setMessages(data?.data);
      }
    } catch (e) {
      console.log("Error fetching messages", e);
    }
  }

  useEffect(() => {
    if (login == false) {
      const state = localStorage.getItem("login");
      setLogin(state);
    }
    fetchMessage();
  }, [login])

  useEffect(() => {
    console.log(messages);
  }, [messages])

  const submitForm = () => {
    if (values.email.trim() == "admin@minestone.diam" && values.password.trim() == "Minestone@Diam") {
      setLogin(true);
      localStorage.setItem("login", true);
      setErrMsg("");
      handleChange({ target: { name: "email", value: "" } });
      handleChange({ target: { name: "password", value: "" } });
      alert("Login Success!");
    } else {
      setErrMsg("Wrong Input");
    }
  }

  return (
    <div className=" flex justify-center items-center mt-48 mb-20">
      {
        !login ?
          <div className="bg-gradient-to-l from-col1 to-col2 mt-32 flex flex-col gap-y-4 sm:gap-y-8 shadow-xl rounded-xl px-16 py-12 w-1/2">
            <div className=" font-bold text-3xl">Login</div>
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
              className=" py-2 px-5 sm:px-7 tracking-wide sm:font-semibold text-white cursor-pointer rounded-full bg-slate-900 w-1/4 text-center hover:bg-slate-200 hover:text-slate-900"
            >
              Login
            </div>
          </div>
          :
          <div className=" flex flex-col gap-y-20 justify-center items-center">
            <div className=" font-heading text-4xl border-b-2 border-gray-400">Messages</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 px-5 md:px-10 lg:px-20">
              {
                messages.length > 0 && messages.map((val, index) => {
                  return <MessageCard key={index} name={val?.name} email={val?.email} company={val?.company} message={val?.message} id={val?._id} fetchMessage={fetchMessage}/>
                })
              }
            </div>
          </div>
      }
    </div>
  );
};

export default Page;
