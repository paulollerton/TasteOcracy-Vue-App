<template>
  <div class ="users-show">

    <!-- <router-link v-bind:to="'/users/' + user.id" tag="img" v-bind:src="user.image_url"></router-link> -->

    <p><a v-bind:to="'/users' + user.id"><img v-bind:src="user.image_url"></a></p>

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

  </div>
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