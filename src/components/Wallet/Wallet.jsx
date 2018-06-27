import React from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../../reducers/actions/balanceActions';

export class Wallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = { balanceInput: null };
    }

    onInputChange = (event) => this.setState({ balanceInput: parseFloat(event.target.value) });

    deposit = () => this.props.deposit(this.state.balanceInput);

    withdraw = () => this.props.withdraw(this.state.balanceInput);

    render() {
        return (
            <div>
                <h3 className='balance'>Wallet Deposit: {this.props.balance}</h3>
                <input className='balance-input' onChange={this.onInputChange} />
                <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
                <button className='btn-withdraw' onClick={this.withdraw}>withdraw</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        balance: state.balance.balance
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (value) => dispatch(deposit(value)),
        withdraw: (value) => dispatch(withdraw(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);