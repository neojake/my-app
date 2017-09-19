import * as types from './ActionTypes';

export function increment() {
    return {
        type : types.INCREMENT
    }
}

/* ES6 */
export const decrement = () => {
    return {
        type : types.DECREMENT
    }
}