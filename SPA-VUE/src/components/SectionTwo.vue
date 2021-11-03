<template>
  <div class="section">
    <div class="img">
      <img :src="image" alt="image" />
    </div>
    <div class="text">
      <h1>You have <span>zero</span> chances of not being replied.</h1>
      <p>
        Sending a DM should no more be an issue of shooting your shot or trying
        your luck. You’re paying, so you’re definitely going to get a response,
        and not just a response, but a conversation.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      image: require("../assets/2.png"),
    };
  },
};
</script>

<style scoped>
.section {
  margin-top: 40px;
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
}
</style>