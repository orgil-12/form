export const StepOne = ({ setCurrentStep }) => {
  return (
    <div className="w-screen h-screen flex items-center bg-slate-100  ">
      <div className="bg-white m-auto rounded-[8px] p-8 flex flex-col justify-between gap-[162px] ">
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
                <label htmlFor="firstname" className="flex gap-1">First name <p className="text-red-600">*</p></label>
                <input type="text" className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"/>
            </div>
            <div className="flex flex-col gap-2 ">
                <label htmlFor="lastname" className="flex gap-1">Last name <p className="text-red-600">*</p></label>
                <input type="text" className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"/>
            </div>
            <div className="flex flex-col gap-2 ">
                <label htmlFor="username" className="flex gap-1">Username <p className="text-red-600">*</p></label>
                <input type="text" className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"/>
            </div>
          </form>
        </div>
        <div onClick={() => setCurrentStep(2)}>
            <button className="bg-[#D6D8DB] px-[10px] py-3 w-[100%] rounded-[6px] text-[#A9ACAF] ">Continue 1/3 {">"}</button>
        </div>
      </div>
    </div>
  );
};
