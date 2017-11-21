import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../templates/Header';
import Subscribers from '../profile/Subscribers';
import Following from '../profile/following';
import PostList from '../PostList';
import NotFoundPage from '../../components/NotFoundPage';

import { getUserProfile, getPosts } from '../../actions/profileActions';
import { follow, unfollow } from '../../actions/userActions';

class ProfilePage extends Component {
  componentDidMount() {
    const profileName = this.props.match.params.profileName;
    this.props.getUserProfile(profileName);
    this.props.getPosts(profileName);
  }

  onFollow = e => {
    e.preventDefault();
    const profileId = e.target.attributes[0].value;
    this.props.follow(profileId);
  };

  onUnfollow = e => {
    e.preventDefault();
    const profileId = e.target.attributes[0].value;
    this.props.unfollow(profileId);
  };

  render() {
    const { isAuthenticated, user_id, profile_id, isFollowing } = this.props;

    let button = null;
    if (isAuthenticated && user_id === profile_id) button = null;
    if (isAuthenticated && user_id !== profile_id) {
      if (isFollowing) {
        button = (
          <button data-id={profile_id} onClick={this.onUnfollow}>
            Забыть
          </button>
        );
      } else {
        button = (
          <button data-id={profile_id} onClick={this.onFollow}>
            Подслушивать
          </button>
        );
      }
    }

    return (
      <div className="">
        <div className="row">
          <div className="col-md-12">
            <Header />
            {button}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-3 col-md-9">
              <Switch>
                <Route
                  path="/:profileName"
                  exact
                  render={() => <PostList posts={this.props.posts} />}
                />
                <Route
                  path="/:profileName/subscribers"
                  component={Subscribers}
                />
                <Route path="/:profileName/following" component={Following} />
                {/* <Route path="*" component={NotFoundPage} /> */}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user_id: state.user.id,
  profile_id: state.profile.id,
  isAuthenticated: state.user.isAuthenticated,
  isFollowing: state.profile.isFollowing,
  posts: state.profile.posts,
});

export default connect(mapStateToProps, {
  getUserProfile,
  getPosts,
  follow,
  unfollow,
})(ProfilePage);
