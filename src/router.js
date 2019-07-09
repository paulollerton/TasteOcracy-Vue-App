import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from './views/Users/Signup.vue';
import Login from './views/Users/Login.vue';
import Logout from './views/Users/Logout.vue';
import RecipesIndex from './views/Recipes/Index.vue';
import RecipesShow from './views/Recipes/Show.vue';
import RecipesNew from './views/Recipes/New.vue';
import RecipesEdit from './views/Recipes/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: RecipesIndex
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/recipes/new',
      name: 'recipes-new',
      component: RecipesNew
    },
    {
      path: '/recipes/:id',
      name: 'recipes-show',
      component: RecipesShow
    },
    {
      path: '/recipes/edit/:id',
      name: 'recipes-edit',
      component: RecipesEdit
    }
  ]
});
