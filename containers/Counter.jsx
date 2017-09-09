import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Header'
import CounterContent from '../components/Counter'
import * as CounterActions from '../actions/counter'

class Counter extends Component {

    render() {
        const { value, actions } = this.props;
        return (
            <div>
                <Header />
                <CounterContent value={value} actions={actions} />
            </div>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return state.counter
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CounterActions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);