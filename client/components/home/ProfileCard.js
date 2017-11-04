import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../actions/userActions';

class ProfileCard extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const {
      username,
      avatar,
      postsCount,
      subsCount,
      followingCount,
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
            Наболтал <span> {postsCount}</span>
          </a>
          <a href={`/${username}/subscribers`}>
            Сплетники <span>{subsCount}</span>
          </a>
          <a href={`/${username}/following`}>
            Болтунов <span>{followingCount}</span>
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
  postsCount: state.user.postsCount,
  subsCount: state.user.subsCount,
  followingCount: state.user.followingCount,
});

export default connect(mapStateToProps, { getUser })(ProfileCard);
