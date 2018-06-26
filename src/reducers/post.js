import * as types from '../actions'

const initialState = {
  list: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POSTS_LIST:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
};

export default postReducer;
