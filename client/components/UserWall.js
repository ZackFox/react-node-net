import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getUser } from '../actions/userActions';

class UserWall extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { profile } = this.props;
    return <div> welcome back {profile.username} </div>;
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  profile: state.user.profile,
});

export default connect(mapStateToProps, { getUser })(UserWall);
