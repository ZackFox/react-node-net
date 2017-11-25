import React from 'react';

export default props => {
  const { author, createTime, text } = props.post;
  return (
    <li className="post-item">
      <div className="content">
        <div className="post-item-header">
          <a href={`/${author.username}`}>
            <img src={`/assets/img/uploads/${author.avatar}`} alt="avatar" />
            <span className="post-screen-name">{author.screenName}</span>
            <span className="post-user-name">@{author.username}</span>
          </a>
          <span className="date">{createTime}</span>
        </div>
        <div className="post-item-text">
          <p>{text}</p>
        </div>
        <div className="post-item-footer">
          <a href={`/`}> разболтать всем </a>
        </div>
      </div>
    </li>
  );
};
