export const Input = ({label, id, onChange, error, type, value}) => {
    console.log(error)
    return (
        <div className="flex flex-col gap-2 ">
              <label
                htmlFor={id}
                className="flex after:content-['*'] after:text-red-500 after:ml-1 "
              >
                {label}
              </label>
              <input
                id={id}
                value={value}
                required
                type={type}
                className="border border-[#CBD5E1] outline-none focus:border-blue-400 w-[100%] rounded-[8px] p-3 "
                placeholder="Placeholder"
                onChange={onChange}
              />
              {error && <span className="text-red-500 text-[14px] font-normal ">{error}</span>}
        </div>
    )
}