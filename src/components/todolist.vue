<template>
    <div>
       <h1>A Simple Todo-List Application</h1>
        <todo-input v-bind:addTodo="addTodo" v-on:addTodo="addTodo($event)"></todo-input> 
        <todo-item v-bind:todos="todos" v-on:deleteTodo="deleteTodo($event)"></todo-item>
    </div>
  
</template>

<script>
import todoInputVue from './todoInput.vue';
import todoItemVue from './todoItem.vue';

    const uuid = require('uuid/v4');
export default {
    components: {
        'todo-input': todoInputVue,
        'todo-item': todoItemVue
    },
    data(){
        return {
            todos: [],
        }
    },
    created(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then (response => response.json())
        .then(data => {
            this.todos = data.slice(0, 30);
        })
    }, 
    methods: {
        addTodo: function(title){
            fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    completed: false
                })
        })
        .then(response => response.json())
        .then(this.todos = [...this.todos, {title: title, completed: false, id: uuid()}]);
        },
        deleteTodo: function(event){
            fetch(`https://jsonplaceholder.typicode.com/todos/${event}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(this.todos = [...this.todos.filter(todo => todo.id !== event)]);
        }
    }
}
</script>

<style>

</style>