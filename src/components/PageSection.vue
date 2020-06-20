<template>
    <section class="page-section" :style="{ backgroundColor: color }">
        <b-container>
            <div class="section--title">{{ title }}</div>
            <div class="section--description">{{ description }}</div>
            <slot class="section--content" name="content" />
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "PageSection",
        props: ['title', 'description', 'color']
    }
</script>

<style scoped>

</style>