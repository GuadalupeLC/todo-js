import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
//import { Todo } from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

//const tarea= new Todo('Aprender JavaScript!!');
//todoList.nuevoTodo(tarea);
//console.log(todoList);

//crearTodoHtml(tarea);



//localStorage.setItem('mi-key', 'ABC123');
//sessionStorage.setItem('mi-key', 'ABC123');


//setTimeout(() =>{ 
//    localStorage.removeItem('mi-key');
//},1500);



todoList.todos.forEach(crearTodoHtml);

//const newTodo =new Todo('Aprender JavaScript');

//todoList.todos[0].imprimirClase();

//newTodo.imprimirClase();

//console.log('todos', todoList.todos);