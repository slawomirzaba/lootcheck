import * as constants from './constants';

export const fetchBitcoin = () => {
    return dispatch => {
        return fetch(constants.BITCOIN_URL)
            .then(response => response.json())
            .then(json => dispatch({ type: constants.FETCH_BITCOIN, bitcoin: json }))
    };
}