<template>
    <div class="portfolio">
        <div class="category-filter">
            <ul>
                <li
                    v-for="(category, index) in categories"
                    :key="'portfolio--category--' + index"
                    :class="{ active: category === selected_category }"
                >
                    <button
                        @click="changeCategory(category)"
                        class="btn"
                    >{{ category }}</button>
                </li>
            </ul>
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
                            @click="openPreview(work)"
                    ></b-img>
                    <span class="works--item__name" @click="openPreview(work)">
                        {{ work.name }}
                    </span>
                </b-col>
            </b-row>
        </div>
        <div class="action-btn--wrapper">
            <b-button href="#" class="action--btn" @click="loadMore">Load more projects</b-button>
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
            },
            loadMore() {
                this.$bvModal.msgBoxOk('Load more items not implemented yet!');
            },
            openPreview(work) {
                this.$bvModal.msgBoxOk('You trying to preview "' + work.name + '" but this feature not implemented yet!');
            }
        }
    }
</script>

<style scoped lang="scss">
    .portfolio {
        .category-filter {
            ul {
                text-align: center;
                list-style: none;
                padding: 0;
                display: block;
                margin-bottom: -9px;
                li {
                    display: inline-block;
                    margin-bottom: 9px;
                    &:hover .btn {
                        background-color: rgba(0, 0, 0, 0.156);
                    }
                    &.active .btn {
                        background: #FFFFFF;
                    }
                    &:not(:last-child) {
                        margin-right: 9px;
                    }
                    .btn {
                        text-transform: uppercase;
                        padding: 8px 26px;
                        border-radius: 4px;
                        background-color: rgba(0, 0, 0, 0.078);
                        font-size: 18px;
                        line-height: 20px;
                        color: #393939;
                        font-weight: 400;
                    }
                }
            }
        }
        .works {
            margin-top: 60px;
            .works--item {
                margin-bottom: 64px;
                .works--item__image {
                    width: 540px;
                    cursor: pointer;
                }
                .works--item__name {
                    font-size: 18px;
                    line-height: 20px;
                    color: #393939;
                    font-weight: 400;
                    display: block;
                    text-align: center;
                    margin-top: 30px;
                    text-transform: uppercase;
                    cursor: pointer;
                }
            }
        }
    }
</style>
