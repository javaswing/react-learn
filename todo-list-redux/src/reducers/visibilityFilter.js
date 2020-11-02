import { SET_VISIBILITY_FILITER } from '../actions';

export default visibilityFilter = (state, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILITER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        default:
            state
    }

};
