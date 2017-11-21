const initialState = {
  isAuthenticated: false,
  id: null,
  screenName: '',
  username: '',
  email: '',
  createTime: null,
  avatar: '',
  posts_count: 0,
  subs_count: 0,
  following_count: 0,
  favs_count: 0,
  timeline: [],
  errors: '',
  message: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER':
      return { ...state, isAuthenticated: true };
    case 'AUTH_ERROR':
      return { ...state, message: action.message };
    case 'UNAUTH_USER':
      return { ...state, isAuthenticated: false };

    case 'GET_USER':
      return {
        ...state,
        id: action.user._id,
        username: action.user.username,
        email: action.user.email,
        createTime: action.user.createTime,
        avatar: action.user.avatar,
        posts_count: action.user.posts_count,
        subs_count: action.user.subs_count,
        following_count: action.user.following_count,
        favs_count: action.user.favs_count,
      };
    case 'GET_TIMELINE':
      return { ...state, timeline: action.timeline };
    case 'INCREASE_FOLLOWING_COUNT':
      return { ...state, following_count: state.following_count + 1 };
    case 'DECREASE_FOLLOWING_COUNT':
      return {
        ...state,
        following_count:
          state.following_count > 0 ? state.following_count - 1 : 0,
      };
    default:
      return state;
  }
};

export default userReducer;
