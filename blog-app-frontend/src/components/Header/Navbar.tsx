export default function Navbar() {
  const links = [
    {
      name: 'home',
      href: '#'
    },
    {
      name: 'categories',
      href: '#'
    },
    {
      name: 'blog',
      href: '#'
    },
    {
      name: 'about',
      href: '#'
    },
    {
      name: 'contact',
      href: '#'
    },
    {
      name: 'login',
      href: '#'
    }
  ];

  return (
    <>
      <div className="header__nav lg:order-last lg:col-span-3 grid divide-y divide-gray-800">
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
          {links.map(({ name, href }) => (
            <li key={name}>
              <a
                className={`hover:text-white transition ease-in-out duration-300 ${
                  name === 'login'
                    ? 'text-slate-900 uppercase text-sm bg-white hover:bg-sky-600 p-2 font-bold rounded-sm'
                    : 'text-gray-400 capitalize'
                }`}
                href={href}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
