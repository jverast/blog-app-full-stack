import { ComponentType } from 'react';
import type { Position } from '../types';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest
} from 'react-icons/fa';

const withSocialMediaPosition = (
  WrappedComponent: ComponentType<{ position: Position }>
) => {
  return ({ position }: { position: Position }) => (
    <WrappedComponent position={position} />
  );
};

function SocialMedia({ position }: { position: Position }) {
  const social = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaInstagram />,
    <FaPinterest />
  ];

  return (
    <>
      <div className="col-span-3 lg:col-auto hidden lg:block lg:order-first text-start self-end">
        <div className={`flex flex-row gap-3 text-xl justify-${position}`}>
          {social.map((s, index) => (
            <a
              key={index}
              className="hover:scale-110 transition ease-in-out duration-300"
              href="#"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

const SocialMediaWithVariant = withSocialMediaPosition(SocialMedia);
export default SocialMediaWithVariant;
