<template>
    <b-container>
        <b-navbar toggleable="lg">
            <b-navbar-brand href="#">Cuda</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item
                      v-for="(item, index) in processed_links"
                      :key="'header--nav-item--' + index"
                      :href="item.url"
                      :active="item.active"
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
            processed_links() {
                return this.links.map((menu_item) => {
                    menu_item.active = menu_item.url === document.location.pathname + document.location.hash;
                    return menu_item;
                });
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
