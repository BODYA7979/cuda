<template>
    <b-row>
        <b-col
          v-for="(item, index) in people"
          :key="'people--' + index"
          :cols="12"
          :sm="6"
          :md="3"
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
                        <MdiFacebook
                            :size="33"
                            :fillColor="'#bdd1df'"
                        />
                    </b-link>

                    <b-link
                        v-if="item.social.twitter"
                        :href="'https://twitter.com/' + item.social.twitter"
                    >
                        <MdiTwitter
                            :size="33"
                            :fillColor="'#bdd1df'"
                        />
                    </b-link>

                    <b-link
                        v-if="item.social.linkedIn"
                        :href="'https://www.linkedin.com/' + item.social.linkedIn"
                    >
                        <MdiLinkedIn
                            :size="33"
                            :fillColor="'#bdd1df'"
                        />
                    </b-link>

                    <b-link
                        v-if="item.social.mail"
                        :href="'mailto:' + item.social.mail"
                    >
                        <MdiEmail
                            :size="33"
                            :fillColor="'#bdd1df'"
                        />
                    </b-link>
                </div>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
    import MdiFacebook from 'vue-material-design-icons/Facebook'
    import MdiTwitter from 'vue-material-design-icons/Twitter'
    import MdiLinkedIn from 'vue-material-design-icons/Linkedin'
    import MdiEmail from 'vue-material-design-icons/Email'

    export default {
        name: "TeamSection",
        props: ['people'],
        components: {
            MdiFacebook,
            MdiTwitter,
            MdiLinkedIn,
            MdiEmail
        }
    }
</script>

<style scoped lang="scss">
    .card {
        background-color: transparent;
        border: none;
        text-align: center;
        .card-img-top {
            border-radius: 50%;
            width: 10em;
            margin-left: auto;
            margin-right: auto;
        }
        .card-body {
            margin-top: 2.5em;
            padding: 0;
            .card-title {
                text-transform: uppercase;
                margin-bottom: 0;
            }
            .position {
                margin-top: 1em;
                color: #30bae7;
                font-size: 16px;
            }
            .card-text {
                margin-top: 1.625em;
            }
            .social-links {
                margin-top: 1.875em;
                a {
                    svg {

                        path {

                        }
                    }
                }
            }
        }
    }
</style>