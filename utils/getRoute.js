let getRoute = function (currentHash, routePool) {

    let currentRoute = []

    routePool.forEach(item => {
        if (item.path === currentHash) {
            currentRoute.push(item)
        }
    })

    return currentRoute
}

export default getRoute