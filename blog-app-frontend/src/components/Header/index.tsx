import Navbar from './Navbar';
import Content from './Content';

export default function Header() {
  return (
    <>
      <header className="header header--home bg-zinc-900 dark:text-white">
        <Navbar />
        <Content />
      </header>
    </>
  );
}
