import * as constants from './actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';
const initialState = { balance: 0 };

const update = (state, updatedObject) => {
    return {
        ...state,
        ...updatedObject
    };
};

const balanceReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case constants.SET_BALANCE:
            newState = update(state, { balance: action.balance });
            break;
        case constants.DEPOSIT:
            newState = update(state, { balance: state.balance + action.deposit });
            break;
        case constants.WITHDRAW:
            newState = update(state, { balance: state.balance - action.withdrawal });
            break;
        default:
            newState = update(state, { balance: parseFloat(read_cookie(BALANCE_COOKIE)) || state.balance });
            break;
    }

    bake_cookie(BALANCE_COOKIE, newState.balance)
    return newState;
};

export default balanceReducer;