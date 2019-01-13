import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    CLEAR_CHECKED,
    TOGGLE_ALL
} from './actionTypes';


export function addTodo(task) {
    return {
        type: ADD_TODO,
        task
    };
}

export function deleteTodo(index) {
    return {
        type: DELETE_TODO,
        index
    };
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}

export function clearChecked(checked) {
    return {
        type: CLEAR_CHECKED,
        checked
    };
}

export function toggleAll(checked) {
    return {
        type: TOGGLE_ALL,
        checked
    };
}