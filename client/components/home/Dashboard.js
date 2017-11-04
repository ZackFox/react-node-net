import React from 'react';

import ProfileCard from './ProfileCard';
import DoPost from './DoPost';
import PostList from '../PostList';

const Dashboard = props => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <ProfileCard />
      </div>
      <div className="col-md-8">
        <DoPost />
        {/* <PostList /> */}
      </div>
    </div>
  </div>
);

export default Dashboard;
