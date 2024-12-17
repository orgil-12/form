export const StepTwo = ({ setCurrentStep }) => {
  return (
    <div className="w-screen h-screen flex items-center bg-slate-100  ">
      <div className="bg-white m-auto rounded-[8px] p-8 flex flex-col justify-between gap-[82px] ">
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
              <label htmlFor="email" className="flex gap-1">
                Email<p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="phone number" className="flex gap-1">
                Phone number<p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="password" className="flex gap-1">
                Password <p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="confirm password" className="flex gap-1">
                Confirm Password <p className="text-red-600">*</p>
              </label>
              <input
                type="text"
                className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"
              />
            </div>
          </form>
        </div>
        <div className="flex gap-2 w-[100%]">
          <button onClick={() => setCurrentStep(1)} className="border px-[10px] w-[40%] py-3 rounded-[6px] text-black">
          {"<"} Back
          </button>
          <button onClick={() => setCurrentStep(3)} className="bg-[#D6D8DB] px-[10px] w-[60%] py-3 rounded-[6px] text-[#A9ACAF] ">
            Continue 2/3 {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
