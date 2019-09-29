let getRoute = function (currentHash, routePool) {

    let currentRoute

    routePool.forEach(item => {
        if('#' + item.path === currentHash) {
            currentRoute = item
        }
    })

    return currentRoute
}

export default getRoute