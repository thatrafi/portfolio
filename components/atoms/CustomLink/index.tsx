import styles from './CustomLink.module.scss';
import Link from 'next/link';
import Icon from '../IconSet';

interface Props {
  to: string;
  children: React.ReactNode;
  withArrow?: boolean;
  arrowType?: 'arrowRight' | 'arrowCute';
}

const CustomLink: React.FC<Props> = ({ to, children, withArrow = false, arrowType }) => (
  <div className={styles.link}>
    <Link href={to}>
      {children}
    </Link>
    {withArrow && <Icon type={arrowType} />}
  </div>
);

export default CustomLink;
