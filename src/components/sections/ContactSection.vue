<template>
    <b-row>
        <b-col>
            <b-form @submit.prevent="onSubmit">
                <b-form-row>
                    <b-col cols="12" sm="6">
                        <b-form-input
                            v-model="form.name"
                            type="text"
                            required
                            placeholder="Your Name"
                        >
                        </b-form-input>
                    </b-col>
                    <b-col cols="12" sm="6">
                        <b-form-input
                            v-model="form.mail"
                            type="email"
                            required
                            placeholder="Your Email"
                        ></b-form-input>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col cols="12">
                        <b-form-textarea
                            v-model="form.message"
                            placeholder="Your Message"
                            rows="10"
                            cols="30"
                            required
                        >
                        </b-form-textarea>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col cols="12">
                        <b-button type="submit" size="lg">Submit</b-button>
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

<style scoped>

</style>
