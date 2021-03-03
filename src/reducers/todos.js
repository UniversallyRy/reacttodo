import { v4 as uuidv4 } from "uuid";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  SAVE_EDITED_TODO,
  CANCEL_EDIT_TODO,
  CLEAR_COMPLETED,
} from "../actions/actionTypes";

// const initialState = {
//     items: [{
//         task: 'Todo One',
//         isCompleted: false,
//         id: uuid(),
//     },
//     {
//         task: 'TODO TWO',
//         isCompleted: false,
//         id: uuid(),
//     },
//     {
//         task: 'Todo 3',
//         isCompleted: false,
//         id: uuid(),
//     }
//     ],
// };

const INIT_STATE = {
  items: [],
};

const todosReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const id = uuidv4();
      const todoItem = {
        task: action.task,
        id,
        isCompleted: false,
      };
      return {
        ...state,
        items: [...state.items, todoItem],
      };
    }

    case DELETE_TODO: {
      const items = state.items.filter(({ id }) => id !== action.id);
      return {
        ...state,
        items,
      };
    }

    case TOGGLE_TODO: {
      const items = state.items.map((item) => {
        if (item.id === action.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      return {
        ...state,
        items,
      };
    }

    case EDIT_TODO: {
      const item = state.items.find(({ id }) => id === action.id);
      return {
        ...state,
        editingTodo: item,
      };
    }

    case SAVE_EDITED_TODO: {
      const items = state.items.map((item) => {
        if (item.id === action.modifiedTodo.id) {
          item.task = action.modifiedTodo.task;
        }

        return item;
      });

      return {
        ...state,
        items,
        editingTodo: {},
      };
    }

    case CANCEL_EDIT_TODO: {
      const newState = state.items.length
        ? {
            ...state,
            editingTodo: {},
          }
        : {
            ...state,
          };
      return newState;
    }

    case CLEAR_COMPLETED: {
      const items = state.items.filter(
        (item) => item.isCompleted !== action.checked
      );
      return {
        ...state,
        items,
      };
    }

    default: {
      return state;
    }
  }
};

export default todosReducer;
