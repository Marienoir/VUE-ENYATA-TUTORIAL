<template>
  <div class="main">
    <div class="text">
      <h2>Build great relationships with those you admire.</h2>
      <p>With ear1, replies to your DMs are guaranteed!</p>
    </div>
    <div class="buttons">
      <button class="flex-display">
        <img :src="appleLogo" />
        <div>
          Get in on <br />
          <span>App Store</span>
        </div>
      </button>
      <button class="flex-display">
        <img :src="googleLogo" />
        <div>
          Get in on <br />
          <span>Google Play</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      appleLogo: require("../assets/apple.png"),
      googleLogo: require("../assets/play.png"),
    };
  },
};
</script>

<style scoped>
.main {
  background: #00bf69;
  color: #fff;
  display: flex;
  max-width: 715px;
  padding: 30px 10px;
  border-radius: 15px;
  margin: 60px auto;
  align-items: center;
  justify-content: space-around;
}
.flex-display {
  display: flex;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
}
button {
  background: #39393f;
    padding: 15px 25px;
  padding: 10px;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
}
.text {
  max-width: 335px;
  text-align: left;
}
span {
  font-weight: bold;
}
</style>