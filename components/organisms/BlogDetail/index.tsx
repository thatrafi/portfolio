import { BlogType } from '../../../data/types';
import { ImageSize } from '../../../data/types/UI/types';
import CustomImage from '../../atoms/Image';
import style from './BlogDetail.module.scss';

interface Props {
  content: BlogType;
}

const BlogDetail: React.FC<Props> = ({ content }) => {
  return (
    <div className={style.wrapper}>
      <CustomImage src={content.imgSrc} size={ImageSize.BIG} />
      <div className={style.content}>
        <h1>{content.title || 'Title'}</h1>
        <span className="caption">{content.date || 'Now'}</span>
        <p>
          {content.description ||
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
