<template>
  <!-- <div class="suggestions-new">
    
    <h1>New Suggestion</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="content">Content</label>
          <input type="text" class="form-control" id="content" placeholder="Add sugar!" v-model="newSuggestionContent">
        </div>
        <div class="form-group col-md-6">
          <label for="recipe-id">Recipe ID</label>
          <input type="text" class="form-control" id="recipe-id" placeholder="Add sugar!" v-model="newSuggestionRecipeId">
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-outline">Submit</button>
    </form>

  </div> -->

  <main id="main">
    <header class="page-header">
      <h1><span class="accent-color">New</span> Suggestion</h1>
    </header>

    <div class="container">

      <div class="post-comments">

        <div class="comment-respond">

          <form v-on:submit.prevent="submit()" class="comment-form">

            <div class="form-group left-field">
              <label class="control-label" for="author">User ID <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="Tea" v-model="newSuggestionUserId">
            </div>
            <div class="form-group left-field">
              <label class="control-label" for="author">Recipe ID <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/03/14/istock-502426854.jpg?w968h681" v-model="newSuggestionRecipeId">
            </div>
            <div class="form-group left-field">
              <label class="control-label" for="author">Content <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="Drinks" v-model="newSuggestionContent">
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
      newSuggestionUserId: "",
      newSuggestionRecipeId: "",
      newSuggestionContent: "",
      newSuggestionVoteCount: 0,
      errors: []
    };
  },
  created: function() {
  },
  methods: {
    submit: function() {
      // make a post request via axios to create a new recipe in our database!
      var params = {
        user_id: this.newSuggestionUserId,
        recipe_id: this.newSuggestionRecipeId,
        content: this.newSuggestionContent,
        vote_count: this.newSuggestionVoteCount
      };
      axios.post("/api/suggestions", params).then(response => {
        this.$router.push("/");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>
