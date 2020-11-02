import { ADD_TODO, TOGGLE_TODO } from '../actions';

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }

            ]
        case TOGGLE_TODO:
            return state.map((e, i) =>
                (i === action.index)
                    ? { ...e, completed: !e.completed }
                    : e

            )
        default:
            return state
    }
};

export default todos
