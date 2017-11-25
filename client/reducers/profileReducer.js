const initialState = {
  data: {},
  isLoading: false,
  posts: [],
  message: '',
  error: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PROFILE':
      return {
        ...state,
        data: action.profile,
      };
    case 'START_PROFILE_LOADING':
      return { ...state, isLoading: true };
    case 'STOP_PROFILE_LOADING':
      return { ...state, isLoading: false };
    case 'GET_POSTS':
      return { ...state, posts: action.posts };
    case 'PROFILE_NOT_FOUND':
      return { ...state, error: '404' };
    case 'FOLLOW':
      return { ...state, data: { ...state.data, isFollowing: true } };
    case 'UNFOLLOW':
      return { ...state, data: { ...state.data, isFollowing: false } };
    default:
      return state;
  }
};

export default profileReducer;
