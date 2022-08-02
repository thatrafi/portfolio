import type { NextPage } from 'next';
import RoundedImage from '../components/atoms/RoundedImage';
import Row from '../components/atoms/Row/Row';
import ContentLink from '../components/molecules/ContentLink';
import BlogCollections from '../components/organisms/BlogCollections';
import ProjectCollections from '../components/organisms/ProjectCollections';
import { DUMMY_BLOGS } from '../data/dummies/articles';
import { DUMMY_PROJECTS } from '../data/dummies/projects';
import { ImageSize } from '../data/types/UI/types';
import style from './Home.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <Row style={style.home}>
        <RoundedImage src="rafi.png" size={ImageSize.BIG} />
        <ContentLink
          title="I craft interfaces"
          description="A digital nomad and driven self-starter, fast learner and detail-oriented software engineer with more than 1
          year of professional experience working remotely with international companies. Bachelor
          s degree in Information Systems from University of AMIKOM Yogyakarta."
          linkText="Let's chat with me!"
          linkTo="/chat"
        />
      </Row>
      <Row>
        <ProjectCollections
          data={DUMMY_PROJECTS}
          title="Recent Projects"
          isThumbnail
        />
      </Row>
      <Row>
        <BlogCollections data={DUMMY_BLOGS} title="Recent Blogs" isThumbnail />
      </Row>

      <footer></footer>
    </div>
  );
};

export default Home;
