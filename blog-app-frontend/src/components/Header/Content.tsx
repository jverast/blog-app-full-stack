export default function Content() {
  return (
    <section className="header__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 container mx-auto mt-12 px-8 lg:px-16">
      <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-[280px] md:h-[480px] border bg-gray-200 opacity-25"></div>
      <div className="h-[280px] md:h-[240px]  bg-cyan-600 opacity-25"></div>
      <div className="h-[240px] hidden md:block bg-black opacity-25"></div>
    </section>
  );
}
