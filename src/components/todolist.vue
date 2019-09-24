<template>
    <div>
        <todo-input v-bind:addTodo="addTodo" v-on:addTodo="addTodo($event)"></todo-input> 
        <todo-item 
            v-bind:todos="todos" 
            v-on:isCompleted="isCompleted($event)" 
            v-on:deleteTodo="deleteTodo($event)"
            v-on:editTodo="editTodo($event)"
        >
        </todo-item>
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
        const todoLists = localStorage.getItem('todosList');
        if(todoLists){
            this.todos = JSON.parse(todoLists)
        } else {
            // fetch('https://jsonplaceholder.typicode.com/todos')
            // .then (response => response.json())
            // .then(data => {
                localStorage.setItem('todosList', JSON.stringify(data.slice(0, 2)))
                this.todos = JSON.parse(todoLists);
            // })
        }  
    }, 
    methods: {
        addTodo: function(title){
        //     fetch('https://jsonplaceholder.typicode.com/todos', {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             title: title,
        //             completed: false
        //         })
        // })
        // .then(response => response.json())
        // .then(
            this.todos = [...this.todos, {title: title, completed: false, id: uuid()}]
            // );
            const todoLists = localStorage.getItem('todosList');
            localStorage.setItem('todosList', JSON.stringify(this.todos))
            this.todos = JSON.parse(localStorage.getItem('todosList'))
        },

        editTodo: function(event){
            alert(event)
        },

        deleteTodo: function(event){
            // fetch(`https://jsonplaceholder.typicode.com/todos/${event}`, {
            //     method: 'DELETE'
            // })
            // .then(response => response.json())
            // .then(
                this.todos = [...this.todos.filter(todo => todo.id !== event)]
                // );
            const todoLists = localStorage.getItem('todosList');
            localStorage.setItem('todosList', JSON.stringify(this.todos))
            this.todos = JSON.parse(localStorage.getItem('todosList'))
        },

        isCompleted: function(event){
            localStorage.setItem('todosList', JSON.stringify(this.todos))
            this.todos = JSON.parse(localStorage.getItem('todosList'))
        }
    }
}
</script>

<style scoped lang="scss">
    
</style>