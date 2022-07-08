import type { NextPage } from 'next';
import RoundedImage, { ImageSize } from '../components/atoms/RoundedImage';
import Row from '../components/atoms/Row/Row';
import ContentLink from '../components/molecules/ContentLink';

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

      <footer></footer>
    </div>
  );
};

export default Home;
