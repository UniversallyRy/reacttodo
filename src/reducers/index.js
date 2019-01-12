import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/actionTypes";

const initialState = {
  todos: [
    {
      task: 'New TODO',
      isCompleted: false,
      id: 0
    },
    {
      task: 'NO TODO',
      isCompleted: true,
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

  if (action.type === ADD_TODO) {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.task)
    });
  }

  if (action.type === DELETE_TODO) {
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.index)
      });
  }

  if (action.type === TOGGLE_TODO) {
      return Object.assign({}, state, {
        todos: state.todos.map(todo => 
          (todo.id === action.id)
           ? {task: todo.task, isCompleted: !todo.isCompleted, id: todo.id}
           : todo
        )
      });    
  }
    return state;
  };



export default Init;