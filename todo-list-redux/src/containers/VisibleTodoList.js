import { connect } from "react-redux";

const { VisiblityFilters, toggleTodo } = require("../actions");
import TodoList from '../components/TodoList'


const getVisibileTodos = (todos, filter) => {
    switch (filter) {
        case VisiblityFilters.SHOW_ALL:
            return todos
        case VisiblityFilters.SHOW_ACTIVE:
            return todos.filter(e => !e.completed)
        case VisiblityFilters.SHOW_COMPLETED:
            return todos.filter(e => e.completed)
        default:
            throw new Error('未知filter' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibileTodos(state.todos, state.visibilityFilter)
})


const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)