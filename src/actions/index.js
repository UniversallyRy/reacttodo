import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    CLEAR_CHECKED,
    EDIT_TODO,
    RETURN_EDIT_TODO,
    LOAD_LOCALSTORAGE,
    SAVE_LOCALSTORAGE,
    CANCEL_EDIT_TODO,
    SET_VISIBILITY_FILTER,
} from './actionTypes';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export const addTodo = task => ({
    type: ADD_TODO,
    task
});

export const deleteTodo = index => ({
    type: DELETE_TODO,
    index
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const clearChecked = checked => ({
    type: CLEAR_CHECKED,
    checked
});

export const editTodo = id => ({
    type: EDIT_TODO,
    id
})

export const returnTodo = modifiedTodo => ({
    type: RETURN_EDIT_TODO,
    payload: { modifiedTodo }
})

export const LoadStateLocalStorage = () => ({
    type: LOAD_LOCALSTORAGE,
    payload: {},
});

export const SaveStateLocalStorage = () => ({
    type: SAVE_LOCALSTORAGE,
    payload: {},
});

export const cancelEdit = () => ({
    type: CANCEL_EDIT_TODO,
    payload: {},
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})