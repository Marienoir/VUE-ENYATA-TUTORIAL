<template>
  <div class="intro">
    <h1>Connect with professionals in your field without getting aired.</h1>
    <p>
      For a small fee, ear1 allows you to get in touch with professionals in
      your field and build quality relationships with them.
    </p>
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
    <div class="random">
      <div class="imageOne"><img :src="imageOne" /></div>
      <div class="imageTwo"><img :src="imageTwo" /></div>
      <div class="imageThree"><img :src="imageThree" /></div>
      <div class="imageFour"><img :src="imageFour" /></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      appleLogo: require("../assets/apple.png"),
      googleLogo: require("../assets/play.png"),
      imageOne: require("../assets/mini-1.png"),
      imageTwo: require("../assets/mini-2.png"),
      imageThree: require("../assets/mini-3.png"),
      imageFour: require("../assets/mini-4.png"),
    };
  },
};
</script>

<style scoped>
.intro {
  max-width: 580px;
  margin: 50px auto 10px auto;
  color: #39393f;
}
h1 {
  font-weight: 800;
  font-size: 35px;
}
p {
  margin: 40px 0;
}
.flex-display {
  display: flex;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
}
button {
  background: #00bf69;
  padding: 15px 25px;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-right: 20px;
}
span {
  font-weight: bold;
}
.random div img {
  border-radius: 100%;
}
.imageOne img {
  position: relative;
  bottom: 203px;
  right: 400px;
  border: 3px solid #c0f8d1;
}
.imageTwo img {
  position: relative;
  bottom: 331px;
  left: 389px;
  border: 3px solid #5240f3;
}
.imageThree img {
  position: relative;
  bottom: 119px;
  right: 217px;
  border: 3px solid #dfc905;
}
.imageFour img {
  position: relative;
  bottom: 260px;
  left: 310px;
  border: 3px solid #ff06d5;
}
</style>