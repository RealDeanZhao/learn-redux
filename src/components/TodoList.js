import * as React from 'react'
import * as AllComponents from './'

const TodoList = ({
  todos,
  onTodoClick
})=>(
  <ul>
    {todos.map((todo, index) =>
      <AllComponents.Todo
        key={index}
        {...todo}
        onClick={()=>onTodoClick(index)} />
    )}
  </ul>
);

export default TodoList;
