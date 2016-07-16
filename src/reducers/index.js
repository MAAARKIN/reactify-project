import { combineReducers } from 'redux'
import todos from './todo'
import {reducer as formReducer} from 'redux-form';

const todoApp = combineReducers({
  todos,
  form: formReducer
});

export default todoApp;