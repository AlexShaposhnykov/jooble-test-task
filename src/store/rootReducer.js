import { combineReducers } from 'redux';

import medicine from './medicine/reducer';
import modal from './modals/reducer';
import auth from './auth/reducer';

const appReducer = combineReducers({ medicine, modal, auth });

export default appReducer;
