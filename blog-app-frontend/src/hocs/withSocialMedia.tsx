import { ComponentType } from 'react';
import SocialMedia from '../components/SocialMedia';
import type { Position } from '../types';

const withSocialMediaPosition = (
  WrappedComponent: ComponentType<{ position: Position }>
) => {
  return ({ position }: { position: Position }) => (
    <WrappedComponent position={position} />
  );
};

const SocialMediaWithVariant = withSocialMediaPosition(SocialMedia);
export default SocialMediaWithVariant;
