import RouterView from '../template/router-view.js'

const isDef = v => v !== undefined

const install = function (Vue) {

    Vue.mixin({
        beforeCreate () {
            if (isDef(this.$options.router)) {
                this._routerRoot = this
                this._router = this.$options.router
                this._router.initHistory()
            } else {
                this._routerRoot = this.$parent || this.$parent._routerRoot
            }
        }
    })

    Object.defineProperty(Vue.prototype, '$router', {
        get () {
            return this._routerRoot._router
        }
    })

    Vue.component('RouterView', RouterView)
    
}

export default install