export const StepTwo = ({ setCurrentStep, onChange, form}) => {
  return (
    <div className="w-screen h-screen flex items-center bg-slate-100  ">
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
            <div className="flex flex-col gap-2 ">
              <label htmlFor="email" className="flex after:content-['*'] after:text-red-500 after:ml-1">
                Email
              </label>
              <input
                id="email"
                value={form.email}
                required
                type="email"
                className=" peer border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"
                onChange={onChange}
              />
              <p className=" invisible peer-invalid:visible text-red-500">Please provide a valid email address</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="phone number" className="flex after:content-['*'] after:text-red-500 after:ml-1">
                Phone number
              </label>
              <input
                id="phoneNumber"
                value={form.phoneNumber}
                required
                type="text"
                className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="password" className="flex after:content-['*'] after:text-red-500 after:ml-1">
                Password
              </label>
              <input
                id="password"
                value={form.password}
                required
                type="password"
                className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="confirm password" className="flex after:content-['*'] after:text-red-500 after:ml-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                value={form.confirmPassword}
                required
                type="password"
                className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"
                onChange={onChange}
              />
            </div>
          </form>
        </div>
        <div className="flex gap-2 w-[100%]">
          <button
            onClick={() => setCurrentStep(1)}
            className="border px-[10px] w-[40%] py-3 rounded-[6px] text-black before:content-['<'] before:mr-3"
          >
            Back
          </button>
          <button
            onClick={() => setCurrentStep(3)}
            className="bg-[#D6D8DB] px-[10px] w-[60%] py-3 rounded-[6px] text-[#A9ACAF] after:content-['>'] after:ml-3 "
          >
            Continue 2/3
          </button>
        </div>
      </div>
    </div>
  );
};
