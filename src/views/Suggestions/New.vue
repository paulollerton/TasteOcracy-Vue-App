<template>
  <div class="suggestions-new">
    
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

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newSuggestionContent: "",
      newSuggestionRecipeId: "",
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
        content: this.newSuggestionContent,
        recipe_id: this.newSuggestionRecipeId,
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
