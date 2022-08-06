import type { NextPage } from 'next';
import RoundedImage from '../components/atoms/RoundedImage';
import Row from '../components/atoms/Row/Row';
import ContentLink from '../components/molecules/ContentLink';
import Icons from '../components/molecules/Icons';
import BlogCollections from '../components/organisms/BlogCollections';
import ProjectCollections from '../components/organisms/ProjectCollections';
import { DUMMY_BLOGS } from '../data/dummies/articles';
import { DUMMY_PROJECTS } from '../data/dummies/projects';
import Blog from '../data/schemes/blogScheme';
import Project from '../data/schemes/projectScheme';
import { BlogType } from '../data/types';
import { ImageSize, ProjectCollection } from '../data/types/UI/types';
import dbConnect from '../lib/dbConnect';
import { getFormatDate } from '../utils/helper';
import style from './Home.module.scss';

interface Props {
  blogs: BlogType[];
  projects: ProjectCollection[];
}

const Home: NextPage<Props> = ({ blogs, projects }) => {
  return (
    <div>
      <Row style={style.home}>
        <RoundedImage src="rafi.png" size={ImageSize.BIG} />
        <ContentLink
          title="About me"
          description="A digital nomad and driven self-starter, fast learner and detail-oriented software engineer with more than 1
          year of professional experience working remotely with international companies. Bachelor
          s degree in Information Systems from University of AMIKOM Yogyakarta."
          linkText="Let's chat with me!"
          linkTo="/chat"
        />
        <Icons style={style.icons} />
      </Row>
      <Row>
        <ProjectCollections
          data={projects}
          title="Recent Projects"
          isThumbnail
        />
      </Row>
      <Row>
        <BlogCollections data={blogs} title="Recent Blogs" isThumbnail />
      </Row>

      <footer></footer>
    </div>
  );
};

export async function getStaticProps() {
  await dbConnect();

  try {
    const dataBlog = await Blog.find().sort({ createdAt: 'desc' }).limit(2);
    const dataProject = await Project.find().sort({ startDate: 'desc' }).limit(2);

    return {
      props: {
        blogs: dataBlog.map((m) => ({
          date: m.date ? getFormatDate(m.date) : null,
          title: m.title,
          description: m.description,
          id: m._id.toString(),
        })),
        projects: dataProject.map((m) => ({
          startDate: m.startDate ? getFormatDate(m.startDate) : null,
          endDate: m.endDate ? getFormatDate(m.endDate) : null,
          name: m.name,
          description: m.description,
          link: m.link,
          platform: m.platform,
        })),
      },
    };
  } catch (err) {
    return {
      props: {
        blogs: DUMMY_BLOGS,
        projects: DUMMY_PROJECTS
      },
    };
  }
}

export default Home;
