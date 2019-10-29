import React from 'react';
import Layout from '../../../shared/components/Layout';
import Loading from '../../../shared/components/Loading';
import { Post } from '../../../types';
import useFetchData from '../../../shared/hooks/use-fetch-data';
import { RouteComponentProps } from 'react-router';

interface PostDetailProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const PostDetail: React.FC<PostDetailProps> = ({ match }) => {
  const [isLoading, post] = useFetchData<Post>(`/posts/${match.params.id}`);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </Layout>
  );
};

export default PostDetail;
