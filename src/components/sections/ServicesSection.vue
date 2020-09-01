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
    .card {
        background-color: transparent;
        border: none;
        text-align: center;
        .card-img-top {
            height: 124px;
            object-fit: contain;
        }
        .card-body {
            margin-top: 60px;
            padding: 0;
            .card-title {
                font-weight: 700;
                font-size: 24px;
                line-height: 18px;
                text-transform: uppercase;
                margin-bottom: 27px;
            }
            .card-text {
                font-size: 16px;
                line-height: 24px;
                font-weight: 300;
            }
        }
    }
</style>
