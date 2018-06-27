import React from 'react';
import Wallet from './components/Wallet/Wallet';
import Loot from './components/Loot/Loot';

const app = () => {
    return (
        <div>
            <h2>Loot Check</h2>
            <Wallet />
            <Loot />
        </div>
    );
}

export default app;