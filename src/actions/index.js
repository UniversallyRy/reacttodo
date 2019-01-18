import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    EDIT_TODO,
    SAVE_EDITED_TODO,
    CANCEL_EDIT_TODO,
    CLEAR_COMPLETED,
    LOAD_LOCALSTORAGE,
    SAVE_LOCALSTORAGE,
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

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});


export const editTodo = id => ({
    type: EDIT_TODO,
    id
})

export const saveEdit = modifiedTodo => ({
    type: SAVE_EDITED_TODO,
    modifiedTodo
})

export const cancelEdit = () => ({
    type: CANCEL_EDIT_TODO,
    payload: {},
});

export const clearChecked = checked => ({
    type: CLEAR_COMPLETED,
    checked
});

export const LoadStateLocalStorage = items => ({
    type: LOAD_LOCALSTORAGE,
    items,
});

export const SaveStateLocalStorage = items => ({
    type: SAVE_LOCALSTORAGE,
    items,
});


export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})