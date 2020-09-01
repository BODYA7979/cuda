<template>
    <section class="page-section" :style="{ backgroundColor: bgColor, color: textColor }">
        <b-container>
            <header class="page-section__header">
                <h2 class="page-section__header--title">{{ title }}</h2>
                <p class="page-section__header--description" v-html="description"></p>
            </header>
            <article class="page-section__content">
                <slot />
            </article>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "PageSection",
        props: {
            title: String,
            description: String,
            bgColor: String,
            textColor: {
                type: String,
                default: '#393939'
            }
        }
    }
</script>

<style scoped lang="scss">
    .page-section {
        padding: 7.5em 0;
        &__header {
            &--title {
                font-size: 2.5em;
                text-transform: uppercase;
                text-align: center;
                font-weight: 700;
                &:after {
                    content: "";
                    display: block;
                    width: 88px;
                    height: 4px;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 0.45em;
                    background-color: rgba(0, 0, 0, 0.15);
                }
            }

            &--description {
                font-size: 1.125em;
                font-weight: 400;
                margin: 1em auto 3.33333em;
                text-align: center;
            }

            &--content {

            }
        }
    }
</style>
