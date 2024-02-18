import { FaLock, FaAt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 h-4/6 lg:h-5/6 items-center w-5/6 mx-auto max-w-96 md:max-w-xl lg:max-w-full px-6 md:px-8 bg-white dark:bg-neutral-800 shadow-[0_0_15px_3px_rgba(255,255,255,0.15)] dark:shadow-none">
        <div className="hidden lg:block">
          <img
            className="w-5/6"
            src="/images/auth-removebg.png"
            alt="Login image"
          />
        </div>
        <div className="flex flex-col gap-y-8 px-6">
          <div className="absolute top-4 right-12 lg:right-14 text-dark dark:text-white">
            New User?{' '}
            <Link
              className="text-sky-500 dark:text-sky-400 hover:underline underline-offset-2 ms-1"
              to="/auth/register"
            >
              Sign Up
            </Link>
          </div>
          <section>
            <h3 className="text-3xl font-bold capitalize pb-1">
              welcome back!
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Login to continue
            </p>
          </section>
          <section className="flex flex-col gap-y-3">
            <div className="relative group">
              <input
                className="p-2 px-3 ps-9 focus:ps-3 focus: w-full border border-neutral-300 dark:border-none rounded dark:rounded-none focus:shadow-[0_0_15px_3px_rgba(3,105,161,0.25)] dark:focus:shadow-[0_0_15px_3px_rgba(0,0,0,0.35)] transition-all ease-in-out duration-300 outline-none text-black peer"
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
              <FaAt className="text-neutral-800 absolute top-1/3 left-3 peer-focus:w-0 peer-focus:opacity-0 transition-all ease-in-out duration-200" />
            </div>
            <div className="relative group">
              <input
                className="p-2 px-3 ps-9 focus:ps-3 focus: w-full border border-neutral-300 dark:border-none rounded dark:rounded-none focus:shadow-[0_0_15px_3px_rgba(3,105,161,0.25)] dark:focus:shadow-[0_0_15px_3px_rgba(0,0,0,0.35)] transition-all ease-in-out duration-300 outline-none text-black peer"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
              <FaLock className="text-neutral-800 absolute top-1/3 left-3 peer-focus:w-0 peer-focus:opacity-0 transition-all ease-in-out duration-200" />
            </div>
            <div className="flex gap-x-4 items-center mt-6">
              <button className="p-[10px] px-4 bg-sky-600 rounded-3xl basis-1/2 cursor-pointer hover:bg-sky-700 transition ease-in-out duration-300 text-white">
                Login
              </button>
              <a className="basis-1/2 cursor-pointer hover:underline hover:underline-offset-2 text-center">
                forget password?
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
