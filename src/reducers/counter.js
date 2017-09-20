import * as types from '../actions/ActionTypes';

const initialState = {
    counters: [{
        number: 0,
        color: 'black'
    }]
}

export default (state = initialState, action) => {

    const { counters } = state;

    switch (action.type) {
        case types.CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        number: 0,
                        color: action.color
                    }
                ]
            }
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            }
        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number +1
                    },
                    ...counters.slice(action.index+1, counters.length)
                ]
            }
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number -1                        
                    },
                    ...counters.slice(action.index+1, counters.length)
                ]
            }
        default:
            return state;
    }
};