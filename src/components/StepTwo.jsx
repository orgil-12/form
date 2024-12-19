import { Input } from "@/components/input";
import { validateStepTwo } from "@/utils/validate";
export const StepTwo = ({ setCurrentStep, onChange, form, errors, setErrors }) => {
  console.log(errors)
  return (
    <div className="w-screen h-screen flex items-center bg-slate-100  ">
      <div className="bg-white m-auto rounded-[8px] p-8 flex flex-col justify-between gap-[52px] ">
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
              label={"Email"}
              onChange={onChange}
              id="email"
              value={form?.email}
              error={errors.email}
              type={"text"}
            />
            <Input
              label={"Phone number"}
              onChange={onChange}
              id="phoneNumber"
              value={form?.phoneNumber}
              error={errors.phoneNumber}
              type={"number"}
            />
            <Input
              label={"Password"}
              onChange={onChange}
              id="password"
              value={form?.password}
              error={errors.password}
              type={"text"}
            />
            <Input
              label={"Confirm Password"}
              onChange={onChange}
              id="confirmPassword"
              value={form?.confirmPassword}
              error={errors.confirmPassword}
              type={"text"}
            />
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
            onClick={() => {
                      const {isValid , newErrors} = validateStepTwo(form)
                      setErrors(newErrors);
                      if(isValid){
                        setCurrentStep(3);
                      }
                    }}
            className="bg-[#D6D8DB] px-[10px] w-[60%] py-3 rounded-[6px] text-[#A9ACAF] after:content-['>'] after:ml-3 "
          >
            Continue 2/3
          </button>
        </div>
      </div>
    </div>
  );
};
