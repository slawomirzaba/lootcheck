import * as constants from './constants';
import * as balanceActions from './balanceActions';

describe('#balanceReducer', () => {
    describe('setBalance', () => {
        const balance = 15;

        it('should create correct action to set balance', () => {
            const expectedAction = {type: constants.SET_BALANCE, balance};
            const result = balanceActions.setBalance(balance)

            expect(result).toEqual(expectedAction);
        })
    });

    describe('deposit', () => {
        const deposit = 15;

        it('should create correct action to deposit', () => {
            const expectedAction = {type: constants.DEPOSIT, deposit};
            const result = balanceActions.deposit(deposit)

            expect(result).toEqual(expectedAction);
        })
    });

    describe('withdraw', () => {
        const withdrawal = 15;

        it('should create correct action to withdraw', () => {
            const expectedAction = {type: constants.WITHDRAW, withdrawal};
            const result = balanceActions.withdraw(withdrawal)

            expect(result).toEqual(expectedAction);
        })
    });
});