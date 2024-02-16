import SocialMedia from '../../hocs/withSocialMedia';
import Navbar from './Navbar';
import SearchForm from './SearchForm';

export default function Navigation() {
  return (
    <section className="header__navbar relative grid grid-cols-6 lg:grid-cols-3 gap-y-5 items-center text-center p-5 container mx-auto md:px-8 lg:px-16">
      <Navbar />
      <h1 className="header__brand col-span-4 lg:col-auto text-5xl font-display font-montserrat font-brand">
        <a href="#">My App</a>
      </h1>
      <SearchForm />
      <SocialMedia position="start" />
    </section>
  );
}
