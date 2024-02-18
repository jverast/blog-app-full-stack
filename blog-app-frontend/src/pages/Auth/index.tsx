import { ReactNode } from 'react';

export default function Auth({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="dark:text-white bg-neutral-900 h-screen relative before:content-[''] before:absolute before:block before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/images/hero-bg.jpg.webp')] before:opacity-10 grid items-center">
        {children}
      </div>
    </>
  );
}
