const initialState = { errors: '', message: '', authenticated: false };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER':
      return { ...state, authenticated: true };
    case 'AUTH_ERROR':
      return { ...state, message: action.message };
    case 'UNAUTH_USER':
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default userReducer;
