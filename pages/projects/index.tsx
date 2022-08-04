import Row from '../../components/atoms/Row/Row';
import ProjectCollections from '../../components/organisms/ProjectCollections';
import { DUMMY_PROJECTS } from '../../data/dummies/projects';
import Project from '../../data/schemes/projectScheme';
import { ProjectType } from '../../data/types';
import { ProjectCollection } from '../../data/types/UI/types';
import dbConnect from '../../lib/dbConnect';

interface Props {
  projects: ProjectCollection[];
}

const ProjectsPage: React.FC<Props> = ({ projects }) => {
  return (
    <Row>
      <ProjectCollections data={projects} title="All Projects" />
    </Row>
  );
};

export async function getStaticProps() {
  await dbConnect();

  try {
    const data = (await Project.find()) as ProjectType[];
    
    return {
      props: {
        projects: data.map((m) => ({
          startDate: m.startDate ? new Date(m.startDate).toLocaleDateString("en-US", { year: 'numeric', month: 'long' }) : null,
          endDate: m.endDate ? new Date(m.endDate).toLocaleDateString("en-US", { year: 'numeric', month: 'long' }) : null,
          name: m.name,
          description: m.description,
          link: m.link,
          platform : m.platform,
        })),
      },
    };
  } catch (err) {
    return {
      props: {
        projects: DUMMY_PROJECTS,
      },
    };
  }
}

export default ProjectsPage;
