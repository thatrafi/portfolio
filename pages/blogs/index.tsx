import Row from '../../components/atoms/Row/Row';
import BlogCollections from '../../components/organisms/BlogCollections';
import { DUMMY_BLOGS } from '../../data/dummies/articles';
import { BlogType } from '../../data/types';
import dbConnect from '../../lib/dbConnect';
import Blog from '../../data/schemes/blogScheme';
import style from './Blog.module.scss';

interface Props {
  blogs: BlogType[];
}

const BlogPage: React.FC<Props> = ({ blogs }) => {
  return (
    <Row style={style.blog}>
      {blogs ? (
        <BlogCollections data={blogs} title="All Blogs" />
      ): <h1>No blog posts available</h1>}
    </Row>
  );
};

export async function getStaticProps() {
  await dbConnect();

  try {
    const data = await Blog.find();

    return {
      props: {
        blogs: data.map((m) => ({
          date: m.date
            ? new Date(m.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })
            : null,
          title: m.title,
          description: m.description,
          id: m._id.toString(),
        })),
      },
    };
  } catch (err) {
    return {
      props: {
        blogs: DUMMY_BLOGS,
      },
    };
  }
}

export default BlogPage;
