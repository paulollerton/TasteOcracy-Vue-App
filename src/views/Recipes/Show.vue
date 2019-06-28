<template>
  <div class="recipes-show">

      <h2>{{ recipe.title }}</h2>
      <img v-bind:src="recipe.image_url">
      <p>Category: {{ recipe.category }}</p>
      <p>Created By: {{ recipe.user_id }}</p>
      <p>{{ recipe.blurb }}</p>
      <p>Prep Time: {{ recipe.prep_time}}</p>
      <p>Cook Time: {{ recipe.cook_time}}</p>
      <ul>Ingredients: {{ recipe.ingredients }}</ul>
      <ol>Directions: {{ recipe.directions }}</ol>
      
    </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      recipe: {},
    };
  },
  created: function() {
    axios.get("/api/recipes/" + this.$route.params.id).then(response => {
      this.recipe = response.data;
      console.log(this.recipe);
    });
  },
  methods: {
  }
};
</script>