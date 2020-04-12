import Home from '../views/Home.vue';
export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/notebook',
    name: 'Notebook',
    component: () => import(/* webpackChunkName: "about" */ '../views/page-notebook/index.vue')
  },
  {
    path: '/notebook-writing',
    name: 'NoteBookWriting',
    component: () => import(/* webpackChunkName: "about" */ '../views/page-notebook/notebook-writing/index.vue')
  }
];
