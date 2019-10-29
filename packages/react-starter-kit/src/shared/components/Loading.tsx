import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';

const Loading: React.FC = () => (
  <Layout>
    <StyledLoading>Loading...</StyledLoading>
  </Layout>
);

const StyledLoading = styled.div`
  font-size: 20px;
`;

export default Loading;
