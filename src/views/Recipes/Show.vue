<template>
  <!-- <div class="recipes-show">

    post.html

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
      
  </div> -->

  <div class="page-box">

    <main id="main">
      <header class="page-header">
        <h1>{{ recipe.title }}</h1>
        <h6>Category: {{ recipe.category }}</h6>
      </header>

      <div class="container">
        <article class="post post-single bg">
          <div class="post-media">
            <router-link v-bind:to="'/recipes/' + recipe.id">
              <img class="retina" v-bind:src="recipe.image_url" width="338" height="320" alt="Post Image">
            </router-link>
          </div>

          <blockquote class="blockquote">
            {{ recipe.blurb }}
          </blockquote>

          <div class="post-header">
            <div class="created-by">Created By: {{ recipe.user_id }}</div>
          </div>

          <div class="post-content">

            <h5>Prep Time:</h5>
            <p>{{ recipe.prep_time }} minutes.</p>

            <h5>Cook Time:</h5>
            <p>{{ recipe.cook_time }} minutes.</p>

            <h5>Ingredients:</h5>
            <p>{{ recipe.ingredients }}</p>

            <h5>Directions:</h5>
            <p>{{ recipe.directions }}</p>

            <ul class="tags-list">
            </ul>
          </div><!-- .post-content -->

          <div class="row post-footer">
            

            <div class="col-sm-6 text-sm-right post-sharing">
              Share:
              <ul class="social">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
              </ul>
            </div>
          </div>
        </article><!-- .post -->

        <div class="post-comments">
          <h4 class="title">3 Comments</h4>

          <ul class="comments">
            <li v-for="comment in recipe.comments" class="comment even">
              <div class="author-img">
                <img src="content/img/avatar-1.jpg" class="avatar" height="50" width="50" alt="">
              </div>

              <div class="comment-text">
                <span class="reply">
                  <a class="comment-reply-link" href="#">Reply</a>
                </span>
                <h6 class="author">Mr. Braun</h6>
                <span class="date">Posted on November 25, 2016</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda eaque eligendi in
                  magnam neque nesciunt quod sint. Accusamus aliquam commodi corporis cumque delectus dolor dolorum
                  esse excepturi explicabo harum incidunt itaque iure labore laborum maiores maxime minima natus,
                  necessitatibus nemo odio pariatur quasi reiciendis rem sint sunt tempore ullam ut veritatis voluptas
                  voluptates. Commodi dolores eos, et eum laudantium odio perferendis placeat praesentium quae suscipit
                  tempora tenetur voluptate voluptates.</p>
              </div>

              <ul class="children">
                <li class="comment odd">
                  <div class="author-img">
                    <img src="content/img/avatar-2.jpg" class="avatar" height="50" width="50" alt="">
                  </div>

                  <div class="comment-text">
                    <span class="reply">
                      <a class="comment-reply-link" href="#">Reply</a>
                    </span>
                    <h6 class="author">Next Item</h6>
                    <span class="date">Posted on November 26, 2016</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur ex illo nihil
                      nobis pariatur tempore tenetur veniam voluptatem voluptatum! Autem delectus hic laborum laudantium
                      maxime quis similique! Commodi consectetur dolores excepturi exercitationem impedit natus quasi
                      quisquam quos veritatis voluptatum.</p>
                  </div>
                </li>
              </ul><!-- .children -->
            </li>
            <li class="comment byuser comment-author-solopine bypostauthor even thread-odd thread-alt depth-1" id="comment-3">
              <div class="author-img">
                <img src="content/img/avatar-3.jpg" class="avatar" height="50" width="50" alt="">
              </div>

              <div class="comment-text">
                <span class="reply">
                  <a class="comment-reply-link" href="#">Reply</a>
                </span>
                <h6 class="author">Joanna</h6>
                <span class="date">Posted on November 24, 2016</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloremque eveniet illo, in iste
                  magnam modi provident qui quo recusandae reprehenderit sapiente? Ab aliquam architecto beatae
                  blanditiis delectus dignissimos dolor ea enim exercitationem expedita facilis, fugit inventore ipsam,
                  ipsum nam nihil obcaecati officia quidem quis reprehenderit sint suscipit, veritatis voluptatem!</p>
              </div>
            </li>
          </ul><!-- .comments -->

          <div class="comment-respond">
            <h4 class="comment-reply-title title">Leave a Reply</h4>

            <form class="comment-form">
              <p class="comment-notes">
                <span id="email-notes">Your email address will not be published.</span> Required fields are marked <span class="required">*</span>
              </p>
              <div class="form-group">
                <label class="control-label" for="comment">Comment <span class="required red-text">*</span></label>
                <textarea id="comment" class="form-control" name="comment" cols="30" rows="4"></textarea>
              </div>
              <div class="form-group left-field">
                <label class="control-label" for="author">Name <span class="required red-text">*</span></label>
                <input id="author" type="text" name="author" class="form-control">
              </div>
              <div class="form-group right-field">
                <label class="control-label" for="email">Email <span class="required red-text">*</span></label>
                <input id="email" type="email" name="email" class="form-control">
              </div>
              <p class="form-group btn-form-group">
                <button class="btn btn-default submit">Post Comment</button>
              </p>
            </form>
          </div><!-- .comment-respond -->
        </div><!-- .post-comments -->
      </div>
    </main><!-- #main -->

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