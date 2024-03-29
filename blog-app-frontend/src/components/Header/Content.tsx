export default function Content() {
  return (
    <section className="relative header__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 container mx-auto mt-12 px-8 lg:px-16">
      <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-[280px] md:h-[480px] bg-gray-400 opacity-65"></div>
      <div className="h-[280px] md:h-[240px]  bg-blue-700 opacity-65"></div>
      <div className="h-[240px] hidden md:block bg-black opacity-65"></div>
    </section>
  );
}
