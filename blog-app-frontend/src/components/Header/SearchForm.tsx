import { FaSistrix } from 'react-icons/fa';

export default function SearchForm() {
  return (
    <>
      <article className="header__search-form hidden lg:flex justify-end items-center flex-row gap-x-3 lg:self-end">
        <form className="w-full flex justify-end">
          <div className="search-box">
            <input
              id="search"
              className="search-box__input"
              type="text"
              autoComplete="off"
              name="search"
              placeholder="Search..."
            />
            <FaSistrix className="search-box__icon" />
          </div>
        </form>
      </article>
    </>
  );
}
