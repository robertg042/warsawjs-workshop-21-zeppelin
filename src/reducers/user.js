import * as types from '../actions'

const initialState = {
  profile: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_PROFILE:
      return {
        profile: action.userData
      };
    default:
      return state;
  }
};

export default userReducer;
