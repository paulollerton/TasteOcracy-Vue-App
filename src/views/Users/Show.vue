<template>
  <div class ="users-show">
    
    <h2>{{ user.username }}</h2>
    <img v-bind:src="user.image_url">
    <p>Bio: {{ user.bio }}</p>
    <p>Email: {{ user.email }}</p>

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