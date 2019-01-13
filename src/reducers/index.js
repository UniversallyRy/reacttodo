import uuid from 'uuid';
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_CHECKED,
  TOGGLE_ALL
} from "../actions/actionTypes";

const initialState = {
  todos: [{
      task: 'New TODO',
      isCompleted: false,
      id: 0
    },
    {
      task: 'NO TODO',
      isCompleted: false,
      id: 1
    },
    {
      task: 'Read the docs.',
      isCompleted: false,
      id: 2
    }
  ]
};

const Init = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      {
        const id = uuid();
        const todoItem = {
          task: action.task,
          id,
          isCompleted: false,
        };
        return { ...state,
          todos: [...state.todos, todoItem]
        }
      }

    case DELETE_TODO:
      {
        const todos = state.todos.filter(({
          id
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

    case CLEAR_CHECKED:
      {
        return Object.assign({}, state, {
          todos: state.todos.filter(todo => todo.isCompleted !== action.checked)
        });
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

    default:
      {
        return state;
      }
  }
};

export default Init;