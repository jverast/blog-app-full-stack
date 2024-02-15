export default function Popular() {
  const popularBlogs = ['1', '2', '3', '4'];

  return (
    <div className="extra__popular col-span-full md:col-span-3 lg:col-span-4">
      <h3 className="text-left text-2xl p-3 font-semibold">Popular Blogs</h3>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-3">
        {popularBlogs.map((blog) => (
          <div
            key={blog}
            className="col-span-full md:col-span-1 flex text-left gap-x-4"
          >
            <div className="popular__img w-20 h-20 bg-gray-300"></div>
            <div>
              <h5 className="font-semibold">
                Visiting Theme Parks Improves Your Health.
              </h5>
              <div className="text-sm text-gray-600">
                By <span className="text-black">John Doe</span> on Dec 19, 2017
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
