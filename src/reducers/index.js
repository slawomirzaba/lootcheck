import { combineReducers } from 'redux';
import balance from './balanceReducer';
import bitcoin from './bitcoinReducer';

export default combineReducers({ balance, bitcoin });