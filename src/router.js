import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import RecipesIndex from './views/Recipes/Index.vue';
import RecipesShow from './views/Recipes/Show.vue';
import RecipesNew from './views/Recipes/New.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/recipes',
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
      path: '/recipes/new',
      name: 'recipes-new',
      component: RecipesNew
    },
    {
      path: '/recipes/:id',
      name: 'recipes-show',
      component: RecipesShow
    },
  ]
});
