import rootReducer from './index';

describe('rootReducer', () => {
    it('should initialise with correct state', () => {
        expect(rootReducer(undefined, {})).toEqual({
            balance: { balance: 0 },
            bitcoin: { bitcoin: null }
        });
    });
})
