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
    .then(() => {
      cookie.remove('token');
      dispatch({ type: 'UNAUTH_USER' });
      // REDIRECT
    })
    .catch(() => {});
};

export const getCurrentUser = () => dispatch => {
  dispatch({ type: 'START_USER_LOADING' });
  axios
    .get('/api/v1/user', {
      headers: { Authorization: `Bearer ${cookie.load('token')}` },
    })
    .then(response => {
      dispatch({ type: 'GET_USER', user: response.data.user });
      // dispatch({ type: 'AUTH_USER' });
      dispatch({ type: 'STOP_USER_LOADING' });
    })
    .catch(() => {
      dispatch({ type: 'STOP_USER_LOADING' });
      cookie.remove('token');
      dispatch({ type: 'UNAUTH_USER' });
    });
};

export const getTimeline = () => dispatch => {
  axios
    .get('/api/v1/timeline', {
      headers: { Authorization: `Bearer ${cookie.load('token')}` },
    })
    .then(response => {
      dispatch({ type: 'GET_TIMELINE', timeline: response.data.posts });
      dispatch({ type: 'INCREASE_POSTS_COUNT' });
    })
    .catch(() => {});
};

export const sendPost = text => dispatch => {
  axios
    .post(
      '/api/v1/post',
      {
        text,
      },
      {
        headers: { Authorization: `Bearer ${cookie.load('token')}` },
      }
    )
    .then(response => {
      dispatch({ type: 'ADD_NEW_POST', post: response.data.post });
    })
    .catch(err => {
      console.log(err);
    });
};

export const follow = profileId => dispatch => {
  axios
    .post(`/api/v1/follow/${profileId}`, null, {
      headers: { Authorization: `Bearer ${cookie.load('token')}` },
    })
    .then(response => {
      // console.log(response.data);
      dispatch({ type: 'FOLLOW' });
      dispatch({ type: 'INCREASE_FOLLOWING_COUNT' });
    })
    .catch(() => {});
};

export const unfollow = profileId => dispatch => {
  axios
    .put(`/api/v1/follow/${profileId}`, null, {
      headers: { Authorization: `Bearer ${cookie.load('token')}` },
    })
    .then(response => {
      dispatch({ type: 'UNFOLLOW' });
      dispatch({ type: 'DECREASE_FOLLOWING_COUNT' });
    })
    .catch(() => {});
};
