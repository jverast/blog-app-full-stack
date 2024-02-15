import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaSistrix
} from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <header className="header header--home bg-zinc-900 dark:text-white">
        <section className="header__navbar grid grid-cols-6 gap-y-5 items-center text-center p-5 container mx-auto md:px-8 lg:px-16">
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
            <ul className="hidden lg:flex flex-row justify-center gap-x-10 pt-5">
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
                  Styles
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
            </ul>
          </div>
          <div className="col-span-4 text-4xl font-semibold font-display">
            My App
          </div>
          <div className="flex justify-end items-center flex-row gap-x-3 lg:self-end">
            <span className="text-xs tracking-widest hidden lg:block">
              SEARCH
            </span>
            <FaSistrix className="text-2xl" />
          </div>
          <div className="col-span-3 lg:col-auto hidden lg:block lg:order-first text-start self-end">
            <div className="flex flex-row gap-3 text-xl">
              <FaFacebookF /> <FaTwitter /> <FaInstagram /> <FaPinterest />
            </div>
          </div>
        </section>
        <section className="header__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 container mx-auto mt-12 px-8 lg:px-16">
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-[280px] md:h-[480px] border bg-gray-200 opacity-25"></div>
          <div className="h-[280px] md:h-[240px]  bg-cyan-600 opacity-25"></div>
          <div className="h-[240px] hidden md:block bg-black opacity-25"></div>
        </section>
      </header>
    </>
  );
}
