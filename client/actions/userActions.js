import axios from 'axios';
import cookie from 'react-cookies';

export const getUser = () => dispatch => {
  axios
    .get('/api/v1/user', {
      headers: { Authorization: `Bearer ${cookie.load('token')}` },
    })
    .then(response => {
      dispatch({ type: 'GET_USER', user: response.data.user });
    });
  // .catch(()=>{
  // });
};

export const sendPost = text => dispatch => {
  axios
    .post(
      '/api/v1/post',
      { text },
      {
        headers: { Authorization: `Bearer ${cookie.load('token')}` },
      }
    )
    .then(response => {
      console.log(response.data);
      // dispatch({ type: 'ADD_NEW_POST'});
    });
  // .catch(()=>{
  // });
};

export const getUserPosts = profileName => dispatch => {
  axios
    .get(
      '/api/v1/posts',
      { params: { profileName } },
      {
        headers: { Authorization: `Bearer ${cookie.load('token')}` },
      }
    )
    .then(response => {
      const posts = response.data.posts;
      dispatch({ type: 'GET_USER_POSTS', posts });
    });
  // .catch(()=>{
  // });
};
