export default {
    props: {
        name: {
            type: String,
            default: 'default'
        }
    },

    render (_, { parent }) {
        let h = parent.$createElement
        let hash = this.$router.currentHash  

        // the x level routeMap and hash  match
        let currentMap = parent._childrenMap || this.$router.routeMap
        let matched = []
        currentMap.forEach(item => {
            let index = hash.indexOf(item.path)
            if (index !== 0) {
                return
            } else {
                matched.push(item)
            }
        })

        // if matched only one route
        if (matched.length === 1) {
            h(matched[0].component)
        } else {
            // if matched more than one route
            h(matched[0].component)
        }

    }
}


