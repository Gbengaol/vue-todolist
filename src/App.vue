<template>
  <div id="app">
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from './components/todolist'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px auto;
  width: 70%;
  position: relative;

  @media only screen and (max-width: 960px) {
    width: 96%;
  }

}
</style>
