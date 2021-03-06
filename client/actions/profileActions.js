import axios from 'axios';
import cookie from 'react-cookies';

export const getUserProfile = profileName => dispatch => {
  const token = cookie.load('token');
  const options = { params: { profileName } };

  if (token) {
    options.headers = { Authorization: `Bearer ${token}` };
  }

  dispatch({type: "START_PROFILE_LOADING" })
  axios
    .get('/api/v1/profile', options)
    .then(response => {
      dispatch({ type: 'GET_USER_PROFILE', profile: response.data });
      dispatch({type: "STOP_PROFILE_LOADING" })
    })
    .catch(() => {
      dispatch({ type: 'PROFILE_NOT_FOUND', message: '404' });
    });
};

export const getPosts = profileName => dispatch => {
  axios
    .get('/api/v1/posts', {
      params: { profileName },
      headers: { Authorization: `Bearer ${cookie.load('token')}` },
    })
    .then(response => {
      const posts = response.data.posts;

      dispatch({ type: 'GET_POSTS', posts });
    });
  // .catch(()=>{
  // });
};
