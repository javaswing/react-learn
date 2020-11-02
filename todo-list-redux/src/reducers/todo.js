import { ADD_TODO, TOGGLE_TODO } from '../actions';

export default todos = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todo: {
                    text: action.text,
                    complete: false
                }
            })
        case TOGGLE_TODO: 
            return state.map((e, i) => {
                if(i === action.index) {
                    return { ...e, complete = !e.complete}
                } else {
                    return e
                }
            })
        default:
            state
    }
};
