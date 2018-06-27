import * as constants from './actions/constants';

const initialState = {
    bitcoin: null
};

const bitcoinReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.FETCH_BITCOIN:
            return {
                ...state,
                bitcoin: action.bitcoin
            };
        default:
            return state;
    }
}

export default bitcoinReducer;