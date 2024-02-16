import Extra from '../Extra';
import Pagination from '../Pagination';

export default function Main() {
  const blogs = ['1', '2', '3', '4', '5', '6'];
  const tags = ['design', 'photography'];

  return (
    <>
      <main className="main">
        <section className="masonry grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-12 lg:px-32 mt-12">
          {blogs.map((blog) => (
            <div
              key={blog}
              className="masonry__brick flex flex-col gap-y-5 shadow-lg border pb-12"
            >
              <div className="image w-full h-72 bg-slate-300"></div>
              <div className="flex flex-col gap-y-3 px-6">
                <span className="text-gray-400">December 15, 2017</span>
                <h3 className="font-bold text-xl font-title">
                  Just a Standard Format Post.
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                  incididunt mollit id et sit proident dolor nulla sed commodo
                  est ad minim elit reprehenderit nisi officia aute incididunt
                  velit sint in aliqua...
                </p>
                <div className="flex gap-x-2 text-sky-700 font-semibold">
                  {tags.map((tag, index, array) => (
                    <a
                      key={tag}
                      className="hover:text-black transition ease-in-out duration-300"
                      href="#"
                    >
                      {tag}
                      {index < array.length - 1 ? ',' : ''}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
        <Pagination />
        <Extra />
      </main>
    </>
  );
}
