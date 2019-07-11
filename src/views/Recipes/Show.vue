<template>
  <div class="recipes-show">

      <button class="btn btn-warning">
      <router-link v-bind:to="'/signup'">Create Account</router-link>
    </button>

    <button class="btn btn-warning">
      <router-link v-bind:to="'/login'">Login</router-link>
    </button>

      <h2>{{ recipe.title }}</h2>
      <img v-bind:src="recipe.image_url">
      <p>Category: {{ recipe.category }}</p>
      <p>Created By: {{ recipe.user_id }}</p>
      <p>{{ recipe.blurb }}</p>
      <p>Prep Time: {{ recipe.prep_time}}</p>
      <p>Cook Time: {{ recipe.cook_time}}</p>
      <ul>Ingredients: {{ recipe.ingredients }}</ul>
      <ol>Directions: {{ recipe.directions }}</ol>

      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#suggestionCreateModal">
      Add Suggestion (modal)
    </button>

    <div class="modal fade" id="suggestionCreateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Make a Suggestion</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>

            <form v-on:submit.prevent="submit()">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="content">Suggestion</label>
                  <input type="text" class="form-control" id="content" placeholder="Add Sugar" v-model="newSuggestionContent">
                </div>
              </div>
              <div class="form-group col-md-12 text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
              
            </form>

        </div>
      </div>
    </div>

      <button class="btn btn-warning">
      <router-link v-bind:to="'/recipes/' + recipe.id + '/edit'">Edit</router-link>
    </button>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newSuggestionContent: "",
      newSuggestionRecipeId: "",
      newSuggestionUserId: "",
      newSuggestionVoteCount: 0,
      recipe: {},
      suggestion: {},
      errors: []
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
      // make a post request via axios to create a new suggestion in our database!
      var params = {
        content: this.newSuggestionContent,
        recipe_id: this.newSuggestionRecipeId,
        user_id: this.current_user.id,
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