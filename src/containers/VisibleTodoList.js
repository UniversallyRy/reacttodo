import { connect } from 'react-redux'
import TodoApp from '../component/TodoApp'

const getVisibleTodos = (items, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return items
        case 'SHOW_COMPLETED':
            return items.filter(t => t.isCompleted)
        case 'SHOW_ACTIVE':
            return items.filter(t => !t.isCompleted)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    items: getVisibleTodos(state.todos.items, state.visibilityFilter)
})

export default connect(
    mapStateToProps
)(TodoApp)