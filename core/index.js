import getRoute from '../utils/getRoute.js'
import push from './push.js'
import getHash from '../utils/getHash.js'

function FRouter (options) {
    this.routes = options.routes || []
}

// return currentRoute
FRouter.prototype.getRoute = () => {
    return getRoute(this.currentHash, this.routes)
}

FRouter.prototype.push = () => {
    return push(this.currentHash)
}

// return currentHash
FRouter.prototype.getHash = () => {
    return getHash()
}

// return this.router.route  new FRouter的时候
FRouter.prototype.route = getRoute(this.getHash(), this.routes)

export default FRouter