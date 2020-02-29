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
    render(h, { props, children, data }) {
        data.on = {
            click () {
                location.hash = props.to
            }
        }
        h(
            props.tag, 
            data,
            children
        )
    },
}

