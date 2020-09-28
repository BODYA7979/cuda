<template>
    <b-row
        v-match-heights="{
            el: ['.card-text'],
            disabled: [768]
        }"
        class="team"
    >
        <b-col
          v-for="(item, index) in people"
          :key="'people--' + index"
          :cols="12"
          :sm="6"
          :md="3"
          class="team-people"
        >
            <b-card
                :title="item.full_name"
                :img-src="item.avatar"
                :img-alt="item.full_name"
                img-top
                tag="article"
            >
                <div class="position">
                    {{ item.position }}
                </div>

                <b-card-text>
                    {{ item.description }}
                </b-card-text>

                <div class="social-links" v-if="!_.isEmpty(item.social)">
                    <b-link
                        v-if="item.social.facebook"
                        :href="'https://facebook.com/' + item.social.facebook"
                    >
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </b-link>

                    <b-link
                        v-if="item.social.twitter"
                        :href="'https://twitter.com/' + item.social.twitter"
                    >
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                    </b-link>

                    <b-link
                        v-if="item.social.linkedIn"
                        :href="'https://www.linkedin.com/' + item.social.linkedIn"
                    >
                        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                    </b-link>

                    <b-link
                        v-if="item.social.mail"
                        :href="'mailto:' + item.social.mail"
                    >
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                    </b-link>
                </div>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
    import Vue from 'vue';
    import VueMatchHeights from 'vue-match-heights'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

    library.add(faFacebookF, faTwitter, faLinkedinIn, faEnvelope)

    Vue.component('font-awesome-icon', FontAwesomeIcon)
    Vue.use(VueMatchHeights)

    export default {
        name: "TeamSection",
        props: ['people'],
        components: {
            FontAwesomeIcon
        }
    }
</script>

<style scoped lang="scss">
    .team {
        .team-people {
            &:not(:last-child) {
                @media (max-width: 768px) {
                    margin-bottom: 100px;
                }
            }
            .card {
                background-color: transparent;
                border: none;
                text-align: center;
                .card-img-top {
                    border-radius: 100px;
                    width: 200px;
                    height: 200px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .card-body {
                    margin-top: 2.5em;
                    padding: 0;
                    .card-title {
                        text-transform: uppercase;
                        margin-bottom: 0;
                        font-size: 24px;
                        line-height: 18px;
                        color: #27283d;
                        font-weight: 700;
                    }
                    .position {
                        margin-top: 15px;
                        font-size: 16px;
                        line-height: 18px;
                        color: #30bae7;
                        font-weight: 400;
                    }
                    .card-text {
                        margin-top: 26px;
                        font-weight: 300;
                        font-size: 16px;
                        line-height: 24px;
                        color: #3c4761;
                    }
                    .social-links {
                        margin-top: 1.875em;
                        a {
                            background-color: #bdd1df;
                            color: #fff;
                            border-radius: 50%;
                            width: 32px;
                            height: 32px;
                            display: inline-block;
                            padding-top: 4px;
                            &:not(:last-child) {
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
