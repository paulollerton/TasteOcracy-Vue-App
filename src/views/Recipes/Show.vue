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

    <button class="btn btn-warning">
      <router-link v-bind:to="'/recipes/' + recipe.id + '/edit'">Edit</router-link>
    </button>

    <button class="btn btn-warning">
      <router-link v-bind:to="'/comments'">Add Comment</router-link>
    </button>

    <button class="btn btn-warning">
      <router-link v-bind:to="'/suggestions'">Add Suggestion</router-link>
    </button>

    <h4>Comments</h4>
    <div v-for="comment in recipe.comments">
      <p>{{ comment.content }}</p>
      <router-link v-bind:to="'/comments/' + comment.id">
        <button v-on:click="showComment(comment)">View Comment</button>
      </router-link>
      <div v-if="currentComment === comment">
      </div>
    </div>

    <h4>Suggestions</h4>
    <div v-for="suggestion in recipe.suggestions">
      <p>{{ suggestion.content }}</p>
      <router-link v-bind:to="'/suggestions/' + suggestion.id">
        <button v-on:click="showSuggestion(suggestion)">View Suggestion</button>
      </router-link>
      <div v-if="currentSuggestion === suggestion">
      </div>
    </div>
      
  </div>

</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      recipe: {},
      currentSuggestion: {},
      currentComment: {},
      comments: [],
      suggestions: [],
      errors: []
    };
  },
  created: function() {
    axios.get("/api/recipes/" + this.$route.params.id).then(response => {
      this.recipe = response.data;
      console.log(this.recipe);
    });
    axios.get("/api/comments").then(response => {
      this.comments = response.data;
      console.log(this.comments);
    });axios.get("/api/suggestions").then(response => {
      this.suggestions = response.data;
      console.log(this.suggestions);
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
    },
    showComment: function(comment) {
      if (this.currentComment === comment) {
        this.currentComment = null;
      } else {
        this.currentComment = comment;
      }
    }
  }
};
</script>