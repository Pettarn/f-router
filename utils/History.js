class History {
    constructor (router) {
        this.router = router
    }

    initHistory () {
        this.Stack = []
        this.Stack.push(this.router.currentHash)
    }

    push (url) {
        location.href = url
        this.Stack.push(this.router.currentHash)
    }

    back () {
        let index = this.Stack.indexOf(this.router.currentHash)
        if (index > 0) {
            location.href = this.Stack[index-1]
        } else {
            location.reload()
        }
    }

    forward () {
        let index = this.Stack.indexOf(this.router.currentHash)
        if (index < this.Stack.length) {
            location.href = this.Stack[index+1]
        } else {
            location.reload()
        }
    }
    
}


export default History