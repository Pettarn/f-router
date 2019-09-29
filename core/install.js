import FRouter from './index.js'


FRouter.install = function (Vue) {
    Vue.component('RouterView', RouterView)
    Vue.component('RouterLink', RouterLink)

}