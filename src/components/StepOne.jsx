import { useState } from "react";

export const StepOne = ({ setCurrentStep, onChange, form, checkForm }) => {
  const check = false;
  const isChecked = checkForm() === true && form?.firstname !== '' ? "bg-black text-white" : "bg-[#D6D8DB] text-[#A9ACAF]";
  const isContinue = () =>{
    checkForm() === true && form?.firstname !== '' ? setCurrentStep(2) : setCurrentStep(1);
  } 
  const error = checkForm() === "false1" ? "block" : "hidden"
  const error2 = checkForm() === "false2" ? "block" : "hidden"
  const error3 = checkForm() === "false3" ? "block" : "hidden"
  return (
    <div className="w-screen h-screen flex items-center bg-slate-100  ">
      <div className="w-[480px] h-[655px] bg-white m-auto rounded-[8px] p-8 flex flex-col justify-between">
        <div className=" flex flex-col gap-[28px] ">
          <div className=" ">
            <img src="Logo.svg" alt="" />
            <h1 className="text-[26px] font-semibold ">Join US! 😎</h1>
            <p className="text-[#8E8E8E] text-[18px] ">
              Please provide all current information accurately.
            </p>
          </div>
          <form action="" className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="firstname"
                className="flex after:content-['*'] after:text-red-500 after:ml-1 "
              >
                First name
              </label>
              <input
                id="firstname"
                value={form.firstname}
                required
                type="text"
                className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"
                onChange={onChange}
              />
              <p className={`${error} , text-black`}> error</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="lastname"
                className="flex after:content-['*'] after:text-red-500 after:ml-1"
              >
                Last name
              </label>
              <input
                id="lastname"
                value={form.lastname}
                required
                type="text"
                className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"
                onChange={onChange}
              />
              <p className={`${error2} , text-black`}> error</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="username"
                className="flex after:content-['*'] after:text-red-500 after:ml-1"
              >
                Username
              </label>
              <input
                id="username"
                value={form.username}
                required
                type="text"
                className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"
                onChange={onChange}
              />
            </div>
          </form>
        </div>
        <div onClick={() => isContinue()}>
          <button className={`${isChecked} px-[10px] py-3 w-[100%] rounded-[6px] after:content-['>'] after:ml-3` }>
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
};
