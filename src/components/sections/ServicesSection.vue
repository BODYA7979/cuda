<template>
    <b-row>
        <b-col
            v-for="service in services"
            :key="'service--' + service.name"
            cols="12"
            sm="6"
            md="3"
        >
            <b-card
                    :title="service.name"
                    :img-src="service.image"
                    :img-alt="service.name"
                    img-top
                    tag="article"
            >
                <b-card-text v-html="service.text"></b-card-text>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "ServicesSection",
        props: ['services']
    }
</script>

<style scoped lang="scss">

</style>