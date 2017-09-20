import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'

const logger = createLogger();

export default() => {
    
    return createStore(rootReducer, applyMiddleware(logger, ReduxThunk));
}

