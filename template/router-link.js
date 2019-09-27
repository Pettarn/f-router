let routerLink = {}

routerLink.install = function (Vue) {
    Vue.component('router-link', {
        props: {
            to: String,
            tag: Object,

        },
        // template: `<a><>`
    })
}

export default routerLink





