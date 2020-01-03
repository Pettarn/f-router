export default {
    name: 'RouterView',
    functional: true,
    props: {
        name: {
            type: String,
            default: 'default'
        }
    },
    data () {
        return {
        }
    },
    render(_, { parent, data }) {

        // router-view will be rendered as matched component 
        let hash = parent.$router.currentHash
        
        if (hash[0] === '#') {
            hash = hash.split('')
            hash.shift()
            hash = hash.join('')
        }

        let options = {}

        let renderCore = () => {
            if (typeof parent.$vnode.data._childrenMap === 'undefined') {
                let currentMap = parent.$router.routeMap
                let matched = []
                currentMap.forEach(item => {
                    let index = hash.indexOf(item.path)
                    if (index === 0) {
                        matched.push(item)
                    }
                })

                // matched nothing
                if (matched.length === 0) {
                    return
                }

                if (matched[matched.length-1].redirect) {
                    hash = hash.replace(matched[matched.length-1].path, matched[matched.length-1].redirect)
                    location.hash = '#' + hash
                    return renderCore()
                }

                if (typeof matched[matched.length-1].children !== 'undefined') {
                    data._childrenMap = matched[matched.length-1].children
                    data._hashChip = matched[matched.length-1].path
                }

                options.data = data
                options.component = matched[matched.length-1].component
            } else {
                let currentMap = parent.$vnode.data._childrenMap
                let parentHashChip = parent.$vnode.data._hashChip
                let matched = []

                if (parentHashChip[parentHashChip.length-1] !== '/') {
                    parentHashChip += '/'
                }
                
                currentMap.forEach(item => {
                    let index = hash.indexOf(parentHashChip + item.path)
                    if (index !== -1) {
                        matched.push(item)
                    }
                })

                if (matched.length === 0) {
                    return
                }
                
                if (matched[matched.length-1].redirect) {
                    hash = hash.replace(matched[matched.length-1].path, matched[matched.length-1].redirect)
                    location.hash = '#' + hash
                    return renderCore()
                }

                if (matched[matched.length-1].children) {
                    data._childrenMap = matched[matched.length-1].children
                    data._hashChip = matched[matched.length-1].path
                }

                options.data = data
                options.component = matched[matched.length-1].component
            }
        }
        
        renderCore()

        return _(options.component, options.data)

    }
}


