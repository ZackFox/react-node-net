import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileCard extends Component {
  render() {
    const {
      username,
      avatar,
      posts_count,
      subs_count,
      following_count,
    } = this.props;

    return (
      <div className="profile-card clearfix">
        <div className="userpic">
          <img src={`/assets/img/uploads/${this.props.avatar}`} alt="avatar" />
        </div>
        <div>
          <a href={`/${username}`}>{username}</a>
        </div>
        <div className="profile-card-stats">
          <a href={`/${username}`}>
            <span>@</span>
            {this.props.username}
          </a>
          <a href={`/${username}`}>
            Наболтал <span> {posts_count}</span>
          </a>
          <a href={`/${username}/subscribers`}>
            Сплетники <span>{subs_count}</span>
          </a>
          <a href={`/${username}/following`}>
            Болтунов <span>{following_count}</span>
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.user.username,
  email: state.user.email,
  avatar: state.user.avatar,
  posts_count: state.user.posts_count,
  subs_count: state.user.subs_count,
  following_count: state.user.following_count,
});

export default connect(mapStateToProps, {})(ProfileCard);
