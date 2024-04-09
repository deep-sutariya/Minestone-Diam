"use client";

import useForm from "@/utils/useForm";

const Page = () => {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const submitForm = () => {
    console.log(values);
  };

  return (
    <div className=" flex justify-center items-center h-[100vh]">
      <div className=" mt-32 flex flex-col gap-y-4 sm:gap-y-8 shadow-xl grd backdrop-blur-3xl rounded-xl px-16 py-12 w-1/2">
        <div className=" font-bold text-3xl">Login</div>
        <div className=" flex flex-col gap-y-4 sm:gap-y-8">
          <div className="flex flex-col gap-y-2 font-heading w-full">
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
              Password<span className="text-red-500">*</span>
            </h1>
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
              className=" outline-none border border-zinc-400 py-2 px-4 sm:py-3 sm:px-5 rounded-lg text-base lg:text-lg"
            />
          </div>
        </div>

        <div
          onClick={submitForm}
          className=" py-2 px-5 sm:px-7 tracking-wide sm:font-semibold text-white cursor-pointer rounded-full bg-slate-900 w-1/4 text-center hover:bg-slate-200 hover:text-slate-900"
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Page;
