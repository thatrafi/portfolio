import styles from './CustomLink.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '../../../images/arrow-black.png';

interface Props {
  to: string;
  children: React.ReactNode;
  withArrow?: boolean;
}

const CustomLink: React.FC<Props> = ({ to, children, withArrow = false }) => (
  <div className={styles.link}>
    <Link href={to}>
      {children}
    </Link>
    {withArrow && <Image src={arrow} width="18px" height="3px" />}
  </div>
);

export default CustomLink;
