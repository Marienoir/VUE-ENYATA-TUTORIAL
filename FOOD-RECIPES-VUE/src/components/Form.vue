<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>