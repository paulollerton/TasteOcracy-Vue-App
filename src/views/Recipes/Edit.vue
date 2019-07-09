<template>
  <div class="recipes-edit">
    
    <h1 class="text-center">Edit Recipe</h1> 

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Tea" v-model="newRecipeTitle">
        </div>
        <div class="form-group col-md-6">
          <label for="imageUrl">Image URL</label>
          <input type="text" class="form-control" id="imageUrl" placeholder="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/03/14/istock-502426854.jpg?w968h681" v-model="newRecipeImageUrl">
        </div>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" class="form-control" id="category" placeholder="Drinks" v-model="newRecipeCategory">
      </div>
      <div class="form-group">
        <label for="blurb"></label>
        <input type="text" class="form-control" id="blurb" placeholder="I love tea, it helps me to calm down after my evil plans have been thwarted by a young boy." v-model="newRecipeBlurb">
      </div>
      <div class="form-group">
        <label for="prep-time">Prep Time</label>
        <input type="number" class="form-control" id="prep-time" placeholder="5" v-model="newRecipePrepTime">
      </div>
      <div class="form-group">
        <label for="cook-time">Cook Time</label>
        <input type="number" class="form-control" id="cook-time" placeholder="2" v-model="newRecipeCookTIme">
      </div>
      <div class="form-group">
        <label for="ingredients">Ingredients</label>
        <input type="text" class="form-control" id="ingredients" placeholder="Tea leaves, Water" v-model="newRecipeIngredients">
      </div>
      <div class="form-group">
        <label for="directions">Directions</label>
        <input type="text" class="form-control" id="directions" placeholder="Steep tea leaves in water." v-model="newRecipeDirections">
      </div>
      <button type="submit" class="btn btn-primary btn-outline">Update</button>
    </form>

    <div class="text-center">
      <button class="btn btn-danger" v-on:click="destroyRecipe()">Destroy</button> 
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      recipe: {}
    };
  },
  created: function() {
    axios.get("/api/recipes/" + this.$route.params.id).then(response => {
      this.recipe = response.data;
      console.log(this.recipe);
    });
  },
  methods: {
    submit: function() {
      // send a patch request to the backend to update this recipe!
      var params = {
        title: this.newRecipeTitle,
        image_url: this.newRecipeImageUrl,
        category: this.newRecipeCategory,
        blurb: this.newRecipeBlurb,
        prep_time: this.newRecipePrepTime,
        cook_time: this.newRecipeCookTIme,
        ingredients: this.newRecipeIngredients,
        directions: this.newRecipeDirections
      };
      axios.patch("/api/recipes/" + this.recipe.id, params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/recipes/" + this.recipe.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    destroyRecipe: function() {
      // send an axios delete request to the backend to remove recipe from database
      axios.delete("/api/recipes/" + this.recipe.id).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/");
      });
    }
  }
};
</script>