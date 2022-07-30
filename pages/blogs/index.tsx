import Row from "../../components/atoms/Row/Row";
import BlogCollections from "../../components/organisms/BlogCollections";
import { DUMMY_BLOGS } from "../../data/dummies/articles";

const BlogPage: React.FC = () => {
  return (
    <Row>
      <BlogCollections data={DUMMY_BLOGS} title="All Blogs" />
    </Row>
  );
  };
  
  export default BlogPage
  