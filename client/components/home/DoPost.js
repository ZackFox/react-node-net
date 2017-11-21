import React, { Component } from 'react';

class DoPost extends Component {
  makePost = e => {
    e.preventDefault();
    const text = this.inputtext.value;
    this.props.sendPost(text);
    this.inputtext.value = '';
  };

  render() {
    return (
      <div className="post-box">
        <form onSubmit={this.makePost}>
          <input
            type="text"
            ref={el => {
              this.inputtext = el;
            }}
          />
          <input type="submit" value="Болтнуть" />
        </form>
      </div>
    );
  }
}

export default DoPost;
