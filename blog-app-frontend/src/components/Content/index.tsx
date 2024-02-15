import Pagination from './Pagination';

export default function Content() {
  const blogs = ['1', '2', '3', '4', '5', '6'];

  return (
    <>
      <main className="content">
        <section className="content__masonry masonry grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-12 lg:px-36 mt-12">
          {blogs.map((blog) => (
            <div
              key={blog}
              className="masonry__brick flex flex-col gap-y-5 shadow-lg border pb-12"
            >
              <div className="image w-full h-72 bg-slate-300"></div>
              <div className="flex flex-col gap-y-3 px-6">
                <span className="text-gray-400">December 15, 2017</span>
                <h3 className="font-bold text-xl font-serif">
                  Just a Standard Format Post.
                </h3>
                <p>
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                  incididunt mollit id et sit proident dolor nulla sed commodo
                  est ad minim elit reprehenderit nisi officia aute incididunt
                  velit sint in aliqua...
                </p>
                <div className="flex gap-x-2 text-sky-700 font-semibold">
                  <a
                    className="hover:text-black transition ease-in-out duration-300"
                    href="#"
                  >
                    Design
                  </a>
                  <a
                    className="hover:text-black transition ease-in-out duration-300"
                    href="#"
                  >
                    Photography
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
        <Pagination />
      </main>
    </>
  );
}
