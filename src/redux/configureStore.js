import { combineReducers, createStore } from 'redux';

import CounterReducer from '../components/Counter/ducks/counter';

const rootReducer = combineReducers({
    CounterReducer,
});

const store = createStore(rootReducer);

export default store;