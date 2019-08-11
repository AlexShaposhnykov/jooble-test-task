import { combineReducers } from 'redux';

import medicine from './medicine/reducer';
import modal from './modals/reducer';

const appReducer = combineReducers({ medicine, modal });

export default appReducer;
