<template>
  <div id="app">
    <HelloTeacher msg="Bem-vindo, professor!"/>
    <Calculator />
  </div>
</template>

<script>
import HelloTeacher from './components/HelloTeacher.vue'
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    HelloTeacher,
    Calculator
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dosis:400,500,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}
#app {
  font-family: Dosis, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  background-color: #C2DEF4;
  
}
@media (min-width: 770px) {
  #app {
    flex-direction: row;
  }
}

</style>
