import './styles.css';
import { Todo, TodoList } from './clasess'
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo  => crearTodoHTML( todo ));

console.log('todos', todoList.todos)