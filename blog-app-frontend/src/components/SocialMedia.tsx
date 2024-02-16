import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest
} from 'react-icons/fa';

import type { Position } from '../types';

export default function SocialMedia({ position }: { position: Position }) {
  return (
    <>
      <div className="col-span-3 lg:col-auto hidden lg:block lg:order-first text-start self-end">
        <div className={`flex flex-row gap-3 text-xl justify-${position}`}>
          <a
            className="hover:scale-110 transition ease-in-out duration-300"
            href="#"
          >
            <FaFacebookF />
          </a>
          <a
            className="hover:scale-110 transition ease-in-out duration-300"
            href="#"
          >
            <FaTwitter />
          </a>
          <a
            className="hover:scale-110 transition ease-in-out duration-300"
            href="#"
          >
            <FaInstagram />
          </a>
          <a
            className="hover:scale-110 transition ease-in-out duration-300"
            href="#"
          >
            <FaPinterest />
          </a>
        </div>
      </div>
    </>
  );
}
