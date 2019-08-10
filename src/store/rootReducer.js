import { combineReducers } from 'redux';

import medicine from './medicines/reducer';

const appReducer = combineReducers({ medicine });

export default appReducer;
