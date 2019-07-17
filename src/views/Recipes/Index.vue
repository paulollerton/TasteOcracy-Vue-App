<template>
  <!-- <div class="home">

    blog-masonry.html

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
  </div> -->

  <div class="page-box">
    

    <main id="main">
      <header class="page-header">
        <h1>All <span class="accent-color">Recipes</span></h1>
      </header>

      <div class="container">
        <div class="row">
          <div class="col-sm-12 posts-list">
            <div v-for="recipe in recipes" class="row grid-layout masonry-layout">
              <!-- Grid size -->
              <div class="col-xs-12 col-lg-6 col-xl-4 grid-sizer"></div>

              <article class="col-xs-12 col-lg-6 col-xl-4 grid-item">
                <div class="post bg">
                  <div class="post-media">
                    <!-- <router-link v-bind:to="'/recipes/' + recipe.id">
                      <img v-bind:src="recipe.image_url">
                    </router-link> -->
                    <a href="post.html">
                      <img class="retina" v-bind:src="recipe.image_url" width="338" height="320" alt="Post Image">
                    </a>
                  </div>

                  <div class="post-header center-align">
                    <div class="tags all-caps"><a href="#">{{ recipe.category }}</a></div>
                    <h2 class="post-title"><a href="post.html">{{ recipe.title }}</a></h2>
                  </div>

                  <div class="post-footer">
                    <div class="post-author">
                      By: <a href="post.html">{{ recipe.user_id }}</a>
                    </div>

                    <div class="post-sharing">
                      Share:
                      <ul class="social">
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="clearfix"></div>
                </div><!-- .post -->
              </article>

          
            </div>

            <nav>
              <ul class="column pager">
                <li class="col-xs-6 text-xs-left"></li>
                <li class="col-xs-6 text-xs-right"><a href="#">Older Posts <span class="arrow-right"></span></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main><!-- #main -->

  </div><!-- .page-box -->
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      currentRecipe: {},
      recipes: [],
      errors: []
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