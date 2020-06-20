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
                        <MdiFacebook />
                    </b-link>

                    <b-link
                        v-if="item.social.twitter"
                        :href="'https://twitter.com/' + item.social.twitter"
                    >
                        <MdiTwitter />
                    </b-link>

                    <b-link
                            v-if="item.social.linkedIn"
                            :href="'https://www.linkedin.com/' + item.social.linkedIn"
                    >
                        <MdiLinkedIn />
                    </b-link>

                    <b-link
                            v-if="item.social.mail"
                            :href="'mailto:' + item.social.mail"
                    >
                        <MdiEmail />
                    </b-link>
                </div>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
    import MdiFacebook from 'mdi-vue/Facebook'
    import MdiTwitter from 'mdi-vue/Twitter'
    import MdiLinkedIn from 'mdi-vue/Linkedin'
    import MdiEmail from 'mdi-vue/Email'

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

</style>