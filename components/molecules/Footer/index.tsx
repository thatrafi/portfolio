import Link from 'next/link';
import Icons from '../Icons';
import style from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Icons style={style.icons} />
    </div>
  );
};

export default Footer;
