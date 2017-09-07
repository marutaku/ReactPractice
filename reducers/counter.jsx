import {INCREMENT, DECREMENT} from '../constants/ActionTypes';

const initializeState = {
    value: 0
}

export default function counter(state = initializeState, action){
    switch (action.type){
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state
    }
}