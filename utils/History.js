class History {
    constructor (router) {
        this.router = router
    }

    initHistory () {
        this.Stack = []
        this.current = router.currentHash
        this.Stack.push(this.current)
    }

    // relative path or absolute path
    push (hash) {
        // this.current = hash
        // this.Stack.push(this.current)

        if (hash.indexOf('/http(s):/') !== 0 ) {

        }

    }
    
}


export default History