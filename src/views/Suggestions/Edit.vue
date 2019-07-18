<template>
  <!-- <div class="suggestions-edit">
    
    <h1 class="text-center">Edit Recipe</h1> 

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Tea" v-model="recipe.title">
        </div>
        <div class="form-group col-md-6">
          <label for="imageUrl">Image URL</label>
          <input type="text" class="form-control" id="imageUrl" placeholder="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/03/14/istock-502426854.jpg?w968h681" v-model="recipe.image_url">
        </div>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" class="form-control" id="category" placeholder="Drinks" v-model="recipe.category">
      </div>
      <div class="form-group">
        <label for="blurb"></label>
        <input type="text" class="form-control" id="blurb" placeholder="I love tea, it helps me to calm down after my evil plans have been thwarted by a young boy." v-model="recipe.blurb">
      </div>
      <div class="form-group">
        <label for="prep-time">Prep Time</label>
        <input type="number" class="form-control" id="prep-time" placeholder="5" v-model="recipe.prep_time">
      </div>
      <div class="form-group">
        <label for="cook-time">Cook Time</label>
        <input type="number" class="form-control" id="cook-time" placeholder="2" v-model="recipe.cook_time">
      </div>
      <div class="form-group">
        <label for="ingredients">Ingredients</label>
        <input type="text" class="form-control" id="ingredients" placeholder="Tea leaves, Water" v-model="recipe.ingredients">
      </div>
      <div class="form-group">
        <label for="directions">Directions</label>
        <input type="text" class="form-control" id="directions" placeholder="Steep tea leaves in water." v-model="recipe.directions">
      </div>
      <button type="submit" class="btn btn-primary btn-outline">Update</button>
    </form>

    <div class="text-center">
      <button class="btn btn-danger" v-on:click="destroyRecipe()">Destroy</button> 
    </div>

  </div> -->

  <main id="main">
    <header class="page-header">
      <h1><span class="accent-color">Edit</span> Suggestion</h1>
    </header>

    <div class="container">

      <div class="post-comments">

        <div class="comment-respond">

          <form v-on:submit.prevent="submit()" class="comment-form">

            <div class="form-group left-field">
              <label class="control-label" for="author">User ID <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="Tea" v-model="suggestion.user_id">
            </div>
            <div class="form-group left-field">
              <label class="control-label" for="author">Recipe ID <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/03/14/istock-502426854.jpg?w968h681" v-model="suggestion.recipe_id">
            </div>
            <div class="form-group left-field">
              <label class="control-label" for="author">Content <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="Drinks" v-model="suggestion.content">
            </div>
            <p class="form-group btn-form-group">
              <button class="btn btn-default submit">Submit</button>
            </p>
          </form>
        </div><!-- .comment-respond -->
      </div><!-- .post-comments -->
    </div>
  </main><!-- #main -->
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      suggestion: {}
    };
  },
  created: function() {
    axios.get("/api/suggestions/" + this.$route.params.id).then(response => {
      this.suggestion = response.data;
      console.log(this.suggestion);
    });
  },
  methods: {
    submit: function() {
      // send a patch request to the backend to update this suggestion!
      var params = {
        user_id: this.suggestion.user_id,
        recipe_id: this.suggestion.recipe_id,
        content: this.suggestion.content
      };
      axios.patch("/api/suggestions/" + this.suggestion.id, params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/suggestions/" + this.suggestion.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    destroySuggestion: function() {
      // send an axios delete request to the backend to remove recipe from database
      axios.delete("/api/suggestions/" + this.suggestion.id).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/");
      });
    }
  }
};
</script>