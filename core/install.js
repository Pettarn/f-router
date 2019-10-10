import FRouter from './index.js'
import RouterView from '../template/router-view.js'
import RouterLink from '../template/router-link.js'



let isDef = item => item !== undefined

FRouter.install = function (Vue) {

    Object.defineProperty(Vue.prototype, $router, {
        get () {
            return this.$options.router
        }
    })
    Object.defineProperty(Vue.prototype, $route, {
        get () {
            return this.$router.getRoute()
        }
    })

    Vue.component('RouterView', RouterView)
    Vue.component('RouterLink', RouterLink)
    
}