import * as Icons from '../../../assets/icons';
import Image from 'next/image';

export const iconSet = {
  arrowRight: Icons.ArrowRight,
  arrowCute: Icons.ArrowBlack,
  airPlane: Icons.AirPlane,
  default: Icons.Default,
};

interface Props {
  type?: keyof typeof iconSet;
  onClickIcon?: Function;
}

const Icon: React.FC<Props> = (props) => {
  const { type, onClickIcon } = props;

  return (
    <Image
      src={type ? iconSet[type] : iconSet['default']}
      width="18px"
      height="3px"
      onClick={() => {
        onClickIcon && onClickIcon();
      }}
    />
  );
};

export default Icon;
