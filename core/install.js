import RouterView from '../template/router-view.js'
import RouterLink from '../template/router-link.js'



const isDef = item => item !== undefined

const install = function (Vue) {

    Object.defineProperty(Vue.prototype, $router, {
        get () {
            return this.$options.router
        }
    })

    Vue.component('RouterView', RouterView)
    Vue.component('RouterLink', RouterLink)
    
}

export default install