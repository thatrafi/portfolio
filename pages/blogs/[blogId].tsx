import Row from '../../components/atoms/Row/Row';
import BlogDetail from '../../components/organisms/BlogDetail';
import { DUMMY_BLOGS } from '../../data/dummies/articles';
import dbConnect from '../../lib/dbConnect';
import Blog from '../../data/schemes/blogScheme';
import { BlogType } from '../../data/types';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps, GetStaticPaths } from 'next';

interface Props {
  blog: BlogType;
}

interface Params extends ParsedUrlQuery {
  blogId: string;
}

interface Paths extends ParsedUrlQuery {
  _id: string;
}

const BlogDetailPage: React.FC<Props> = ({ blog }) => {
  return (
    <Row>
      <BlogDetail content={blog || DUMMY_BLOGS[0]} />
    </Row>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  await dbConnect();
  const responseData: Paths[] = await Blog.find({}, { _id: 1 });

  return {
    fallback: false,
    paths: responseData.map((paths): { params: Params } => ({
      params: {
        blogId: paths._id.toString(),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  await dbConnect();
  const params = context.params!;
  const id = params.blogId;
  const data = await Blog.find();
  const selectedData = data.find((b) => b._id.toString() == id);
  const blog: BlogType = {
    date: selectedData.date
      ? new Date(selectedData.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
        })
      : '',
    description: selectedData.description,
    id: selectedData._id.toString(),
    imgSrc: selectedData.imgSrc || null,
    title: selectedData.title,
  };
  return {
    props: {
      blog: blog,
    },
  };
};

export default BlogDetailPage;
