import type { VsfIconProps } from './types';
import VsfIconBase from '../VsfIconBase';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

export default function VsfIconStarPartiallyFilled({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel = 'star-partially-filled',
}: VsfIconProps) {
  return (
    <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} viewBox="0 0 24 24">
      <path d="m19.65 9.477-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0l-1.89 4.46-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75ZM12 15.837v-9.3l1.71 4.04 4.38.38-3.32 2.88 1 4.28-3.77-2.28Z" />
    </VsfIconBase>
  );
}
