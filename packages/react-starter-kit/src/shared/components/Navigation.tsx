import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </>
);

export default Navigation;
