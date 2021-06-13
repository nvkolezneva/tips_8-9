import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import { authGuard } from "../auth/authGuard";

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue")
    },
    {
      path: "/event/:id",
      name: "eventSingle",
      component: () => import("../views/EventSingle.vue"),
      beforeEnter: authGuard
    },
    {
      path: "/client-orders",
      name: "Orders",
      component: () => import("../client/Orders.vue")
    },
    {
      path: "/new-order",
      name: "NewOrder",
      component: () => import("../client/NewOrder")
    },
    {
      path: "/account",
      name: "Account",
      component: () => import("../client/Account")
    },
    {
      path: "/account-courier",
      name: "accountCourier",
      component: () => import("../courier/accountCourier")
    },
    {
      path: "/accept-orders",
      name: "acceptOrders",
      component: () => import("../courier/acceptOrders")
    },
    {
      path: "/courier-orders",
      name: "hisOrders",
      component: () => import("../courier/hisOrders")
    },
    {
      path: "/employees",
      name: "Employees",
      component: () => import("../admin/employees")
    },
    {
      path: "/admin-account",
      name: "adminAccount",
      component: () => import("../admin/adminAccount")
    }
  ]
});