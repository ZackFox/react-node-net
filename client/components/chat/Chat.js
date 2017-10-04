import React, { Component } from 'react';
import { connect } from 'react-redux';

class Chat extends Component {
  render() {
    return (
      <ul>
        {this.props.users.map(user => <li key={user.name}> {user.name}</li>)}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Chat);
