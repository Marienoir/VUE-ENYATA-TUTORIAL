<template>
  <div class="footer">
    <div class="main">
      <div>
        <img :src="image" />
        <h4>2020 ear1Social</h4>
        <p>Privacy policy | Terms of service</p>
      </div>
      <div>
        <ul>
          <li class="bold">Company</li>
          <li>About us</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="bold">Get in touch</li>
          <li>Questions or feedback?, we would love to hear from you.</li>
          <div class="socials">
            <img :src="facebook" />
            <img :src="twitter" />
           <img :src="instagram" />
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("../assets/footer-logo.png"),
      facebook: require("../assets/fb.png"),
      twitter: require("../assets/twitter.png"),
      instagram: require("../assets/insta.png"),
    };
  },
};
</script>

<style scoped>
.footer{
  background: #39393F;
  color: #BBBBBB;
  padding: 20px;
  height: 250px;
  margin: 0;
}
.main {
    display: flex;
    justify-content: space-around;
    text-align: left;
}
.main ul{
  list-style-type: none;
}
.main ul li{
  padding: 10px 0;
}
.bold{
  font-weight: bold;
  color: #fff;
}
.socials img{
  margin:10px 70px 0 0;
}
</style>