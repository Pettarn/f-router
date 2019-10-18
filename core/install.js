import RouterView from '../template/router-view.js'


const install = function (Vue) {

    Vue.mixin({
        beforeCreate() {
            Object.defineProperty(Vue.prototype, $router, {
                get () {
                    return this.$options.router
                }
            })
            
            this.$router.initHistory()
        },
    })

    Vue.component('RouterView', RouterView)
    
}

export default install