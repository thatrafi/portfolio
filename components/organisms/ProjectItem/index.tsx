import ContentLink from '../../molecules/ContentLink';
import styles from './ProjectItem.module.scss';
import Image from '../../atoms/Image';
import { ImageSize } from '../../../data/types/UI/types';

interface Props {
  startDate?: string;
  endDate?: string | null;
  name?: string;
  description?: string;
  link?: string;
  imgSrc?: string;
  platform?: string;
}

const ProjectItem: React.FC<Props> = ({
  startDate = '2019',
  endDate = 'present',
  name = 'Untitled Project',
  description = 'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
  link = '/',
  imgSrc = 'placeholder.png',
  platform,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <span className="caption">
          {startDate} - {endDate == null ? 'present' : endDate}
        </span>
        {name && <h3>{name}</h3>}
        {platform && (
          <span className="caption">
            {platform}
          </span>
        )}
        <ContentLink
          description={description}
          linkText="Try it out"
          linkTo={link}
        />
      </div>
      <Image src={imgSrc} size={ImageSize.MEDIUM} />
    </div>
  );
};

export default ProjectItem;
