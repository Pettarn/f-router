let getHash = function () {
    let currentHash = location.hash.slice(1)
    return currentHash
}

export default getHash