const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // Home Page
      {
        path: "/",
        name: "home",
        component: () => import("pages/HomePage.vue"),
      },
      // DataUtil
      {
        path: "/datautil",
        name: "datautil",
        component: () => import("components/DataUtil.vue"),
      },

      // Brands
      {
        path: "/brands",
        name: "brands",
        component: () => import("components/BrandList.vue"),
      },
      // Tray
      {
        path: "/tray",
        name: "tray",
        component: () => import("components/TrayContainer.vue"),
      },
      //Register Account
      {
        name: "register",
        path: "/register",
        component: () => import("components/RegisterCustomer.vue"),
      },
      //Login Account
      {
        name: "login",
        path: "/login",
        component: () => import("components/LoginCustomer.vue"),
      },
      //Logout Account
      {
        name: "logout",
        path: "/logout",
        component: () => import("components/LogoutCustomer.vue"),
      },
      //Order History
      {
        name: "orderhistory",
        path: "/orderhistory",
        component: () => import("components/OrderHistory.vue"),
      },
      {
        name: "branchmap",
        path: "/branchmap",
        component: () => import("components/BranchMap.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
export default routes;
