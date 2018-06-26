import api from '../utils/api'
import * as types from './'

const setUserProfile = userData => ({
  type: types.SET_USER_PROFILE,
  userData
});

export const login =  (username, password) => async dispatch => {
  try {
    const user = await api.user.login({username, password});
    dispatch(handleAuth({username: user.username}));
  } catch (e) {
    console.log(e);
  }
};

export const handleAuth = data => dispatch => {
  dispatch(setUserProfile(data));
  localStorage.setItem('warsawjs-username', data.username);
};
