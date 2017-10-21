const initialState = { errors: '', message: '', isAuthenticated: false };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER':
      return { ...state, isAuthenticated: true };
    case 'AUTH_ERROR':
      return { ...state, message: action.message };
    case 'UNAUTH_USER':
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default userReducer;
