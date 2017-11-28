const initialState = {
  isAuthenticated: false,
  data: {},
  timeline: [],
  isLoading: false,
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
      return { ...state, data: action.user };
    case 'START_USER_LOADING':
      return { ...state, isLoading: true };
    case 'STOP_USER_LOADING':
      return { ...state, isLoading: false };
    case 'GET_TIMELINE':
      return { ...state, timeline: action.timeline };
    case 'ADD_NEW_POST':
      return {
        ...state,
        timeline: [action.post, ...state.timeline],
      };
    case 'INCREASE_POSTS_COUNT':
      return {
        ...state,
        posts_count: state.posts_count + 1,
      };
    case 'INCREASE_FOLLOWING_COUNT':
      return {
        ...state,
        data: {
          ...state.data,
          following_count: state.data.following_count + 1,
        },
      };
    case 'DECREASE_FOLLOWING_COUNT':
      return {
        ...state,
        data: {
          ...state.data,
          following_count:
            state.data.following_count > 0 ? state.data.following_count - 1 : 0,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
