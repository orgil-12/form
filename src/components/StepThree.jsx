import { useEffect, useState } from "react";
import { Input } from "@/components/input";
import { ImageInput } from "./ImageInput";
import { validateStepThree } from "@/utils/validate";
import { RemoveSVG } from "./RemoveSVG";

export const StepThree = ({ setCurrentStep, onChange, form, errors }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const handleFileChange = (event) => {
    const file = event?.target?.files[0];
    if (!file) return;
    const objUrl = URL.createObjectURL(file);
    setSelectedImage(objUrl);
    const fileEvent = {
      target: { value: file, id: event.target.id },
    };
    onChange(fileEvent);
  };

  const isContinie =
    (form.date !== "") & (form.image !== "")
      ? "bg-black text-white"
      : "bg-[#D6D8DB] text-[#A9ACAF]";

  return (
    <div className="w-screen h-screen flex items-center bg-slate-100">
      <div className="w-[480px] bg-white m-auto rounded-[8px] p-8 flex flex-col justify-between gap-[100px] ">
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
            {selectedImage ? (
              <div className="relative">
                <img src={selectedImage} alt="" />
                <div
                  onClick={() => {
                    setSelectedImage("");
                  }}
                  className="absolute top-4 right-4"
                >
                  <RemoveSVG />
                </div>
              </div>
            ) : (
              <ImageInput
                onChange={handleFileChange}
                form={form}
                id="image"
                value={form?.image}
                error={errors.image}
                type={"file"}
              />
            )}
          </form>
        </div>
        <div className="flex gap-2 w-[100%]">
          <button
            onClick={() => setCurrentStep(2)}
            className="border px-[10px] w-[40%] py-3 rounded-[6px] text-black before:content-['<'] before:mr-3"
          >
            Back
          </button>
          <button
            onClick={() => {
              // const { isValide, newErrors } = validateStepThree(form);
              setCurrentStep(4);
            }}
            className={`${isContinie} px-[10px] w-[60%] py-3 rounded-[6px] after:content-['>'] after:ml-3 `}
          >
            Continue 3/3
          </button>
        </div>
      </div>
    </div>
  );
};
