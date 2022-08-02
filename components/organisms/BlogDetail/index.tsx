import { BlogType, ImageSize } from '../../../data/types/UI/types';
import CustomImage from '../../atoms/Image';
import style from './BlogDetail.module.scss';

interface Props {
  content: BlogType;
}

const BlogDetail: React.FC<Props> = ({ content }) => {
  return (
    <div className={style.wrapper}>
      <CustomImage size={ImageSize.BIG} />
      <div className={style.content}>
        <h1>Title</h1>
        <span className="caption">
          {content.startDate} -
          {content.endDate == null ? 'present' : content.endDate}
        </span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
