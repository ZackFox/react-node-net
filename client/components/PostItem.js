import React from 'react';

export default props => {
  const { author, createTime, text } = props.post;
  return (
    <li>
      <div className="content">
        <div className="post-item-header">
          <a className="screen-name" href={`/${author.username}`}>
            <img
              src={`/assets/img/uploads/${author.avatar}`}
              width="120"
              alt="avatar"
            />
            <span className="post-screen-name">{author.screenName}</span>
            <span className="post-screen-name">@{author.username}</span>
          </a>
          <span className="date">{createTime}</span>
        </div>
      </div>
      <div className="post-text-container">
        <p>{text}</p>
      </div>
      <div className="post-item-footer">
        <a href={`/`}> разболтать всем </a>
      </div>
    </li>
  );
};
