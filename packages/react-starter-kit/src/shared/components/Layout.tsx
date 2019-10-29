import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Layout: React.FC = ({ children }) => (
  <StyledLayout>
    <div className="Navigation">
      <Navigation />
    </div>

    {children}
  </StyledLayout>
);

const StyledLayout = styled.div`
  border: 1px solid #ccc;
  margin: 20px auto;
  max-width: 600px;
  padding: 15px;

  h1 {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
  }

  .Navigation {
    margin-bottom: 15px;
  }
`;

export default Layout;
