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
