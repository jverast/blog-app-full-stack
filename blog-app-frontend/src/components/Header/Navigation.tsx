import SocialMedia from '../../hocs/withSocialMedia';
import Navbar from './Navbar';

export default function Navigation() {
  return (
    <section className="grid grid-cols-6 lg:grid-cols-3 gap-y-5 text-center p-5 container mx-auto md:px-8 lg:px-16">
      <Navbar />
      <h1 className="relative col-span-5 lg:col-auto">
        <a
          className="text-5xl font-display font-montserrat font-brand"
          href="#"
        >
          My App
        </a>
      </h1>
      <SocialMedia position="start" />
    </section>
  );
}
