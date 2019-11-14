import install from './install'
import History from '../utils/History'

window.onhashchange = function () {
    location.reload()
}

class FRouter {
    constructor (options) {
        this.routeMap = options.routes
    }

    // get href () {

    // }

    get currentHash () {

        console.log('The method currentHash is executed.')

        let hash = window.location.hash
        // let index = hash.indexOf('#')
        
        return hash
    }

    initHistory () {
        this.history.initHistory()
    }

    push (url) {
        this.history.push(url)
    } 

    back () {
        this.history.back()
    }

    forward () {
        this.history.forward()
    }
}

FRouter.install = install
FRouter.prototype.history = new History(FRouter.prototype)

export default FRouter