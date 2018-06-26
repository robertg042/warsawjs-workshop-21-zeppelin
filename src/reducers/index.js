import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

import userReducer from './user'
import postReducer from './post'

export default combineReducers(
  {
    user: userReducer,
    post: postReducer,
    form,
    router
  }
);
