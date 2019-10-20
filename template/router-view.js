export default {
    props: {
        name: {
            type: String,
            default: 'default'
        }
    },

    render (_, { parent, data }) {

        function renderCore (_, { parent, data }) {
            // router-view will be rendered as matched component 
            let h = parent.$createElement
            let hash = this.$router.currentHash  

            // the x level routeMap and hash  match
            if (!parent._childrenMap) {
                let currentMap = this.$router.routeMap
                let matched = []
                currentMap.forEach(item => {
                    let index = hash.indexOf(item.path)
                    if (index === 0) {
                        matched.push(item)
                    }
                })
                
                if (matched[0].redirect) {
                    location.href.replace(matched[0].path, matched[0].redirect)
                    return renderCore(_, { parent, data })
                }

                if (matched[0].children) {
                    data._childrenMap = matched[0].children
                    data._hashChip = matched[0].path
                }

                return h(matched[0].component)
                
                
            } else {
                let currentMap = parent._childrenMap
                let parentHashChip = parent._parentHashChip
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
                    return renderCore(_, { parent, data })
                }

                if (matched[0].children) {
                    data._childrenMap = matched[0].children
                    data._hashChip = matched[0].path
                }

                return h(matched[0].component)
            }    
        }

        renderCore(_, { parent, data })
        
    }    
}


