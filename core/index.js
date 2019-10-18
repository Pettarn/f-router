import install from './install'
import History from '../utils/History'


class FRouter {
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

    initHistory () {
        this.history.initHistory()
    }

    static install = install
}

FRotuer.prototype.history = new History(FRouter.prototype)

export default FRouter