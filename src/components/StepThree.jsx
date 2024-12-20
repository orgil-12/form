import { useEffect, useState } from "react";
import { Calendar } from "./Calendar";
import { Input } from "@/components/input";
import { ImageInput } from "./ImageInput";

export const StepThree = ({ setCurrentStep, onChange, form, errors }) => {
  const handleFileChange = (event) => {
    const file = event.target.value;
    console.log(file);
    const image = URL.createObjectURL(file);
    return;
  };

  return (
    <div className="w-screen h-screen flex items-center bg-slate-100">
      <div className="w-[480px] h-[655px] bg-white m-auto rounded-[8px] p-8 flex flex-col justify-between ">
        <div className=" flex flex-col gap-[28px] ">
          <div className=" ">
            <img src="Logo.svg" alt="" />
            <h1 className="text-[26px] font-semibold ">Join US! 😎</h1>
            <p className="text-[#8E8E8E] text-[18px] ">
              Please provide all current information accurately.
            </p>
          </div>
          <form action="" className="flex flex-col gap-3 ">
            <Input
              label={"Date of birth"}
              onChange={onChange}
              form={form}
              id="date"
              value={form?.date}
              error={errors.date}
              type={"date"}
            />
            <ImageInput
              onChange={handleFileChange}
              form={form}
              id="image"
              value={form?.image}
              error={errors.image}
              type={"file"}
            />
          </form>
        </div>
        <div className="flex gap-2 w-[100%]">
          <button
            onClick={() => setCurrentStep(2)}
            className="border px-[10px] w-[40%] py-3 rounded-[6px] text-black before:content-['<'] before:mr-3"
          >
            Back
          </button>
          <button className="bg-[#D6D8DB] px-[10px] w-[60%] py-3 rounded-[6px] text-[#A9ACAF] after:content-['>'] after:ml-3 ">
            Continue 3/3
          </button>
        </div>
      </div>
    </div>
  );
};
