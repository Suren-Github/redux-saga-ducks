// action types
const INCREMENT = 'redux-saga-ducks/counter/INCREMENT';
const DECREMENT = 'redux-saga-ducks/counter/DECREMENT';

// action creator
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

// reducer
const initialState = {
    count: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1  };
        case DECREMENT:
            return;
        // do reducer stuff
        default: return state;
    }
}