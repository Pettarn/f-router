let routerView = {}

routerView.install = function (Vue) {
    Vue.component('router-link', this.router.match(location.hash, this.router.routes))
}

export default routerView
