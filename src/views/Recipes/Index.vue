<template>
  <div class="home">

    <!-- <p><a v-bind:to="'/users' + user.id"><img v-bind:src="current_user.image_url"></a></p> -->

    <button class="btn btn-warning">
      <router-link v-bind:to="'/signup'">Create Account</router-link>
    </button>

    <button class="btn btn-warning">
      <router-link v-bind:to="'/login'">Login</router-link>
    </button>

    <h1>All Recipes</h1>
    <div v-for="recipe in recipes">
      <h2>{{ recipe.title }}</h2>
      <router-link v-bind:to="'/recipes/' + recipe.id">
        <img v-bind:src="recipe.image_url">
      </router-link>
      <p>Category: {{ recipe.category }}</p>
      <router-link v-bind:to="'/recipes/' + recipe.id">
        <button v-on:click="showRecipe(recipe)">Full Recipe</button>
      </router-link>
      <div v-if="currentRecipe === recipe">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      currentRecipe: {},
      recipes: []
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
        this.currentRecipe = null;
      } else {
        this.currentRecipe = recipe;
      }
    }
  }
};
</script>