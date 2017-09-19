import cart from './cart';
import counter from './counter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cart, counter
});

export default rootReducer;