<template>
<div id="todosContainer">
    <div id="todoItem" v-bind:key="todo.id" v-for="todo in todos">
        <input type="checkbox" v-on:change="isCompleted(todo.id)" v-model="todo.completed" />
        <h3 v-rainbowColor v-bind:class="{completed: todo.completed}"> {{todo.title}}</h3>
        <button v-on:click="deleteTodo(todo.id)" class="btn"> X </button>
    </div>
</div>
  
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    methods: {
        deleteTodo: function(id){
            this.$emit('deleteTodo', id)
        },
        isCompleted(id){
            this.$emit('isCompleted', id)
        }
    },
    directives: {
        'rainbowColor': {
            bind(el, binding, vnode){
                el.style.color = `#${Math.random().toString(16).slice(2,8)}`
            }
        }
    }
}
</script>

<style scoped lang="scss">
#todosContainer{
    text-align: center;
    margin-top: 50px;
    background-color: #f3f3f3;
    padding: 20px; 
    box-sizing: border-box;

    #todoItem{
        display: flex;
        justify-content: space-between;
        padding: 5px;
        border: 2px solid #727271;
        margin: 5px 0;
        border-radius: 5px;

        input[type="checkbox"]{
            flex: 1;
            height: 50px;
        }

        h3{
            flex: 10;
            text-align: left;

            @media only screen and (max-width: 960px) {
                font-size: 16px;
            }
        }

        button{
            flex: 1;
            border-radius: 5px;
            color: crimson;
            font-size: 20px;
            box-shadow: unset;

            @media only screen and (max-width: 960px) {
                font-size: 16px;
            }
        }
    } 

    .completed{
        text-decoration: line-through;
    }
}
   
</style>