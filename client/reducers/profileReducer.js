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
  allPosts: [],
  userPosts: [],
  isFollowig: false,
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
        isFollowig: action.profile.isFollowig,
        canEdit: action.profile.canEdit,
        // username: action.profile.username,
      };
    case 'GET_USER_POSTS':
      return { ...state, userPosts: action.posts };
    default:
      return state;
  }
};

export default profileReducer;
