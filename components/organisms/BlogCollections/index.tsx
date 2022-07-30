import { BlogType } from '../../../data/types/UI/types';
import CustomLink from '../../atoms/CustomLink';
import BlogItem from '../BlogItem';
import styles from './BlogCollections.module.scss';

interface Props {
  data?: Array<BlogType> | null;
  title?: string;
  isThumbnail?: boolean;
}

const BlogCollections: React.FC<Props> = ({
  data,
  title,
  isThumbnail = false,
}) => {
  return (
    <div className={styles.wrapper}>
      {title && <span>{title}</span>}
      {data &&
        data.map((p, key) => (
          <BlogItem
            key={key}
            content={p}
            link={`/blogs/${key}`}
          />
        ))}
      {isThumbnail && (
        <CustomLink to="/blogs" withArrow arrowType='arrowRight'>
          <span>View all blogs</span>
        </CustomLink>
      )}
    </div>
  );
};

export default BlogCollections;
