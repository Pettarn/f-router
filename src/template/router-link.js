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
        }
    },
    render(h, { props }) {
        location.hash = props.to
        h(props.to, 'slot')
    },
}

