import styles from './ContentLink.module.scss';
import CustomLink from '../../atoms/CustomLink';

interface Props{
    description: React.ReactNode;
    title?: string;
    linkText: string;
    linkTo: string;
}

const ContentLink: React.FC<Props> = ({description, title, linkText, linkTo}) => {
  return (
    <div className={styles.contentLinkWrapper}>
      {title && <span>{title}</span>}
      {description && <p>{description}</p>}
      <CustomLink to={linkTo} withArrow arrowType='arrowCute'>
        {linkText}
      </CustomLink>
    </div>
  );
};

export default ContentLink;
