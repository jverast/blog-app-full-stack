export default function Tags() {
  const tags = [
    'salad',
    'recipe',
    'places',
    'tips',
    'friends',
    'travel',
    'exercise',
    'reading',
    'running',
    'self-help',
    'vacation'
  ];

  return (
    <div className="extra__tags col-span-full pb-24">
      <h3 className="text-center text-2xl p-4 font-semibold">Tags</h3>
      <div className="flex flex-wrap justify-center gap-3 px-4 sm:px-16 md:px-32 lg:px-48 mx-auto">
        {tags.map((tag) => (
          <a
            key={tag}
            className="uppercase font-bold bg-gray-200 hover:bg-slate-800 text-slate-800 hover:text-gray-200 transition ease-in-out duration-300 rounded p-3 text-sm tracking-widest"
            href="#"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
}
