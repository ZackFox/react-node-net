import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileCard extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="profile-card clearfix">
        <div className="card-bg" />
        <div className="profile-card-content">
          <a className="user-avatar" href={`/${user.username}`}>
            <img src={`/assets/img/uploads/${user.avatar}`} alt="avatar" />
          </a>
          <div className="card-name">
            <a href={`/${user.username}`}>
              <div>{user.screenName}</div>
              <span>@</span>
              {user.username}
            </a>
          </div>
          <div className="card-stats">
            <a href={`/${user.username}`}>
              Наболтал <span> {user.posts_count}</span>
            </a>
            <a href={`/${user.username}/subscribers`}>
              Сплетники <span>{user.subs_count}</span>
            </a>
            <a href={`/${user.username}/following`}>
              Болтунов <span>{user.following_count}</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.data,
});

export default connect(mapStateToProps, {})(ProfileCard);
