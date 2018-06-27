import bitcoinReducer from './bitcoinReducer';
import * as constants from './actions/constants';

describe('#bitcoinReducer', () => {
    const bitcoinData = 'bitcoin data';

    it('should assign bitcoin data to state', () => {
        const action = {
            type: constants.FETCH_BITCOIN,
            bitcoin: bitcoinData
        }

        const result = bitcoinReducer(undefined, action);
        expect(result).toEqual({bitcoin: bitcoinData})
    })
});