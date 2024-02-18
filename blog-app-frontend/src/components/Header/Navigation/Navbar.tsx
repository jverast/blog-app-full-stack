import { useRef } from 'react';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';

const links = [
  {
    name: 'home',
    to: '#'
  },
  {
    name: 'categories',
    to: '#'
  },
  {
    name: 'blog',
    to: '#'
  },
  {
    name: 'about',
    to: '#'
  },
  {
    name: 'contact',
    to: '#'
  },
  {
    name: 'login',
    to: '/auth/login'
  }
];

export default function Navbar() {
  const refMenu = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <div
        className="relative grid lg:order-last lg:col-span-3 items-center"
        onClick={() => refMenu.current?.classList.remove('-translate-x-full')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="bars-3 w-9 h-9 cursor-pointer lg:hidden text-gray-300 hover:text-white transition ease-in-out duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div
          className="fixed z-40 top-0 left-0 m-0 w-screen h-screen bg-black opacity-90 lg:opacity-100 lg:bg-transparent lg:static lg:z-auto lg:w-full lg:h-auto flex flex-col justify-center -translate-x-full lg:translate-x-0 transition-transform ease-in-out duration-300"
          ref={refMenu}
        >
          <SearchForm />
          <div
            className="w-screen flex justify-center absolute top-16 cursor-pointer lg:hidden"
            onClick={(e) => {
              e.stopPropagation();
              return refMenu.current?.classList.add('-translate-x-full');
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="x-mark w-7 h-7 text-gray-400 hover:text-white transition ease-in-out duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="px-8 sm:px-16 flex flex-col justify-center items-start gap-y-4 text-start lg:pt-5 divide-y divide-slate-800 lg:flex-row lg:gap-x-8 lg:px-0 lg:divide-y-0">
            {links.map(({ name, to }) => (
              <li className="w-full lg:w-auto" key={name}>
                <Link
                  className={`hover:text-white transition ease-in-out duration-300 pt-3 block lg:p-2 lg:inline ${
                    name === 'login'
                      ? 'text-slate-900 uppercase text-sm bg-white hover:bg-sky-600 font-bold block text-center w-24 mx-auto mt-6 p-2 lg:w-0 lg:m-0 lg:p-2'
                      : 'text-gray-400 capitalize w-full'
                  }`}
                  to={to}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
