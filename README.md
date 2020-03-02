##    __f-router__

[![npm version](https://badge.fury.io/js/%40pettarn%2Ff-router.svg)](https://badge.fury.io/js/%40pettarn%2Ff-router)

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="a"><rect width="90" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#a)"><path fill="#555" d="M0 0h59v20H0z"/><path fill="#007ec6" d="M59 0h31v20H59z"/><path fill="url(#b)" d="M0 0h90v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"> <text x="305" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="490">standard</text><text x="305" y="140" transform="scale(.1)" textLength="490">standard</text><text x="735" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="210">MIT</text><text x="735" y="140" transform="scale(.1)" textLength="210">MIT</text></g> </svg>

***

> `f-router ` is a router for Vue.js

##  Feature
***
-   support router children
-   router-link tag
-   router-view tag
  

##  Install
***
    npm install @pettarn/f-router

##  Quick Start
***

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
***
    <template>
    <div id="app">
        <h3>Following is router render component.</h3>
        <router-view></router-view>
    </div>
    </template>

## router-link tag
***

    <router-link to="/sex/a" tag="span">男</router-link>
    or
    <router-link to="/sex/b" tag="span">女</router-link>

## Standard
***
    MIT