<template>
  <div class="home">
    <b-container fluid="md">
      <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="2">
        <b-col>
          <div>
            <p>Welcome to The Foodie Court</p>
            <h1>It's all About <br>Good Food & Taste</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              nemo dolores quibusdam dolorum iste in labore eius ut dolore
              maxime facere, laudantium vel non. At reprehenderit quaerat et id
              molestiae sequi suscipit laborum totam ad expedita necessitatibus
            </p>
            <div>
              <b-button :href="link" class="button">Check Our Recipes</b-button>
            </div>
          </div>
        </b-col>
        <b-col>
          <b-img fluid :src="require('../assets/bg1.png')"></b-img>
          <!-- <b-img fluid :src="require('../assets/bg.jpg')"></b-img> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      link:"/recipes"
    }
  }
};
</script>
<style scoped>
.home{
  margin: 60px 0;
}
img{
  margin-top: 50px;
}
p{
  margin: 20px 0;
}
.button{
  background: rgb(255, 76, 5);
  border: none;
}
</style>