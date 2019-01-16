import {
  combineReducers
} from 'redux';
import TodosReducer from './todos'
import visibilityFilter from './visibilityFilter'


export default combineReducers({
  todos: TodosReducer,
  visibilityFilter
});