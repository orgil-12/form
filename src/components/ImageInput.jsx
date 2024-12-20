export const ImageInput = ({ onChange, error, value }) => {
  return (
    <div className={`flex  items-center justify-center w-full`}>
      <label
        htmlFor="image"
        className="flex flex-col items-center justify-center w-full h-[180px] rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <img src="image.svg" alt="" />
          <p className="mb-2 text-sm text-[#09090B] dark:text-gray-400">
            Add image
          </p>
        </div>
        <input
          id="image"
          value={value}
          required
          type="file"
          className="hidden"
          onChange={onChange}
        />
        {error && (
          <span className="text-red-500 text-[14px] font-normal ">{error}</span>
        )}
      </label>
    </div>
  );
};
