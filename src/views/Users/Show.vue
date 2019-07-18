<template>
  <!-- <div class ="users-show">

    blog-grid-ls.html

    <button class="btn btn-warning">
      <router-link v-bind:to="'/signup'">Create Account</router-link>
    </button>

    <button class="btn btn-warning">
      <router-link v-bind:to="'/login'">Login</router-link>
    </button>
    
    <h2>{{ user.username }}</h2>
    <img v-bind:src="user.image_url">
    <p>Bio: {{ user.bio }}</p>
    <p>Email: {{ user.email }}</p>

    <button class="btn btn-warning">
      <router-link v-bind:to="'/users/' + user.id + '/edit'">Edit</router-link>
    </button>

  </div> -->

  <div class="page-box">

    <main id="main">
      <header class="page-header">
        <h1><span class="accent-color">About</span> Me</h1>
      </header>

      <div class="container">
        <article class="page bg">
          <div class="page-media">
            <img class="retina" v-bind:src="user.image_url" width="1098" height="500" alt="About Me">
          </div><!-- .page-media -->

          <div class="page-content">
            <h5><strong>{{ user.username }}</strong></h5>
            <hr>
            <p>Bio: {{ user.bio }}</p>
            <p>Email: {{ user.email }}</p>
            
          </div><!-- .page-content -->
        </article><!-- .page -->
      </div>
    </main><!-- #main -->
  </div><!-- .page-box -->
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
  }
};
</script>