import { Position } from '../../types';
import SocialMedia from '../SocialMedia';

export default function About() {
  const position: Position = 'center';

  return (
    <div className="extra__about col-span-full md:col-span-3 lg:col-span-2">
      <h3 className="text-left text-2xl p-3 font-semibold">About</h3>
      <p className="mb-3">
        Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
        malesuada feugiat. Pellentesque in ipsum id orci porta dapibus.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in,
        elementum id enim. Donec sollicitudin molestie malesuada.
      </p>
      <SocialMedia position={position} />
    </div>
  );
}
