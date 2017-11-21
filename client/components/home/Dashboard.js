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
    return (
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
  // username: state.user.username,
  // email: state.user.email,
  // avatar: state.user.avatar,
  // posts_count: state.user.posts_count,
  // subs_count: state.user.subs_count,
  // following_count: state.user.following_count,
});

export default connect(mapStateToProps, { sendPost, getTimeline })(Dashboard);
