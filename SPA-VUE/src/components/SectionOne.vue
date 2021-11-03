<template>
  <div class="section">
    <div class="text">
      <h1>Get in touch with those that <span>inspire</span> you.</h1>
      <p>
        ear1 provides a more efficient and faster way for you to reach out to
        those who inspires you, either in your career, or any other field of
        interest, and build great relationships with them.
      </p>
    </div>
    <div class="img">
      <img :src="image" alt="image" />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      image: require("../assets/1.png"),
    };
  },
};
</script>

<style scoped>
.section {
  margin-top: 5px;
  display: flex;
  align-items: center;
}
h1{
  font-size: 35px;
  line-height: 40px;
}
.text{
  margin: 0px 75px;
  text-align: left;
  line-height: 30px;
}
.text,
.img {
  width: 50%;
  
}
.section span {
  color: #00bf69;
  font-style: italic;
  font-weight: bold;
}
</style>