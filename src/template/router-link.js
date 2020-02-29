export default {
    name: 'RouterLink',
    functional: true,
    props: {
        to: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            default: 'a'
        },
    },
    render(h, { props, data, children }) {
        data.on = {
            click () {
                location.hash = props.to
            }
        }
        
        return h(
            props.tag, 
            data,
            children
        )
    },
}

