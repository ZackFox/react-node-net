import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../templates/Header';
import Subscribers from '../profile/Subscribers';
import Following from '../profile/following';
import PostList from '../PostList';
import NotFoundPage from '../../components/NotFoundPage';

import { getCurrentUser, follow, unfollow } from '../../actions/userActions';
import { getUserProfile, getPosts } from '../../actions/profileActions';

class ProfilePage extends Component {
  componentDidMount() {
    const profileName = this.props.match.params.profileName;
    this.props.getCurrentUser(profileName);
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
    const {
      user,
      profile,
      posts,
      isAuthenticated,
      isFollowing,
      isLoading,
    } = this.props;

    if (isLoading) {
      return <div>...загрузка </div>;
    }

    // let button = null;
    // if (isAuthenticated && user_id === profile._id) button = null;
    // if (isAuthenticated && user_id !== profile._id) {
    //   if (isFollowing) {
    //     button = (
    //       <button data-id={profile._id} onClick={this.onUnfollow}>
    //         Забыть
    //       </button>
    //     );
    //   } else {
    //     button = (
    //       <button data-id={profile._id} onClick={this.onFollow}>
    //         Подслушивать
    //       </button>
    //     );
    //   }
    // }

    return (
      <div>
        <Header user={user} />
        <div className="profile-content">
          <div className="profile-bg" />
          <div className="container">
            <div className="profile-avatar">
              <img src={`/assets/img/uploads/${profile.avatar}`} alt="avatar" />
            </div>
            <div className="profile-stats">
              {/* {button} */}
              <span>
                Наболтал <span> {profile.posts_count}</span>
              </span>
              <a href={`/${profile.username}/subscribers`}>
                Сплетники <span>{profile.subs_count}</span>
              </a>
              <a href={`/${profile.username}/following`}>
                Болтунов <span>{profile.following_count}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-md-offset-3 col-md-9">
            <Switch>
              <Route
                path="/:profileName"
                exact
                render={() => <PostList posts={posts} />}
              />
              <Route path="/:profileName/subscribers" component={Subscribers} />
              <Route path="/:profileName/following" component={Following} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.data,
  profile: state.profile.data,
  posts: state.profile.posts,
  isAuthenticated: state.user.isAuthenticated,
  isLoading: state.profile.isLoading,
});

export default connect(mapStateToProps, {
  getCurrentUser,
  getUserProfile,
  getPosts,
  follow,
  unfollow,
})(ProfilePage);
