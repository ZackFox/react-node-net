import axios from 'axios';

export const signUpRequest = userData => dispatch => {
  axios
    .post('/api/v1/signup', userData)
    .then(result => {
      console.log(result.data);
    })
    .catch(() => {});
};
