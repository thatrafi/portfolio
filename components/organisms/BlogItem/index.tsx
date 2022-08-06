import { BlogType } from '../../../data/types';
import styles from './BlogItem.module.scss';
import Link from 'next/link';

interface Props {
  content?: BlogType;
  link?: string;
}

const BlogItem: React.FC<Props> = ({ content = null, link }) => {
  return (
    content && (
      <div className={styles.wrapper}>
        <span className="caption">{content.date}</span>
        {content.title && link ? (
          <Link href={link}>{content.title}</Link>
        ) : (
          <h5>{content.title}</h5>
        )}
        {content.description && <p>{content.description}</p>}
      </div>
    )
  );
};

export default BlogItem;
