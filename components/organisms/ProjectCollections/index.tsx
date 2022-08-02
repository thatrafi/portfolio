import { ProjectCollection } from '../../../data/types/UI/types';
import CustomLink from '../../atoms/CustomLink';
import ProjectItem from '../ProjectItem';
import styles from './ProjectCollections.module.scss';

interface Props {
  data?: Array<ProjectCollection> | null;
  title?: string;
  isThumbnail?: boolean;
}

const ProjectCollections: React.FC<Props> = ({
  data,
  title,
  isThumbnail = false,
}) => {
  return (
    <div className={styles.wrapper}>
      {title && <span>{title}</span>}
      {data &&
        data.map((p, key) => (
          <ProjectItem
            key={key}
            startDate={p.startDate}
            endDate={p.endDate}
            description={p.description}
            link={p.link}
            name={p.name}
          />
        ))}
      {isThumbnail && (
        <CustomLink to="/projects" withArrow arrowType='arrowRight'>
          <span>View all projects</span>
        </CustomLink>
      )}
    </div>
  );
};

export default ProjectCollections;
