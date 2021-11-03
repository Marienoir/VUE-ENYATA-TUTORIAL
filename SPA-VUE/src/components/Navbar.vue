<template>
  <div>
    <nav>
      <div>
        <img :src="image" />
      </div>
      <ul>
        <li>About</li>
        <li>FAQs</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      image: require("../assets/logo.png"),
    };
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1048px;
  margin: 5px auto;
}
nav ul {
  display: flex;
}
nav ul li {
  list-style-type: none;
  padding: 2px 20px;
}
</style>