import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as constants from './constants'
import { fetchBitcoin } from './bitcoin';

const createStoreMock = configureMockStore([thunk]);
const store = createStoreMock({ bitcoin: {} });
const mockResponse = { body: { bpi: 'bitcoin price' } };
fetchMock.get(constants.BITCOIN_URL, mockResponse);

describe('#bitcoinActions', () => {
    it('creates async action to fetch bitcoin data', () => {
        const expectedActions = [{
            bitcoin: mockResponse.body,
            type: constants.FETCH_BITCOIN
        }];

        return store.dispatch(fetchBitcoin())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});