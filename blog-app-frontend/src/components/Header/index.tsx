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
      <header className="bg-zinc-900 dark:text-white">
        <div className="grid grid-cols-3 gap-y-5 items-center text-center py-3 px-3 container mx-auto">
          <div className="lg:order-last lg:col-span-3 grid divide-y divide-gray-700">
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
            <ul className="hidden lg:flex flex-row justify-center gap-x-10 pt-3">
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
          <div className="text-4xl font-semibold font-display">My App</div>
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
        </div>
      </header>
    </>
  );
}
