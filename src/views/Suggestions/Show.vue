<template>
  <div class="recipes-show">

    <button class="btn btn-warning">
      <router-link v-bind:to="'/signup'">Create Account</router-link>
    </button>

    <button class="btn btn-warning">
      <router-link v-bind:to="'/login'">Login</router-link>
    </button>

      <p>User: {{ suggestion.user_id }}</p>
      <p>Recipe: {{ suggestion.recipe_id }}</p>
      <p>Content: {{ suggestion.content }}</p>
      <p>Vote Count: {{ suggestion.vote_count }}</p>

    <button class="btn btn-warning">
      <router-link v-bind:to="'/suggestions/' + suggestion0.id + '/edit'">Edit</router-link>
    </button>

   <h4>Comments</h4>
   <div v-for="comment in comments">
     <p>{{ comment.content }}</p>
     <router-link v-bind:to="'/comments/' + comment.id">
       <button v-on:click="showComment(comment)">View Comment</button>
     </router-link>
     <div v-if="currentComment === comment">
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
      suggestion: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/suggestions/" + this.$route.params.id).then(response => {
      this.suggestion = response.data;
      console.log(this.suggestion);
    });
  },
  methods: {
  }
};
</script>