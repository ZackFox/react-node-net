import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../templates/Header';
import ProfileCard from './ProfileCard';
import DoPost from './DoPost';
import PostList from '../PostList';

import {
  getCurrentUser,
  getTimeline,
  sendPost,
} from '../../actions/userActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getTimeline();
  }

  render() {
    const { user, isLoading, timeline, sendPost } = this.props;

    if (isLoading) {
      return <div>...загрузка </div>;
    }

    return (
      <div>
        <Header user={user} />
        <div className="page-content">
          <div className="container">
            <div className="col-md-4">
              <ProfileCard user={user} />
            </div>

            <div className="col-md-8">
              <DoPost sendPost={sendPost} />
              <PostList posts={timeline} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.data,
  timeline: state.user.timeline,
  isLoading: state.user.isLoading,
});

export default connect(mapStateToProps, {
  sendPost,
  getCurrentUser,
  getTimeline,
})(Dashboard);
