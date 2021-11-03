<template>
  <div>
    <h1>List of users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        Name: {{ user.name }} <br />
        Email:{{ user.email }}
      </li>
    </ul>
    <div>
      <button @click="increase">You have clicked {{ counter }} times</button>
    </div>
    <h1>{{ number }}</h1>
    <button @click="increment(1)">Increase by 1</button>
    <button @click="increment(10)">Increase by 10</button>
    <button @click="decrement(1)">Decrease by 1</button>
    <button @click="decrement(10)">Decrease by 10</button>
    <a target="_blank" :href="url">Click to redirect</a>
  </div>
</template>

<script>
export default {
  name: "User-List",
  props: ["users"],
  data() {
    return {
      counter: 0,
      number: 10,
      url: "https://github.com/Marienoir",
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    increment(val) {
      this.number += val;
    },
    decrement(val) {
      this.number -= val;
    },
  },
};
</script>

<style>
</style>