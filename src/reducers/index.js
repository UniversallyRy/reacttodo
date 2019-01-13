import uuid from 'uuid';
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_CHECKED,
  TOGGLE_ALL,
  EDIT_TODO,
  HOVER_OVER,
  LOAD_LOCALSTORAGE,
  SAVE_LOCALSTORAGE
} from "../actions/actionTypes";

const LOCALSTORAGE_NAME = 'Local Storage'

const initialState = {
  todos: [{
      task: 'New TODO',
      isCompleted: false,
      id: uuid(),
      isEdited: false,
      hovered: false
    },
    {
      task: 'NO TODO',
      isCompleted: false,
      id: uuid(),
      isEdited: false,
      hovered: false
    },
    {
      task: 'Read the docs.',
      isCompleted: false,
      id: uuid(),
      isEdited: false,
      hovered: false
    }
  ]
};

const Init = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOCALSTORAGE:
      {
        const LocalStorageState = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_NAME));
        if (LocalStorageState) {
          return { ...state,
            todos: LocalStorageState
          }
        }
        return state;
      }
    case SAVE_LOCALSTORAGE:
      {
        window.localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(action.payload.state));
        return state;
      }

    case ADD_TODO:
      {
        const id = uuid();
        const todoItem = {
          task: action.task,
          id,
          isCompleted: false,
          isEdited: false,
          hovered: false
        };
        return { ...state,
          todos: [...state.todos, todoItem]
        }
      }

    case DELETE_TODO:
      {
        const todos = state.todos.filter(({
          id,
          i
        }) => id !== action.index);
        return { ...state,
          todos
        };
      }

    case TOGGLE_TODO:
      {
        const todos = state.todos.map(todo => {
          if (todo.id === action.id) {
            todo.isCompleted = !todo.isCompleted
          }
          return todo;
        })
        return { ...state,
          todos
        };
      }

    case EDIT_TODO:
      {
        const todos = state.todos.map(todo => {
          if (todo.id === action.id) {
            todo.isEdited = !todo.isEdited
          }
          return todo;
        })
        return { ...state,
          todos
        };
      }

    case CLEAR_CHECKED:
      {
        const todos = state.todos.filter(todo => todo.isCompleted !== action.checked)
        return { ...state,
          todos
        }
      }

    case TOGGLE_ALL:
      {
        return Object.assign({}, state, {
          todos: state.todos.map(todo =>
            ((todo.isCompleted === action.checked)) ?
            todo :
            todo
          )
        });
      }

    case HOVER_OVER:
      {
        const todos = state.todos.map(todo => {
          if (todo.id === action.id) {
            todo.hovered = !todo.hovered
          }
          return todo;
        })
        return {
          ...state,
          todos
        }
      }

    default:
      {
        return state;
      }
  }
};

export default Init;