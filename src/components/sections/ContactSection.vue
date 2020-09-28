<template>
    <b-row>
        <b-col>
            <b-form @submit.prevent="onSubmit" class="form--contact">
                <b-form-row>
                    <b-col cols="12" sm="6" class="form--contact__name">
                        <b-form-input
                            v-model="form.name"
                            type="text"
                            required
                            placeholder="Your Name *"
                        >
                        </b-form-input>
                    </b-col>
                    <b-col cols="12" sm="6" class="form--contact__mail">
                        <b-form-input
                            v-model="form.mail"
                            type="email"
                            required
                            placeholder="Your Email *"
                        ></b-form-input>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col cols="12" class="form--contact__message">
                        <b-form-textarea
                            v-model="form.message"
                            placeholder="Your Message *"
                            rows="10"
                            cols="30"
                            required
                        >
                        </b-form-textarea>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col cols="12">
                        <div class="action-btn--wrapper">
                            <b-button type="submit" class="action--btn">Send message</b-button>
                        </div>
                    </b-col>
                </b-form-row>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "ContactSection",
        data() {
            return {
                form: {
                    name: '',
                    mail: '',
                    message: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$emit('submit', this.form);

                this.form.name = '';
                this.form.mail = '';
                this.form.message = '';
            }
        }
    }
</script>

<style scoped lang="scss">
    .form--contact {
        @media (min-width: 768px) {
            &__name {
                padding-right: 16px !important;
            }
            &__mail {
                padding-left: 16px !important;
            }
        }
        .form-control {
            border-radius: 4px;
            background-color: #273a71;
            border: none;
            margin-bottom: 27px;
            padding: 22px;
            font-size: 18px;
            line-height: 18px;
            font-weight: 400;
            color: #FFF;
            &::placeholder {
                background: linear-gradient(90deg, rgba(255,255,255,1) 83px, rgba(252,3,3,1) 83px);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
        textarea.form-control {
            min-height: 150px;
            line-height: 1.5;
            &::placeholder {
                background: linear-gradient(90deg, rgba(255,255,255,1) 105px, rgba(252,3,3,1) 105px);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            &::-webkit-resizer {
                background: url(../../assets/textarea-arrow.png) no-repeat 99.9% 100%;
            }
        }
    }
</style>
