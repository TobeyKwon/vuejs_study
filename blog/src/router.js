import { createWebHistory, createRouter } from "vue-router";
import PostList from "@/components/PostList.vue";
import MainComp from "@/components/MainComp";
import PostDetail from "@/components/PostDetail";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainComp,
  },
  {
    path: "/posts",
    name: "Posts",
    component: PostList,
    children: [
      {
        path: ":id",
        name: "detail",
        component: PostDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
