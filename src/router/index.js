import { createRouter, createWebHashHistory, } from "vue-router";
import Home from "@/pages/Home.vue";
import RemoteWrapperPage from "@/pages/RemoteWrapperPage.vue";
import NotFoundView from "@/pages/NotFoundView.vue";
const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/without-tanstack/axios",
        name: "withoutTanstackVue",
        component: RemoteWrapperPage,
        props: {
            type: "vue",
            page: "without-tanstack",
            locationRemote: "vueApp",
        },
    },
    {
        path: "/with-tanstack/axios",
        name: "withTanstackVue",
        component: RemoteWrapperPage,
        props: {
            type: "vue",
            page: "with-tanstack",
            locationRemote: "vueApp",
        },
    },
    {
        path: "/with-react-query",
        name: "withTanstackReact",
        component: RemoteWrapperPage,
        props: {
            type: "react",
            page: "post",
            locationRemote: "reactApp",
        },
    },
    {
        path: "/without-react-query",
        name: "withoutTanstackReact",
        component: RemoteWrapperPage,
        props: {
            type: "react",
            page: "post-without-tanstack",
            locationRemote: "reactApp",
        },
    },
    {
        path: "/react-infinite-scroll",
        name: "reactInfiniteScroll",
        component: RemoteWrapperPage,
        props: {
            type: "react",
            page: "infinite-scroll-post",
            locationRemote: "reactApp",
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFoundView,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});
export default router;
