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

        // router-view will be rendered as matched component 
        let h = parent.$createElement
        let hash = parent.$router.currentHash

        console.log('router-view is normal.')

        let options = {}

        let renderCore = () => {
            // the x level routeMap and hash  match
            if (!parent._childrenMap) {
                let currentMap = parent.$router.routeMap

                console.log(hash)
                console.log(currentMap)

                let matched = []
                currentMap.forEach(item => {
                    let index = hash.indexOf(item.path)
                    if (index === 0) {
                        matched.push(item)
                    }
                })

                console.log(matched)

                // matched nothing
                if (!matched[0]) {

                    console.log('rendered nothing.')

                    options.component = null
                }

                if (matched[matched.length-1].redirect) {
                    location.hash.indexOf(matched[matched.length-1].path) > 0
                    ? location.hash.replace(matched[matched.length-1].path, matched[matched.length-1].redirect)
                    : (matched[matched.length-1].path + location.hash).replace(matched[matched.length-1].path, matched[matched.length-1].redirect) 
                    return renderCore()
                }

                if (matched[matched.length-1].children) {
                    data._childrenMap = matched[matched.length-1].children
                    data._hashChip = matched[matched.length-1].path
                }

                console.log('rendered something.')

                
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

                if (matched[matched.length-1].redirect) {
                    location.hash.indexOf(matched[matched.length-1].path) > 0
                    ? location.hash.replace(matched[matched.length-1].path, matched[matched.length-1].redirect)
                    : (matched[matched.length-1].path + location.hash).replace(matched[matched.length-1].path, matched[matched.length-1].redirect) 
                    return renderCore()
                }

                if (matched[matched.length-1].children) {
                    data._childrenMap = matched[matched.length-1].children
                    data._hashChip = matched[matched.length-1].path
                }

                console.log('rendered something.')

                options.component = matched[matched.length-1].component
            }
        }
        
        renderCore()

        return h(options.component)

    }
}


