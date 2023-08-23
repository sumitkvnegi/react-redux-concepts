//  this file is for combining all reducers into root reducer

import taskReducer from './taskReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export default rootReducer;
