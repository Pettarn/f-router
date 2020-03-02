##    __f-router__

[![npm version](https://badge.fury.io/js/%40pettarn%2Ff-router.svg)](https://badge.fury.io/js/%40pettarn%2Ff-router)


***

> `f-router` is a router for Vue.js

##  Feature

-   support router children
-   router-link tag
-   router-view tag
  

##  Install

    npm install @pettarn/f-router

##  Quick Start


    import Vue from 'vue'
    import FRouter from '@pettarn/f-router'

    import indexPage from '../components/indexPage.vue'
    import male from '../components/male.vue'
    import female from '../components/female.vue'

    Vue.use(FRouter)

    let routes = [
        {
            path: '',
            redirect: '/sex/'
        },
        {
            path: '/sex/',
            component: indexPage,
            children: [
                {
                    path: 'a',
                    component: male
                },
                {
                    path: 'b',
                    component: female
                }
            ]
        },
    ]

    let router = new FRouter({
        routes
    })

    export default router

##   App.vue

    <template>
    <div id="app">
        <h3>Following is router render component.</h3>
        <router-view></router-view>
    </div>
    </template>

## router-link tag


    <router-link to="/sex/a" tag="span">男</router-link>
    or
    <router-link to="/sex/b" tag="span">女</router-link>

## Standard

### MIT