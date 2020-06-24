<template>
    <b-row>
        <b-col
            v-for="(item, index) in items"
            :key="'review--' + index"
            class="testimonial__item"
            cols="12"
            sm="6"
        >
            <b-media

            >
                <template slot="aside">
                    <b-img
                            :src="item.avatar"
                            :alt="item.author"
                            class="testimonial__item--avatar"
                            fluid
                            rounded="circle"
                    ></b-img>
                </template>
                <p class="testimonial__item--text">{{ item.text }}</p>
                <h3>{{ item.author }}</h3>
                <h5>{{ item.position }}</h5>
            </b-media>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "TestimonialsSection",
        props: ['items']
    }
</script>

<style scoped>

</style>
