import type { NextPage } from 'next';
import RoundedImage from '../components/atoms/RoundedImage';
import Row from '../components/atoms/Row/Row';
import ContentLink from '../components/molecules/ContentLink';
import ProjectCollections from '../components/organisms/ProjectCollections';
import { DUMMY_PROJECTS } from '../data/dummies/projects';
import { ImageSize } from '../data/types/UI/types';

const Home: NextPage = () => {
  return (
    <div>
      <Row>
        <RoundedImage src="rafi.png" size={ImageSize.BIG} />
        <ContentLink
          title="I craft interfaces"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          linkText="Take me to the magic land"
          linkTo="/"
        />
      </Row>
      <Row>
        <ProjectCollections
          data={DUMMY_PROJECTS}
          title="Recent Projects"
          isThumbnail
        />
      </Row>

      <footer></footer>
    </div>
  );
};

export default Home;
