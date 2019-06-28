<template>
  <div class="recipes-show">
    <!-- <h1>{{ message }}</h1> -->
    <div v-for="recipe in recipes">
      <h2>{{ recipe.title }}</h2>
      <img v-bind:src="recipe.image_url">
      <p>Category: {{ recipe.category }}</p>
      <!-- <button v-on:click="showRecipe(recipe)">Full Recipe</button> -->
      <div v-if="currentRecipe === recipe">
        <p>Created By: {{ recipe.user_id }}</p>
        <p>{{ recipe.blurb }}</p>
        <p>Prep Time: {{ recipe.prep_time}}</p>
        <p>Cook Time: {{ recipe.cook_time}}</p>
        <ul>Ingredients: {{ recipe.ingredients }}</ul>
        <ol>Directions: {{ recipe.directions }}</ol>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      // message: {{ recipe.title }},
      currentRecipe: {},
      // recipes: []
    };
  },
  created: function() {
    axios.get("/api/recipes").then(response => {
      this.recipes = response.data;
      console.log(this.recipes);
    });
  },
  methods: {
    showRecipe: function(recipe) {
      if (this.currentRecipe === recipe) {
        this.currentRecipe = {};
      } else {
        this.currentRecipe = recipe;
      }
    }
  }
};
</script>