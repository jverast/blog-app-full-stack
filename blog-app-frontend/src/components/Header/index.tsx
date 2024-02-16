import Navbar from './Navbar';
import Content from './Content';

export default function Header() {
  return (
    <>
      <header className="header header--home dark:text-white bg-neutral-900 relative before:content-[''] before:absolute before:block before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/images/hero-bg.jpg.webp')] before:opacity-10">
        <Navbar />
        <Content />
      </header>
    </>
  );
}
