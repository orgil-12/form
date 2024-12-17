import { Calendar } from "./Calendar";

export const StepThree = ({ setCurrentStep }) => {
  return (
    <div className="w-screen h-screen flex items-center bg-slate-100" >
      <div className="bg-white m-auto rounded-[8px] p-8 flex flex-col justify-between gap-[142px] ">
        <div className=" flex flex-col gap-[28px] ">
          <div className=" ">
            <img src="Logo.svg" alt="" />
            <h1 className="text-[26px] font-semibold ">Join US! 😎</h1>
            <p className="text-[#8E8E8E] text-[18px] ">
              Please provide all current information accurately.
            </p>
          </div>
          <form action="" className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-2  ">
              <label htmlFor="date" className="flex gap-1">
                Date of birth <p className="text-red-600">*</p>
              </label>
              <div className="flex items-center border border-[#CBD5E1] hover:border-blue-400 rounded-[8px] px-3">
                <input
                  type="date"
                  className=" outline-none w-[100%]  p-3 "
                  placeholder={`--/--/-- `}
                />
                {/* <Calendar /> */}
              </div>
            </div>

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-[180px] rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <img src="image.svg" alt="" />
                  <p className="mb-2 text-sm text-[#09090B] dark:text-gray-400">Add image</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </form>
        </div>
        <div className="flex gap-2 w-[100%]">
          <button onClick={() => setCurrentStep(2)} className="border px-[10px] w-[40%] py-3 rounded-[6px] text-black">
          {"<"} Back
          </button>
          <button className="bg-[#D6D8DB] px-[10px] w-[60%] py-3 rounded-[6px] text-[#A9ACAF] ">
            Continue 3/3 {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
