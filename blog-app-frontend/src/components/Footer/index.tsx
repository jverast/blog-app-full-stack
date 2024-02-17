export default function Footer() {
  return (
    <>
      <footer className="footer bg-neutral-900 dark:text-white">
        <div className="container mx-auto flex flex-col gap-y-16">
          <div className="footer__main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="footer__sitelinks flex flex-col gap-y-4 lg:items-start">
              <h5 className="uppercase font-bold tracking-widest mt-12 text-center lg:text-left w-4/5 mx-auto">
                Quick Links
              </h5>
              <div className="flex flex-col items-center text-center lg:text-start w-4/5 mx-auto divide-y divide-zinc-800 text-gray-500">
                <a className="py-3 block w-full hover:text-white" href="#">
                  Home
                </a>
                <a className="py-3 block w-full hover:text-white" href="#">
                  Blogs
                </a>
                <a className="py-3 block w-full hover:text-white" href="#">
                  About
                </a>
                <a className="py-3 block w-full hover:text-white" href="#">
                  Contact
                </a>
                <a className="py-3 block w-full hover:text-white" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="footer__social flex flex-col gap-y-4">
              <h5 className="uppercase font-bold tracking-widest mt-12 text-center lg:text-left w-4/5 mx-auto">
                Social
              </h5>
              <div className="flex flex-col items-center text-center lg:text-start w-4/5 mx-auto divide-y divide-zinc-800 text-gray-500">
                <a className="py-3 block w-full hover:text-white" href="#">
                  Facebook
                </a>
                <a className="py-3 block w-full hover:text-white" href="#">
                  Instagram
                </a>
                <a className="py-3 block w-full hover:text-white" href="#">
                  Twitter
                </a>
                <a className="py-3 block w-full hover:text-white" href="#">
                  Pinterest
                </a>
                <a className="py-3 block w-full hover:text-white" href="#">
                  LinkdIn
                </a>
              </div>
            </div>
            <div className="footer__subscribe col-span-full lg:col-auto flex flex-col gap-y-4 text-center lg:text-left px-12 lg:p-0 lg:pe-6">
              <h5 className="uppercase font-bold tracking-widest mt-12 mb-3">
                Our newsletter
              </h5>
              <p className="text-gray-500 pb-6">
                Sit vel delectus amet officiis repudiandae est voluptatem.
                Tempora maxime provident nisi et fuga et enim exercitationem
                ipsam. Culpa consequatur occaecati.
              </p>
              <form>
                <div className="px-6 lg:p-0 mx-auto flex w-full">
                  <input
                    className="basis-9/12 border-none outline-none bg-zinc-800 p-3"
                    type="text"
                  />
                  <button className="basis-3/12 bg-sky-700 uppercase font-bold text-sm tracking-widest">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer__bottom pb-6 flex text-center justify-center flex-col md:flex-row gap-x-2 text-gray-500">
            <p>&copy; Copyright Philosophy 2018</p>
            <p>
              Site Template by <span className="text-white">Colorlib</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
