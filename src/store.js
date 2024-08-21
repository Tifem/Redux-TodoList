import { createStore, applyMiddleware } from 'redux';
import { thunk as thunkMiddleware } from 'redux-thunk';  // Use named export here
import { composeWithDevTools } from 'redux-devtools-extension';

import taskReducer from './reducers/taskReducer';

const store = createStore(
    taskReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)) // Use thunkMiddleware here
);

export default store;