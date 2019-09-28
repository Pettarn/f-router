<template>
    <div :id="currentPath">

    </div>
</template>

<script>

let currentComponent = this.$route.component

new Vue.extend(currentComponent).$mount(`#${currentPath}`)

export default {
    data() {
        return {
            currentPath: this.$route.path
        }
    },
    components: {
        currentComponent
    }
}
</script>