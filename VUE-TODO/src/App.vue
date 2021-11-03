<template>
  <div id="app">
    <InputForm/>
    <Todos/>
  </div>
</template>

<script>

import InputForm from "./components/InputForm.vue"
import Todos from "./components/Todos.vue"

export default {
  name: 'App',
  components: {
    InputForm,
    Todos
  },
  data(){
    return{
      image: {backgroundImage: "url(https://unsplash.com/photos/RnCPiXixooY)"}
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600&family=Poppins:ital,wght@0,400;0,500;0,600;0,800;1,300;1,400&display=swap');
body{
  background: linear-gradient(to bottom right, rgb(0, 217, 255), rgb(94, 1, 66));
  background-repeat: no-repeat;
  background-size: cover;
  height: 89vh;
}
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 480px;
}
</style>
