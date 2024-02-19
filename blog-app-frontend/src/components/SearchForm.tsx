import { FaSistrix } from 'react-icons/fa';

export default function SearchForm() {
  return (
    <>
      <div className="relative max-w-12 focus-within:max-w-64 transition-[max-width] ease-in-out duration-300 ms-auto w-full hidden lg:block">
        <input
          className="block w-full border-none outline-none rounded-full p-[12px] px-4 placeholder:text-transparent focus:placeholder:text-gray-400 placeholder:transition placeholder:duration-300"
          placeholder="Search..."
        />
        <FaSistrix className="text-black text-lg absolute top-1/2 right-6 -translate-y-1/2 translate-x-1/2 pointer-events-none"></FaSistrix>
      </div>
    </>
  );
}
