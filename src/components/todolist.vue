<template>
    <div>
        <!-- <todo-input v-bind:addTodo="addTodo" v-on:addTodo="addTodo($event)"></todo-input>  -->
        <h1>A Simple Todo-List Application</h1>
        <form id="inputWrapper" v-on:submit.prevent="submit">
            <input type="text" autofocus v-model.lazy="todoItem" placeholder='Enter a Todo Item' required />
            <button v-show="!editing"> Add </button>
            <button class="btn btn-primary" v-show="editing"> Update </button>
        </form>
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
// import todoInputVue from './todoInput.vue';
import todoItemVue from './todoItem.vue';
const uuid = require('uuid/v4');
import CustomSwal from '../mixins/swal';

export default {
    components: {
        // 'todo-input': todoInputVue,
        'todo-item': todoItemVue
    },
    data(){
        return {
            todos: [],
            todoItem: '',
            editing: false,
            todoToUpdateId: '',
            todoToUpdateCompleted: null
        }
    },
    created(){
        const todoLists = localStorage.getItem('todosList');
        if(todoLists){
            this.todos = JSON.parse(todoLists)
        } else {
                localStorage.setItem('todosList', JSON.stringify(data.slice(0, 2)))
                this.todos = JSON.parse(todoLists);
        }  
    }, 
    methods: {
        submit: function (e){
            if(!this.editing){
               this.addTodo(this.todoItem); 
               this.todoItem = '';
            } else {
                this.updateTodo(this.todoToUpdateId)
                this.todoItem = '';
            }
            
        },
        addTodo: function(title){
            const existingTitle = this.todos.find(
                todo => todo.title === title
            );
            if (existingTitle) {
                return this.todos.map(todoItem =>
                todoItem.title === title
                    ? [...this.todos, {title: title, completed: false, id: uuid()}]
                    : this.todos
                );
            }
            return this.todos = [...this.todos, {title: title, completed: false, id: uuid()}]
            const todoLists = localStorage.getItem('todosList');
            localStorage.setItem('todosList', JSON.stringify(this.todos))
            this.todos = JSON.parse(localStorage.getItem('todosList'))
        },

        updateTodo: function(id){
            const existingTodo = this.todos.find(
                todo => todo.id === id
            );
            if (existingTodo) {
                this.todos =  [...this.todos.filter(todoItem =>
                    todoItem.id != id,
                    {title: this.todoItem, completed: this.todoToUpdateCompleted, id: id}
                )];
            }
            this.todos = [...this.todos, {title: this.todoItem, completed: this.todoToUpdateCompleted, id}]
            const todoLists = localStorage.getItem('todosList');
            localStorage.setItem('todosList', JSON.stringify(this.todos))
            this.todos = JSON.parse(localStorage.getItem('todosList'))
            this.editing = false;
        },

        editTodo: function(event){
            this.todoItem = event.title;
            this.todoToUpdateId = event.id
            this.todoToUpdateCompleted = event.completed
            this.editing = !this.editing;
            if(!this.editing){
                this.todoItem = ''
            }
            // CustomSwal.fire({
            //     type: 'success',
            //     title: 'Work in Progress'
            // })
        },

        deleteTodo: function(event){
                this.todos = [...this.todos.filter(todo => todo.id !== event)]
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
    @mixin inputMixin {        
        border: 2px solid black;
        border-radius: 5px;
        height: 50px;
        padding: 10px;
    }

    #inputWrapper{
        display: flex;
        justify-content: space-between;

        input[type="text"]{
            flex: 4;
            @include inputMixin;
        } 
        button {
            @include inputMixin;
            flex: 1;
        }  
    }
</style>