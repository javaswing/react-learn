export const ADD_TODO = 'ADD_TODO';

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const SET_VISIBILITY_FILITER = 'SET_VISIBILITY_FILITER';


/**
 * filters vars
 */
export const VisiblityFilters = {
    SHOW_ALL: `SHOW_ALL`,
    SHOW_ACTIVE: `SHOW_ACTIVE`,
    SHOW_COMPLETED: `SHOW_COMPLETED`
};


/**
 * all actions
 *  
 */
export const addTodo = (text) => {
    return { type: ADD_TODO, text }
};

export const toggleTodo = (index) => {
    return { type: TOGGLE_TODO, index }
}

export const setVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILITER, filter }
};

