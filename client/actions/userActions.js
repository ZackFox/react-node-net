import axios from 'axios';
import cookie from 'react-cookies';

export const signUp = userData => dispatch => {
  axios
    .post('/api/v1/signup', userData)
    .then(result => {
      cookie.save('token', result.data.token, { path: '/', httpOnly: true });
      dispatch({ type: 'AUTH_USER' });

      // REDIRECT
    })
    .catch(() => {});
};

export const signIn = userData => dispatch => {
  axios
    .post('/api/v1/signin', userData)
    .then(response => {
      cookie.save('token', response.data.token, { path: '/' });
      dispatch({ type: 'AUTH_USER' });
      // dispatch({ type: 'GET_USER' });
    })
    .catch(err => {
      console.log(err);
      const { message } = err.response.data;
      dispatch({ type: 'AUTH_ERROR', message });
    });
};

export const logOut = userData => dispatch => {
  axios
    .post('/api/v1/logout', userData)
    .then(result => {
      cookie.remove('token');
      dispatch({ type: 'UNAUTH_USER' });

      // REDIRECT
    })
    .catch(() => {});
};

export const getCurrentUser = () => dispatch => {
  axios
    .get('/api/v1/user', {
      headers: { Authorization: `Bearer ${cookie.load('token')}` },
    })
    .then(response => {
      dispatch({ type: 'GET_USER', user: response.data.user });
    })
    .catch(() => {});
};

export const sendPost = text => dispatch => {
  axios
    .post('/api/v1/post', {
      text,
      headers: { Authorization: `Bearer ${cookie.load('token')}` },
    })
    .then(response => {
      console.log(response.data);
      // dispatch({ type: 'ADD_NEW_POST'});
    });
  // .catch(()=>{
  // });
};
