import ReactDOM from'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import {createStore, combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import Reducer from './reducers/index'
import App from'./containers/App'

// const join = {
  // ... your other reducers here ...
//   Reducers,
//   form: formReducer     // <---- Mounted at 'form'. See note below.
// }
// const reducer = combineReducers(join);

const store = createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);