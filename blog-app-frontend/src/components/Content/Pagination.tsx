import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Pagination() {
  return (
    <>
      <article className="flex justify-center gap-x-8 mt-16 mb-24">
        <button className="p-3 shadow-md shadow-slate-400 rounded-full">
          <FaArrowLeft />
        </button>
        <div className="flex gap-x-2 font-bold">
          <button className="px-3 hover:bg-slate-900 hover:text-white rounded transition ease-in-out duration-300">
            1
          </button>
          <button className="px-3 hover:bg-slate-900 hover:text-white rounded transition ease-in-out duration-300">
            2
          </button>
          <button className="px-3 hover:bg-slate-900 hover:text-white rounded transition ease-in-out duration-300">
            3
          </button>
          <button className="px-3 hover:bg-slate-900 hover:text-white rounded transition ease-in-out duration-300">
            4
          </button>
        </div>
        <button className="p-3 shadow-md shadow-slate-400 rounded-full">
          <FaArrowRight />
        </button>
      </article>
    </>
  );
}
