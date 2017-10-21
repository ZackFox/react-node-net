const initialState = {
  profile: {},
  message: '',
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return { ...state, profile: action.user };
    case 'ADD_NEW_POST':
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
};

export default userReducer;
