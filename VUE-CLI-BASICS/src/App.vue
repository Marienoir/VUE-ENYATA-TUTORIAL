<template>
  <div id="app">
    <!-- <Form/>
    <Table/> -->
    <Classwork/>
    <Button>
      slot goes
    </Button>
  </div>
</template>

<script>
// import Form from './components/Form.vue'
// import Table from './components/Table.vue'
import Classwork from './components/Classwork.vue'

export default {
  name: 'App',
  components: {
    // Form,
    // Table,
    Classwork
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 200px;
}
</style>
