import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../templates/Header';
import ProfileCard from './ProfileCard';
import DoPost from './DoPost';
import PostList from '../PostList';

import { sendPost, getTimeline } from '../../actions/userActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getTimeline();
  }

  render() {
    if (this.props.isLoading) {
      return <div>...загрузка </div>;
    }

    return (
      <div>
        <Header />
        <div className="page-content">
          <div className="container">
            <div className="col-md-4">
              <ProfileCard />
            </div>

            <div className="col-md-8">
              <DoPost sendPost={this.props.sendPost} />
              <PostList posts={this.props.timeline} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeline: state.user.timeline,
  isLoading: state.user.isLoading,
  // email: state.user.email,
  // avatar: state.user.avatar,
  // posts_count: state.user.posts_count,
  // subs_count: state.user.subs_count,
  // following_count: state.user.following_count,
});

export default connect(mapStateToProps, { sendPost, getTimeline })(Dashboard);
