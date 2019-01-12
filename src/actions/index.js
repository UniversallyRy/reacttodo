import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from './actionTypes';


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