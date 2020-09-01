<template>
    <b-container>
        <b-navbar toggleable="lg">
            <b-navbar-brand href="/">
                <img :src="require('../assets/logo.png')" alt="Cuda Logo"/>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item
                      v-for="(item, index) in links"
                      :key="'header--nav-item--' + index"
                      :href="item.url"
                      :active="item.url === _document.location.pathname + _document.location.hash"
                    >
                        {{ item.name }}
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>

<script>
    export default {
        name: "Navigation",
        props: ['links'],
        computed: {
            _document() {
                return document;
            }
        }
    }
</script>

<style scoped lang="scss">
    .navbar {
        .navbar-brand {
            img {
                height: 38px;
            }
        }
        .navbar-collapse {
            .navbar-nav {
                .nav-item {
                    &:not(:last-child) {
                        margin-right: 10px;
                    }
                    .nav-link {
                        border-radius: 3px;
                        text-transform: uppercase;
                        color: #FFF;
                        padding: 5px 17px;
                        &.active, &:hover, &:focus {
                            background-color: #643A79;
                        }
                    }
                }
            }
        }
    }
</style>
