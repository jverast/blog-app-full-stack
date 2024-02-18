import Navigation from './Navigation';
import Content from './Content';

export default function Header() {
  return (
    <>
      <header className="dark:text-white bg-neutral-900 relative before:content-[''] before:absolute before:block before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/images/hero-bg.jpg.webp')] before:opacity-10">
        <Navigation />
        <Content />
      </header>
    </>
  );
}
