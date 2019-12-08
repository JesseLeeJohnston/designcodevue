import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/SignInFlow/SignIn.vue";
import Recover from "../views/SignInFlow/Recover.vue";
import Request from "../views/SignInFlow/Request.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/team",
    name: "team",
    component: Team
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover
  },
  {
    path: "/request",
    name: "request",
    component: Request
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
