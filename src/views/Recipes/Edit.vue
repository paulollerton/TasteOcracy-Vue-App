<template>
  <!-- <div class="recipes-edit">
    
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
      <h1><span class="accent-color">Edit</span> Recipe</h1>
    </header>

    <div class="container">

      <div class="post-comments">

        <div class="comment-respond">

          <form v-on:submit.prevent="submit()" class="comment-form">

            <div class="form-group left-field">
              <label class="control-label" for="author">Title <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="Tea" v-model="recipe.title">
            </div>
            <div class="form-group left-field">
              <label class="control-label" for="author">Image URL <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/03/14/istock-502426854.jpg?w968h681" v-model="recipe.image_url">
            </div>
            <div class="form-group left-field">
              <label class="control-label" for="author">Category <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="Drinks" v-model="recipe.category">
            </div>
            <div class="form-group">
              <label class="control-label" for="comment">Blurb <span class="required red-text">*</span></label>
              <textarea id="comment" class="form-control" name="comment" cols="30" rows="4" placeholder="I love tea, it helps me to calm down after my evil plans have been thwarted by a young boy." v-model="recipe.blurb"></textarea>
            </div>
            <div class="form-group right-field">
              <label class="control-label" for="author">Prep Time <span class="required red-text">*</span></label>
              <input id="author" type="author" name="author" class="form-control" placeholder="5" v-model="recipe.prep_time">
            </div>
            <div class="form-group right-field">
              <label class="control-label" for="author">Cook Time <span class="required red-text">*</span></label>
              <input id="author" type="author" name="author" class="form-control" placeholder="0" v-model="recipe.cook_time">
            </div>
            <div class="form-group">
              <label class="control-label" for="comment">Ingredients <span class="required red-text">*</span></label>
              <textarea id="comment" class="form-control" name="comment" cols="30" rows="4" placeholder="Tea, Hot Water" v-model="recipe.ingredients"></textarea>
            </div>
            <div class="form-group">
              <label class="control-label" for="comment">Directions <span class="required red-text">*</span></label>
              <textarea id="comment" class="form-control" name="comment" cols="30" rows="4" placeholder="Steep tea in hot water, drink." v-model="recipe.directions"></textarea>
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
        title: this.recipe.title,
        image_url: this.recipe.image_url,
        category: this.recipe.category,
        blurb: this.recipe.blurb,
        prep_time: this.recipe.prep_time,
        cook_time: this.recipe.cook_time,
        ingredients: this.recipe.ingredients,
        directions: this.recipe.directions
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