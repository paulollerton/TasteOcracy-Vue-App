<template>
  <!-- <div class="users-edit">
    
    <h1 class="text-center">Edit User</h1> 

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Ross" v-model="user.username">
        </div>
        <div class="form-group col-md-6">
          <label for="imageUrl">Image URL</label>
          <input type="text" class="form-control" id="imageUrl" placeholder="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/03/14/istock-502426854.jpg?w968h681" v-model="user.image_url">
        </div>
      </div>
      <div class="form-group">
        <label for="bio">Bio</label>
        <input type="text" class="form-control" id="bio" placeholder="I like dinosaurs." v-model="user.bio">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" placeholder="ross@gmail.com" v-model="user.email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="password" v-model="user.password">
      </div>
      <div class="form-group">
        <label for="password-confirmation">Password Confirmation</label>
        <input type="password" class="form-control" id="password-confirmation" placeholder="password" v-model="user.password_confirmation">
      </div>

      <button type="submit" class="btn btn-primary btn-outline">Update</button>
    </form>

    <div class="text-center">
      <button class="btn btn-danger" v-on:click="destroyUser()">Destroy</button> 
    </div>

  </div> -->

  <main id="main">
    <header class="page-header">
      <h1><span class="accent-color">Edit</span> Profile</h1>
    </header>

    <div class="container">

      <div class="post-comments">

        <div class="comment-respond">

          <form v-on:submit.prevent="submit()" class="comment-form">

            <div class="form-group left-field">
              <label class="control-label" for="author">Username <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="Tea" v-model="user.username">
            </div>
            <div class="form-group left-field">
              <label class="control-label" for="author">Image URL <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/03/14/istock-502426854.jpg?w968h681" v-model="user.image_url">
            </div>
            <div class="form-group left-field">
              <label class="control-label" for="author">Bio <span class="required red-text">*</span></label>
              <input id="author" type="text" name="author" class="form-control" placeholder="Drinks" v-model="user.bio">
            </div>
            <div class="form-group">
              <label class="control-label" for="comment">Email <span class="required red-text">*</span></label>
              <textarea id="comment" class="form-control" name="comment" cols="30" rows="4" placeholder="I love tea, it helps me to calm down after my evil plans have been thwarted by a young boy." v-model="user.email"></textarea>
            </div>
            <div class="form-group right-field">
              <label class="control-label" for="author">Password <span class="required red-text">*</span></label>
              <input id="author" type="author" name="author" class="form-control" placeholder="********" v-model="user.password">
            </div>
            <div class="form-group right-field">
              <label class="control-label" for="author">Password Confirmation <span class="required red-text">*</span></label>
              <input id="author" type="author" name="author" class="form-control" placeholder="********" v-model="user.password_confirmation">
            </div>
            <p class="form-group btn-form-group">
              <button class="btn btn-default submit">Submit</button>
            </p>
          </form>
        </div><!-- .comment-respond -->
      </div><!-- .post-comments -->
    </div>
  </main><!-- #main -->
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
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
    submit: function() {
      // send a patch request to the backend to update this recipe
      var params = {
        username: this.user.username,
        image_url: this.user.image_url,
        bio: this.user.bio,
        email: this.user.email,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation
      };
      axios.patch("/api/users/" + this.user.id, params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/users/" + this.user.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    destroyUser: function() {
      // send an axios delete request to the backend to remove recipe from database
      axios.delete("/api/users/" + this.user.id).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/");
      });
    }
  }
};
</script>