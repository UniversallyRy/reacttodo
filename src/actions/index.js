import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    CLEAR_CHECKED,
    EDIT_TODO,
    HOVER_OVER,
    LOAD_LOCALSTORAGE,
    SAVE_LOCALSTORAGE,
} from './actionTypes';


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

export const hoverOver = id => ({
    type: HOVER_OVER,
    id
});

export const LoadStateLocalStorage = () => ({
    type: LOAD_LOCALSTORAGE,
    payload: {},
});

export const SaveStateLocalStorage = () => ({
    type: SAVE_LOCALSTORAGE,
    payload: {},
});