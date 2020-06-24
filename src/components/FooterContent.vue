<template>
    <b-container>
        <ul>
            <li v-for="(link, index) in links" :key="'footer--link--' + index">
                <a :href="link.url">{{ link.name }}</a>
            </li>
        </ul>
    </b-container>
</template>

<script>
    export default {
        name: "FooterContent",
        props: ['links']
    }
</script>

<style scoped lang="scss">

</style>
