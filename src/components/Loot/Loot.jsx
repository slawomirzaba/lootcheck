import React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../../reducers/actions/bitcoin';

export class Loot extends React.Component {

    componentDidMount() {
        this.props.fetchBitcoin();
    }

    convertBitcoinBalance = () => {
        if (!this.props.bitcoin) return '';
        
        const balance = this.props.balance;
        const bitcoinBalance = parseFloat(this.props.bitcoin.bpi.USD.rate.replace(',', ''));

        return balance / bitcoinBalance;
    }

    render() {
        return (
            <h3>Balance Bitcoin: {this.convertBitcoinBalance()}</h3>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        balance: state.balance.balance,
        bitcoin: state.bitcoin.bitcoin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBitcoin: () => dispatch(fetchBitcoin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loot);