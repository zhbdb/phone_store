import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddressList from "../views/AddressList";
import AddressNew from "../views/AddressNew";
import AddressEdit from "../views/AddressEdit";
import Detail from "../views/Detail";
import Success from "../views/Success";
import Info from "../views/Info";

Vue.use(VueRouter)

const routes = [
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
        path: "/addressList",
        name: "地址列表",
        component: AddressList
    },
    {
        path: "/addressNew",
        name: "新增列表",
        component: AddressNew
    },
    {
        path: "/addressEdit",
        name: "修改列表",
        component: AddressEdit
    },
    {
        path: "/detail",
        name: "订单详情",
        component: Detail
    },
    {
        path: "/success",
        name: "付款成功",
        component: Success
    }
    ,
    {
        path: "/info",
        name: "下单信息",
        component: Info
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
