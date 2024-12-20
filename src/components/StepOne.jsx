import { Input } from "@/components/input";
import { validateStepOne } from "@/utils/validate";

export const StepOne = ({
  setCurrentStep,
  onChange,
  form,
  errors,
  setErrors,
}) => {
  const isContinie =
    form.firstname !== "" && form.lastname !== "" && form.username !== ""
      ? "bg-black text-white"
      : "bg-[#D6D8DB] text-[#A9ACAF]";
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
            <Input
              label={"First name"}
              onChange={onChange}
              form={form}
              id="firstname"
              value={form?.firstname}
              error={errors.firstname}
              type={"text"}
            />
            <Input
              label={"Last name"}
              onChange={onChange}
              form={form}
              id="lastname"
              value={form?.lastname}
              error={errors.lastname}
              type={"text"}
            />
            <Input
              label={"Username"}
              onChange={onChange}
              form={form}
              id="username"
              value={form?.username}
              error={errors.username}
              type={"text"}
            />
          </form>
        </div>
        <div
          onClick={() => {
            const { isValid, newErrors } = validateStepOne(form);
            setErrors(newErrors);
            if (isValid) {
              setCurrentStep(2);
            }
          }}
        >
          <button
            className={`${isContinie} px-[10px] w-[100%] py-3 rounded-[6px] after:content-['>'] after:ml-3`}
          >
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
};
