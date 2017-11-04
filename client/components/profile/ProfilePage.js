import React from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';

import Subscribers from '../profile/Subscribers';
import Following from '../profile/following';
import PostList from '../PostList';
import NotFoundPage from '../../components/NotFoundPage';

const ProfilePage = props => (
  <div className="">
    <div className="row">
      <div className="col-md-12">page {props.match.params.profileName}</div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-offset-3 col-md-9">
          <Switch>
            <Route path="/:profileName" exact component={PostList} />
            <Route path="/:profileName/subscribers" component={Subscribers} />
            <Route path="/:profileName/following" component={Following} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
);

export default ProfilePage;
