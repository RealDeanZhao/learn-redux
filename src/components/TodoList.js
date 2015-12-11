import * as React from 'react'
import Todo from './Todo'

const TodoList = ({
  todos,
  onTodoClick
})=>(
  <ul>
    {todos.map((todo, index) =>
      <Todo
        key={index}
        {...todo}
        onClick={()=>onTodoClick(index)} />
    )}
  </ul>
);


TodoList.propTypes = {
  onTodoClick: React.PropTypes.func.isRequired,
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default TodoList;
