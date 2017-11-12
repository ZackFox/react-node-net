import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostItem from './PostItem';
import { getUserPosts } from '../actions/userActions';

class PostList extends Component {
  componentDidMount() {
    const profileName = this.props.match.params.profileName;
    // this.props.getUserPosts(profileName);
  }

  render() {
    return (
      <div className="posts-list">
        <ul>
          {this.props.userPosts.map(post => (
            <PostItem key={post._id} post={post} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userPosts: state.profile.userPosts,
});

export default connect(mapStateToProps, { getUserPosts })(PostList);
