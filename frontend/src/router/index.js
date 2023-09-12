import { createWebHistory, createRouter } from "vue-router";
const routes = [
  // book
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/book",
    name: "book",
    component: () => import("@/views/book/index.vue"),
  },

  {
    path: "/book/edit",
    name: "addbook",
    component: () => import("@/views/book/edit/add.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/login/signup.vue"),
  },
  {
    path: "/book/:id",
    name: "detail",
    component: () => import("@/views/book/detail.vue"),
  },
  {
    path: "/book/edit/:id",
    name: "updatebook",
    component: () => import("@/views/book/edit/update.vue"),
  },
  // danh muc
  {
    path: "/danhmuc",
    name: "danhmuc",
    component: () => import("@/views/danhmuc/index.vue"),
  },

  {
    path: "/danhmuc/edit",
    name: "adddanhmuc",
    component: () => import("@/views/danhmuc/edit/add.vue"),
  },
  {
    path: "/danhmuc/edit/:id",
    name: "updatedanhmuc",
    component: () => import("@/views/danhmuc/edit/update.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
