<template>
<div>
    <form id="inputWrapper" v-on:submit.prevent="submit">
        <input type="text" v-model.lazy="todoItem" placeholder='Enter a Todo Item' required />
        <button> Add </button>
    </form>
</div>
  
</template>

<script>
export default {
    methods: {
        submit: function (e){
            this.$emit('addTodo', this.todoItem)
            this.todoItem = '';
        }
    }, 
    data(){
        return{
            todoItem: ''
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