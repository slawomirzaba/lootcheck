import balanceReducer from './balanceReducer';
import * as constants from './actions/constants';

describe('#balanceReducer', () => {
    describe('initialise', () => {
        const balance = 10;

        it('should have 0 balance on init', () => {
            const result = balanceReducer(undefined, {});
    
            expect(result).toEqual({ balance: 0 });
        });

        it('should set balance', () => {
            const action = {
                type: constants.SET_BALANCE,
                balance
            }
            const result = balanceReducer(undefined, action);
            expect(result).toEqual({ balance });
        });

        it('shoud read data from coockie if exists', () => {
            const action = {
                type: constants.SET_BALANCE,
                balance
            }
            balanceReducer(undefined, action);
            const result = balanceReducer(undefined, {});
            expect(result).toEqual({ balance });
        })
    })

    it('should deposit into balance', () => {
        const initialState = { balance: 10 };
        const action = {
            type: constants.DEPOSIT,
            deposit: 15
        }
        const result = balanceReducer(initialState, action);
        expect(result).toEqual({ balance: 25 });
    });

    it('should withdraw from balance', () => {
        const initialState = { balance: 10 };
        const action = {
            type: constants.WITHDRAW,
            withdrawal: 7
        }
        const result = balanceReducer(initialState, action);
        expect(result).toEqual({ balance: 3 });
    });
});