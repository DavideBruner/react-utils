import React from 'react';
import Layout from '../../../shared/components/Layout';
import Loading from '../../../shared/components/Loading';
import { Post } from '../../../types';
import useFetchData from '../../../shared/hooks/use-fetch-data';
import { Link } from 'react-router-dom';

const PostsList: React.FC = () => {
  const [isLoading, posts] = useFetchData<Post[]>('/posts');

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <h1>Posts List</h1>

      {posts.map((post: Post) => (
        <div key={post.id}>
          <p>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </p>
        </div>
      ))}
    </Layout>
  );
};

export default PostsList;
