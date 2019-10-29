import React from 'react';
import Layout from '../../../shared/components/Layout';
import Loading from '../../../shared/components/Loading';
import { User } from '../../../types';
import useFetchData from '../../../shared/hooks/use-fetch-data';

const UsersList: React.FC = () => {
  const [isLoading, users] = useFetchData<User[]>('/users');

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <h1>Users List</h1>

      {users.map((user: User) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </Layout>
  );
};

export default UsersList;
