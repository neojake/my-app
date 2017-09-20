import bags from './bags';
import counter from './counter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    bags, counter
});

export default rootReducer;