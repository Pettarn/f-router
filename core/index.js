import match from '../utils/match.js'
import push from './push.js'
import getHash from '../utils/getHash.js'

function FRouter (options) {
    this.routes = options.routes || []
}

FRouter.prototype.match = () => {
    return match(this.currentHash, this.routes)
}

FRouter.prototype.push = () => {
    return push(this.currentHash)
}

FRouter.prototype.getHash = () => {
    return getHash()
}

export default FRouter