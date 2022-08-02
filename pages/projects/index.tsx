import Row from '../../components/atoms/Row/Row';
import ProjectCollections from '../../components/organisms/ProjectCollections';
import { DUMMY_PROJECTS } from '../../data/dummies/projects';

const ProjectsPage: React.FC = () => {
  return (
    <Row>
      <ProjectCollections data={DUMMY_PROJECTS} title="All Projects" />
    </Row>
  );
};

export default ProjectsPage;
