import About from './About';
import Popular from './Popular';
import Tags from './Tags';

export default function Extra() {
  return (
    <>
      <article className="extra">
        <div className="grid grid-cols-6 container mx-auto px-12 md:px-0 lg:px-12 text-center gap-y-8">
          <Popular />
          <About />
          <Tags />
        </div>
      </article>
    </>
  );
}
