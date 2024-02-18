import { ComponentType } from 'react';
import Content from '../components/Header/Content';
import Navigation from '../components/Header/Navigation';

const withHeader = (
  WrappedComponent: ComponentType<{ isContentHeaderNeeded: boolean }>
) => {
  return ({ isContentHeaderNeeded }: { isContentHeaderNeeded: boolean }) => (
    <WrappedComponent isContentHeaderNeeded={isContentHeaderNeeded} />
  );
};

function Header({ isContentHeaderNeeded }: { isContentHeaderNeeded: boolean }) {
  return (
    <>
      <header className="dark:text-white bg-neutral-900 relative before:content-[''] before:absolute before:block before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/images/hero-bg.jpg.webp')] before:opacity-10">
        <Navigation />
        {isContentHeaderNeeded && <Content />}
      </header>
    </>
  );
}

const HeaderWithVariant = withHeader(Header);
export default HeaderWithVariant;
