import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('#App', () => {
    const app = shallow(<App />);

    it('should correct render', () => {
        expect(app).toMatchSnapshot();
    })

    it('should render Wallet', () => {
        const wallet = app.find('Connect(Wallet)')
        
        expect(wallet.exists()).toBe(true);
    })

    it('should render Loot', () => {
        const loot = app.find('Connect(Loot)')
        
        expect(loot.exists()).toBe(true);
    })
})