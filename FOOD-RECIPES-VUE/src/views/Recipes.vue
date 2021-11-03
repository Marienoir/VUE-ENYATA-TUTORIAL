<template>
  <b-container fluid="md">
    <b-row cols="1" cols-lg="2">
      <b-col>
        <ul>
          <li v-for="recipe in recipes" :key="recipe.id">
            <b-img fluid :src="require('../assets/1.jpg')"></b-img><br/>
            <h4> {{ recipe.name }} </h4>
            DESCRIPTION: {{ recipe.description }}
          </li>
        </ul>
      </b-col>
      <b-col>
        <div class="form">
          <b-form @submit="onSubmit" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Name of Recipe"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                placeholder="Enter Name of Recipe"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Recipe Description"
              label-for="input-2"
            >
            <textarea name="" id="input-2" v-model="form.description" cols="53" rows="8" placeholder="Enter Recipe Description" required></textarea>
            </b-form-group>
            <b-button type="submit">ADD</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Form from "../components/Form.vue"
export default {
  components: Form,
  data() {
    return {
      recipes: [
        {
          id: 1,
          name: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ut reiciendis consectetur adipisicing elit. Amet ut reiciendis",
        },
        {
          id: 2,
          name: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ut reiciendis consectetur adipisicing elit. Amet ut reiciendis",
        }
      ],
      form: {
        name: "",
        description: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.recipes.push(this.form);
      this.form = ""
    },
  },
};
</script>
<style scoped>
.form {
  margin-top: 30px;
  background: rgb(240, 121, 74);
  padding: 50px;
  color: #fff;
  border-radius: 5px;
}
button {
  background: #fff;
  border: none;
  color: orangered;
}
li{
  margin-top: 10px;
  line-height: 30px;
}
img{
  width: 100%;
  margin-bottom: 20px;
}
button:hover{
  background: rgb(150, 41, 1);
  color: #fff;
}
.form-group {
  margin: 20px 0;
}
ul {
  margin: 30px 0;
}
li {
  list-style-type: none;
  padding: 50px;
  background: rgb(240, 121, 74);
  margin: 20px 0;
  color: #fff;
}
</style>