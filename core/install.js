import RouterView from '../template/router-view.js'

const isDef = v => v !== undefined

console.log('bug')

const install = function (Vue) {

    console.log('Vue.mixin is going to happen.')

    Vue.mixin({
        beforeCreate () {
            if (isDef(this.$options.router)) {
                this._routerRoot = this
                this._router = this.$options.router
                this._router.initHistory()
            } else {
                this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
            }
        }
    })

    Object.defineProperty(Vue.prototype, '$router', {
        get () {
            return this._routerRoot._router
        }
    })

    console.log('RouterView has been registered.')

    Vue.component('RouterView', RouterView)
    
}

export default install