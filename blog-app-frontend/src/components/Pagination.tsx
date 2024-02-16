import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Pagination() {
  const pages = ['1', '2', '3', '4'];

  return (
    <>
      <article className="flex justify-center gap-x-8 mt-16 mb-24">
        <button className="p-3 shadow-md shadow-slate-400 rounded-full hover:scale-110 transition ease-in-out duration-300">
          <FaArrowLeft />
        </button>
        <div className="flex gap-x-2 font-bold">
          {pages.map((page) => (
            <button
              key={page}
              className="px-3 hover:bg-slate-900 hover:text-white rounded transition ease-in-out duration-300"
            >
              {page}
            </button>
          ))}
        </div>
        <button className="p-3 shadow-md shadow-slate-400 rounded-full hover:scale-110 transition ease-in-out duration-300">
          <FaArrowRight />
        </button>
      </article>
    </>
  );
}
