const initialState = {
  // profile: {},
  username: '',
  email: '',
  createTime: '',
  avatar: '',
  postsCount: 0,
  subsCount: 0,
  followingCount: 0,
  favsCount: 0,
  allPosts: [],
  userPosts: [],
  message: '',
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        username: action.user.username,
        email: action.user.email,
        createTime: action.user.createTime,
        avatar: action.user.avatar,
        postsCount: action.user.posts,
        subsCount: action.user.subscribers,
        followingCount: action.user.following,
        favsCount: action.user.favs,
      };
    case 'GET_USER_POSTS':
      return { ...state, userPosts: action.posts };
    case 'ADD_NEW_POST':
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
};

export default userReducer;
