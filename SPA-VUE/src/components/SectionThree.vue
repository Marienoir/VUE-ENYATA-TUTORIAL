<template>
  <div class="section">
    <div class="text">
      <h1>
        There’s no <span>better way</span> of reaching out to those who inspires
        you
      </h1>
      <p>
        Ear1 lets influencers charge you a small fee to have a conversation with
        them. Being required to pay filters out all the unserious people so your
        favourite influencers can respond to you faster.
      </p>
    </div>
    <div class="img">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("../assets/3.png"),
    };
  },
};
</script>

<style scoped>
.section {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.section span {
  color: #00bf69;
  font-style: italic;
}
h1{
  font-size: 35px;
  line-height: 40px;
}
.text {
  max-width: 599px;
  margin:30px auto;
  line-height: 30px;
}
</style>