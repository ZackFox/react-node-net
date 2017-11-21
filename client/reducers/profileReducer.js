const initialState = {
  id: null,
  screename: '',
  username: '',
  email: '',
  createTime: null,
  avatar: '',
  posts_count: 0,
  subs_count: 0,
  following_count: 0,
  favs_count: 0,
  posts: [],
  isFollowing: false,
  message: '',
  error: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PROFILE':
      return {
        ...state,
        id: action.profile._id,
        username: action.profile.username,
        email: action.profile.email,
        createTime: action.profile.createTime,
        avatar: action.profile.avatar,
        posts_count: action.profile.posts_count,
        subs_count: action.profile.subs_count,
        following_count: action.profile.following_count,
        favs_count: action.profile.favs_count,
        isFollowing: action.profile.isFollowing,
      };
    case 'GET_POSTS':
      return { ...state, posts: action.posts };
    case 'FOLLOW':
      return { ...state, isFollowing: true };
    case 'UNFOLLOW':
      return { ...state, isFollowing: false };
    default:
      return state;
  }
};

export default profileReducer;
