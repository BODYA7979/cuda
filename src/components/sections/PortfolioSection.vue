<template>
    <div>
        <div class="category-filter">
            <button
                    v-for="(category, index) in categories"
                    :key="'portfolio--category--' + index"
                    @click="changeCategory(category)"
                    class="btn"
            >{{ category }}</button>
        </div>
        <div class="works">
            <b-row>
                <b-col
                    v-for="(work, index) in works_to_display"
                    :key="'portfolio--work--' + index"
                    cols="12"
                    sm="6"
                    class="works--item"
                >
                    <b-img
                            :src="work.preview_image"
                            :alt="work.name"
                            class="works--item__image"
                            fluid
                    ></b-img>
                    <p class="works--item__name">
                        {{ work.name }}
                    </p>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PortfolioSection",
        props: ['works'],
        data() {
            return {
                selected_category: 'All'
            }
        },
        computed: {
            categories() {
                // parse all ategories.
                let categories = this.works.map(work => work.category);
                // make sure, that they are uniq.
                categories = this._.uniq(categories);
                // append All to the first position.
                categories.unshift('All');
                return categories;
            },
            works_to_display() {
                // filter raw works array by selected category.
                return this.works.filter((work) => {
                    return work.category === this.selected_category || this.selected_category === 'All';
                });
            }
        },
        methods: {
            changeCategory(category) {
                this.selected_category = category;
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
