<template>
  <div>
    <p v-for="(todo, index) in todos" :key="index">
     {{ todo }}
      <button class="clear" @click="clear(index)"><font-awesome-icon icon="trash" /></button>
    </p>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  methods: {
    clear(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
p {
  padding: 10px 20px;
  background: rgb(0, 217, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
p:hover{
  background: rgb(64, 189, 211);
}
.clear {
  padding: 6px;
  background: none;
  border: none;
  width: 60px;
  color: red;
  margin-left: 120px;
}
</style>