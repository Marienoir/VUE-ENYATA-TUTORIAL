<template>
  <div id="app">
    <div id="nav">
      <h2>FoodieCourt</h2>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/recipes">Recipes</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
 name: "App"
}
</script>
<style>
 @import url("https://fonts.googleapis.com/css2?family=Lobster&family=Nunito+Sans:wght@200;400;600&family=Poppins:wght@400;500&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: rgb(48, 45, 45);
}
h2 {
  font-family: "Lobster", cursive;
  font-size: 25px;
  color:rgb(255, 76, 5) ;
}
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  color: rgb(255, 76, 5);
  margin: 0 30px 0 30px;
  text-decoration: none;
  text-transform: uppercase;
}

#nav a.router-link-exact-active {
  color: rgb(255, 255, 255);
  background: rgb(255, 76, 5);
  padding:10px 20px;
  border-radius: 4px;
  border-bottom: 3px solid;
}
</style>
