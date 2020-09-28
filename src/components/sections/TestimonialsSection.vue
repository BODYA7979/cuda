<template>
    <b-row>
        <b-col
            v-for="(item, index) in items"
            :key="'review--' + index"
            class="testimonial__item"
            cols="12"
            sm="6"
        >
            <b-media>
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

<style scoped lang="scss">
    .testimonial__item {
        margin-bottom: 100px;
        @media (min-width: 992px) {
            margin-bottom: 158px;
            &:nth-last-child(-n+2) {
                margin-bottom: 0;
            }
            &:nth-child(odd) {
                padding-right: 59px;
            }
            &:nth-child(even) {
                padding-left: 59px;
            }
        }
        .media {
            > div:first-child {
                margin-right: 48px !important;
            }
            @media (max-width: 991px) {
                flex-direction: column;
                > div:first-child {
                    margin-right: 0 !important;
                    align-self: center !important;
                }
            }
            .testimonial__item--avatar {
                width: 96px;
                height: 96px;
            }
            .media-body {
                /*max-width: 340px;*/
                .testimonial__item--text {
                    font-size: 21px;
                    line-height: 31px;
                    color: #ffffff;
                    font-weight: 400;
                    font-style: italic;
                    margin: 0;
                    &:before { content: open-quote; }
                    &:after  { content: close-quote; }
                }
                h3 {
                    margin-top: 28px;
                    margin-bottom: 0;
                    font-size: 24px;
                    line-height: 26px;
                    color: #ffffff;
                    font-weight: 700;
                }
                h5 {
                    margin-top: 10px;
                    margin-bottom: 0;
                    font-size: 18px;
                    line-height: 26px;
                    color: #ffdd99;
                    font-weight: 400;
                }
            }
        }
    }
</style>
