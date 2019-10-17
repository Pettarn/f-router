import install from './install'


export class FRotuer {
    constructor (options) {
        this.routeMap = options.routes

    }

    get currentHash () {
        let href = window.location.href
        let index = href.indexOf('#')
        
        if (index < 0) {
            return ''
        }

        return href.slice(index + 1)
    }

    static install = install
}