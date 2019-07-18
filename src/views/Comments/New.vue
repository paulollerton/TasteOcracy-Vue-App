<template>
  <!-- <div class="recipes-new">
    
    <h1>New Recipe</h1>

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
        <input type="number" class="form-control" id="cook-time" placeholder="0" v-model="newRecipeCookTIme">
      </div>
      <div class="form-group">
        <label for="ingredients">Ingredients</label>
        <input type="text" class="form-control" id="ingredients" placeholder="Tea, Hot Water" v-model="newRecipeIngredients">
      </div>
      <div class="form-group">
        <label for="directions">Directions</label>
        <input type="text" class="form-control" id="directions" placeholder="Steep tea in hot water, drink." v-model="newRecipeDirections">
      </div>
      <button type="submit" class="btn btn-primary btn-outline">Submit</button>
    </form>

  </div> -->



  <main id="main">
    <header class="page-header">
      <h1><span class="accent-color">New</span> Comment</h1>
    </header>

    <div class="container">

      <div class="post-comments">

        <div class="comment-respond">

          <form v-on:submit.prevent="submit()" class="comment-form">

            <div class="form-group left-field">
              <label class="control-label" for="author">User ID <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="Tea" v-model="newCommentUserId">
            </div>
            <div class="form-group left-field">
              <label class="control-label" for="author">Recipe ID <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/03/14/istock-502426854.jpg?w968h681" v-model="newCommentRecipeId">
            </div>
            <div class="form-group left-field">
              <label class="control-label" for="author">Content <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="Drinks" v-model="newCommentContent">
            </div>
            <div class="form-group right-field">
              <label class="control-label" for="author">Username <span class="required red-text">*</span></label>
              <input id="author" type="author" name="author" class="form-control" placeholder="0" v-model="newCommentUsername">
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
      newCommentUserId: "",
      newCommentRecipeId: "",
      newCommentContent: "",
      newCommentUsername: "",
      errors: []
    };
  },
  created: function() {
  },
  methods: {
    submit: function() {
      // make a post request via axios to create a new recipe in our database!
      var params = {
        user_id: this.newCommentUserId,
        recipe_id: this.newCommentRecipeId,
        content: this.newCommentContent,
        username: this.newCommentUsername
      };
      axios.post("/api/comments", params).then(response => {
        this.$router.push("/");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>
