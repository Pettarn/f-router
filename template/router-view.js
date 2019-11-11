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

        console.log('router-view is normal.')

        let renderCore = () => {
            // router-view will be rendered as matched component 
            let h = parent.$createElement
            let hash = parent.$router.currentHash

            // the x level routeMap and hash  match
            if (!parent._childrenMap) {
                let currentMap = parent.$router.routeMap

                console.log(createElement)
                console.log(h)
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

                    return h()
                }

                if (matched[0].redirect) {
                    location.href.replace(matched[0].path, matched[0].redirect)
                    return renderCore()
                }

                if (matched[0].children) {
                    data._childrenMap = matched[0].children
                    data._hashChip = matched[0].path
                }

                console.log('rendered something.')

                // return h(matched[0].component)
                return h('div', null, `Hello, you're seccessing.`)


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

                if (matched[0].redirect) {
                    location.href.replace(matched[0].path, matched[0].redirect)
                    return renderCore()
                }

                if (matched[0].children) {
                    data._childrenMap = matched[0].children
                    data._hashChip = matched[0].path
                }

                console.log('rendered something.')

                return h(matched[0].component)
            }
        }
        
        renderCore()

    }
}


