import React from 'react';
import { shallow, mount } from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
    const rate = '10';
    const balance = 10000;
    const props = { balance, bitcoin: null, fetchBitcoin: () => { } };
    let loot = shallow(<Loot {...props} />);

    it('should correct render', () => {
        expect(Loot).toMatchSnapshot();
    });

    describe('when component did mount', () => {
        const mockFetch = jest.fn();
        props.fetchBitcoin = mockFetch;

        beforeEach(() => {
            loot = mount(<Loot {...props} />)
        });

        it('should call fetch bitcoin', () => {
            expect(mockFetch).toHaveBeenCalled();
        })
    });

    describe('when data have been already fetched', () => {
        props.bitcoin = { bpi: { USD: { rate } } }
        beforeEach(() => {
            loot = mount(<Loot {...props} />)
        });

        it('should display correct bitcoin balance', () => {
            expect(loot.find('h3').text()).toEqual('Balance Bitcoin: 1000');
        })
    });
});