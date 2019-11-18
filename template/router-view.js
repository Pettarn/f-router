export default {
    name: 'RouterView',
    functional: true,
    props: {
        name: {
            type: String,
            default: 'default'
        }
    },

    render(_, { parent, data }) {

        console.log(parent)
        console.log(data)
        console.log(parent._childrenMap)
        // router-view will be rendered as matched component 
        let hash = parent.$router.currentHash

        if(hash[0] === '#') {
            hash = hash.split('')
            hash.shift()
            hash = hash.join('')
        }

        let options = {}

        let renderCore = () => {
            // the x level routeMap and hash  match
            if (!parent._childrenMap) {
                let currentMap = parent.$router.routeMap
                let matched = []
                currentMap.forEach(item => {
                    let index = hash.indexOf(item.path)
                    if (index === 0) {
                        matched.push(item)
                    }
                })

                // matched nothing
                if (!matched[0]) {
                    options.component = null
                }

                if (matched[matched.length-1].redirect) {
                    hash = hash.replace(matched[matched.length-1].path, matched[matched.length-1].redirect)
                    location.hash = '#' + hash
                    return renderCore()
                }

                if (matched[matched.length-1].children) {
                    parent._childrenMap = matched[matched.length-1].children
                    parent._hashChip = matched[matched.length-1].path
                }

                options.component = matched[matched.length-1].component
            } else {
                let currentMap = parent._childrenMap
                let parentHashChip = parent._hashChip
                let matched = []

                if (parentHashChip[-1] !== '/') {
                    parentHashChip += '/'
                }
                
                currentMap.forEach(item => {
                    let index = hash.indexOf(parentHashChip + item.path)
                    if (index !== -1) {
                        matched.push(item)
                    }
                })
                
                console.log(currentMap)
                console.log(parentHashChip)
                console.log(matched)

                if (matched[matched.length-1].redirect) {
                    hash = hash.replace(matched[matched.length-1].path, matched[matched.length-1].redirect)
                    location.hash = '#' + hash
                    return renderCore()
                }

                if (matched[matched.length-1].children) {
                    parent._childrenMap = matched[matched.length-1].children
                    parent._hashChip = matched[matched.length-1].path
                }

                options.component = matched[matched.length-1].component
            }
        }
        
        renderCore()

        return _(options.component)

    }
}


