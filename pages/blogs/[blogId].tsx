import Row from '../../components/atoms/Row/Row';
import BlogDetail from '../../components/organisms/BlogDetail';
import { DUMMY_BLOGS } from '../../data/dummies/articles';

const BlogDetailPage: React.FC = () => {
  return (
    <Row>
      <BlogDetail content={DUMMY_BLOGS[0]} />
    </Row>
  );
};

export default BlogDetailPage;
