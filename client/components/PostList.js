import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  let list;
  if (posts && posts.length > 0) {
    list = <ul> {posts.map(p => <PostItem key={p._id} post={p} />)}</ul>;
  } else {
    list = <div> Балабол еще ничего не наболтал</div>;
  }

  return <div className="posts-list">{list}</div>;
};

export default PostList;
