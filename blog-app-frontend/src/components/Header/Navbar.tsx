import { FaSistrix } from 'react-icons/fa';
import SocialMedia from '../SocialMedia';

export default function Navbar() {
  return (
    <section className="relative header__navbar grid grid-cols-6 gap-y-5 items-center text-center p-5 container mx-auto md:px-8 lg:px-16">
      <div className="lg:order-last lg:col-span-6 grid divide-y divide-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-9 h-9 lg:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <ul className="hidden lg:flex flex-row justify-center gap-x-8 pt-5">
          <li>
            <a
              className="text-gray-400 hover:text-white transition ease-in-out duration-300"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-white transition ease-in-out duration-300"
              href="#"
            >
              Categories
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-white transition ease-in-out duration-300"
              href="#"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-white transition ease-in-out duration-300"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-white transition ease-in-out duration-300"
              href="#"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="text-slate-900 hover:text-white transition ease-in-out duration-300 uppercase text-sm bg-white hover:bg-sky-600 p-2 font-bold rounded-sm"
              href="#"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
      <h1 className="col-span-4 text-5xl font-display font-montserrat font-brand">
        <a href="#">My App</a>
      </h1>
      <article className="flex justify-end items-center flex-row gap-x-3 lg:self-end">
        <span className="text-xs tracking-widest hidden lg:block">SEARCH</span>
        <FaSistrix className="text-2xl" />
      </article>
      <SocialMedia position="start" />
    </section>
  );
}
