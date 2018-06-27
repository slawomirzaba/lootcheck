import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('#Wallet', () => {
    const depositMock = jest.fn();
    const withdrawMock = jest.fn();
    const props = { balance: 20, deposit: depositMock, withdraw: withdrawMock };
    const wallet = shallow(<Wallet {...props} />);

    it('should correct render', () => {
        expect(wallet).toMatchSnapshot();
    })

    it('should correct display balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet Deposit: 20');
    });

    it('should render input', () => {
        expect(wallet.find('.balance-input').exists()).toBe(true);
    });

    describe('when user type in input', () => {
        const balanceInputValue = '12.2';

        beforeEach(() => {
            wallet.find('.balance-input').simulate('change', { target: { value: balanceInputValue } });
        });

        it('state should be changed and convert to int', () => {
            expect(wallet.state().balanceInput).toEqual(parseFloat(balanceInputValue));
        });

        describe('and user execute deposit action', () => {
            beforeEach(() => {
                wallet.find('.btn-deposit').simulate('click');
            });

            it('should be executed deposit action from props', () => {
                expect(depositMock).toBeCalledWith(parseFloat(balanceInputValue))
            });
        });

        describe('and user execute withdraw action', () => {
            beforeEach(() => {
                wallet.find('.btn-withdraw').simulate('click');
            });

            it('should be executed withdraw action from props', () => {
                expect(withdrawMock).toBeCalledWith(parseFloat(balanceInputValue))
            });
        });
    });

})