import React from 'react';

import Header from '../templates/Header';
import ProfileCard from './ProfileCard';
import DoPost from './DoPost';
import PostList from '../PostList';

const Dashboard = props => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <Header />
      </div>
    </div>

    <div className="row">
      <div className="container">
        <div className="col-md-4">
          <ProfileCard />
        </div>

        <div className="col-md-8">
          <DoPost />
          {/* <PostList /> */}
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
